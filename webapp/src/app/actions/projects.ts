'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function getProjects() {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })
        return { success: true, data: projects }
    } catch (error) {
        console.error('Error fetching projects:', error)
        return { success: false, error: 'Failed to fetch projects' }
    }
}

export async function createProject(data: {
    title: string
    status: string
    description?: string
    imageUrl?: string
}) {
    try {
        const project = await prisma.project.create({
            data
        })
        revalidatePath('/admin/projecten')
        revalidatePath('/projecten')
        return { success: true, data: project }
    } catch (error) {
        console.error('Error creating project:', error)
        return { success: false, error: 'Failed to create project' }
    }
}

export async function updateProject(id: number, data: {
    title: string
    status: string
    description?: string
    imageUrl?: string
}) {
    try {
        const project = await prisma.project.update({
            where: { id },
            data
        })
        revalidatePath('/admin/projecten')
        revalidatePath('/projecten')
        return { success: true, data: project }
    } catch (error) {
        console.error('Error updating project:', error)
        return { success: false, error: 'Failed to update project' }
    }
}

export async function deleteProject(id: number) {
    try {
        await prisma.project.delete({
            where: { id }
        })
        revalidatePath('/admin/projecten')
        revalidatePath('/projecten')
        return { success: true }
    } catch (error) {
        console.error('Error deleting project:', error)
        return { success: false, error: 'Failed to delete project' }
    }
}