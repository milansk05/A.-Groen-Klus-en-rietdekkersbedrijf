'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export type Image = {
    id: number
    name: string
    description: string | null
    url: string
    pageSection: string
    createdAt: Date
    updatedAt: Date
}

export type CreateImageInput = {
    name: string
    description?: string
    url: string
    pageSection: string
}

export type UpdateImageInput = CreateImageInput

export async function getImages() {
    try {
        const images = await prisma.image.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })
        return { success: true, data: images } as const
    } catch (error) {
        console.error('Error fetching images:', error)
        return { success: false, error: 'Failed to fetch images' } as const
    }
}

export async function getImagesBySection(section: string) {
    try {
        const images = await prisma.image.findMany({
            where: { pageSection: section },
            orderBy: {
                createdAt: 'desc'
            }
        })
        return { success: true, data: images } as const
    } catch (error) {
        console.error('Error fetching images:', error)
        return { success: false, error: 'Failed to fetch images' } as const
    }
}

export async function createImage(data: CreateImageInput) {
    try {
        const image = await prisma.image.create({
            data: {
                name: data.name,
                description: data.description || null,
                url: data.url,
                pageSection: data.pageSection
            }
        })
        revalidatePath('/admin/fotos')
        revalidatePath('/over-ons')
        return { success: true, data: image } as const
    } catch (error) {
        console.error('Error creating image:', error)
        return { success: false, error: 'Failed to create image' } as const
    }
}

export async function updateImage(id: number, data: UpdateImageInput) {
    console.log('Updating image:', id, data)
    if (!id || !data) {
        console.error('Invalid input for updateImage:', { id, data })
        return { success: false, error: 'Invalid input for image update' } as const
    }
    try {
        const image = await prisma.image.update({
            where: { id },
            data: {
                name: data.name,
                description: data.description || null,
                url: data.url,
                pageSection: data.pageSection
            }
        })
        revalidatePath('/admin/fotos')
        revalidatePath('/over-ons')
        return { success: true, data: image } as const
    } catch (error) {
        console.error('Error updating image:', error)
        return { success: false, error: 'Failed to update image' } as const
    }
}

export async function deleteImage(id: number) {
    try {
        await prisma.image.delete({
            where: { id }
        })
        revalidatePath('/admin/fotos')
        revalidatePath('/over-ons')
        return { success: true } as const
    } catch (error) {
        console.error('Error deleting image:', error)
        return { success: false, error: 'Failed to delete image' } as const
    }
}