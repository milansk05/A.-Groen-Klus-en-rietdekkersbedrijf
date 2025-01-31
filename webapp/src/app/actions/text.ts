'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export type TextContent = {
    id: number
    pagina: string
    sectie: string
    inhoud: string
    createdAt: Date
    updatedAt: Date
}

export type CreateTextContentInput = {
    pagina: string
    sectie: string
    inhoud: string
}

export type UpdateTextContentInput = CreateTextContentInput

export async function getTextContents() {
    try {
        console.log('Attempting to fetch text contents...')
        const textContents = await prisma.textContent.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })
        console.log('Fetched text contents:', textContents)
        return { success: true, data: textContents }
    } catch (error) {
        console.error('Error fetching text contents:', error)
        let errorMessage = 'Failed to fetch text contents'
        if (error instanceof Error) {
            errorMessage += `: ${error.message}`
        }
        return { success: false, error: errorMessage, data: [] }
    } finally {
        await prisma.$disconnect()
    }
}

export async function getTextContentByPageAndSections(pagina: string, secties: string[]) {
    try {
        const textContents = await prisma.textContent.findMany({
            where: {
                pagina,
                sectie: {
                    in: secties
                }
            }
        })
        return { success: true, data: textContents }
    } catch (error) {
        console.error('Error fetching text contents:', error)
        let errorMessage = 'Failed to fetch text contents'
        if (error instanceof Error) {
            errorMessage += `: ${error.message}`
        }
        return { success: false, error: errorMessage, data: [] }
    } finally {
        await prisma.$disconnect()
    }
}

export async function createTextContent(data: CreateTextContentInput) {
    try {
        const textContent = await prisma.textContent.create({
            data: {
                pagina: data.pagina,
                sectie: data.sectie,
                inhoud: data.inhoud
            }
        })
        revalidatePath('/admin/tekst')
        revalidatePath(`/${data.pagina}`)
        return { success: true, data: textContent }
    } catch (error) {
        console.error('Error creating text content:', error)
        return { success: false, error: 'Failed to create text content' }
    } finally {
        await prisma.$disconnect()
    }
}

export async function updateTextContent(id: number, data: UpdateTextContentInput) {
    try {
        const textContent = await prisma.textContent.update({
            where: { id },
            data: {
                pagina: data.pagina,
                sectie: data.sectie,
                inhoud: data.inhoud
            }
        })
        revalidatePath('/admin/tekst')
        revalidatePath(`/${data.pagina}`)
        return { success: true, data: textContent }
    } catch (error) {
        console.error('Error updating text content:', error)
        return { success: false, error: 'Failed to update text content' }
    } finally {
        await prisma.$disconnect()
    }
}

export async function deleteTextContent(id: number) {
    try {
        const deletedContent = await prisma.textContent.delete({
            where: { id }
        })
        revalidatePath('/admin/tekst')
        revalidatePath(`/${deletedContent.pagina}`)
        return { success: true }
    } catch (error) {
        console.error('Error deleting text content:', error)
        return { success: false, error: 'Failed to delete text content' }
    } finally {
        await prisma.$disconnect()
    }
}