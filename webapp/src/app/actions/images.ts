'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export type Image = {
    id: number
    name: string
    description: string | null
    url: string
    section: string
    createdAt: Date
    updatedAt: Date
    pageSection: string
}

export type CreateImageInput = {
    name: string
    description?: string
    url: string
    section: string
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

export async function getImagesBySection(pageSection: string) {
    try {
        const images = await prisma.image.findMany({
            where: { pageSection },
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
    if (!data || typeof data !== 'object') {
        console.error('Invalid data received:', data)
        return { success: false, error: 'Invalid data provided' } as const
    }

    try {
        const image = await prisma.image.create({
            data: {
                name: data.name,
                description: data.description || null,
                url: data.url,
                pageSection: data.section
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
    try {
        const image = await prisma.image.update({
            where: { id },
            data: {
                ...data,
                description: data.description || null,
                pageSection: data.section
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