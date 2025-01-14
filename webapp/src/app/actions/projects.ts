'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export type Project = {
    id: number
    title: string
    status: string
    type: string
    description: string | null
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
}

export type CreateProjectInput = {
    title: string
    status: string
    type: string
    description?: string
    imageUrl?: string
}

export type UpdateProjectInput = CreateProjectInput

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
        return { success: false, error: 'Failed to fetch projects', data: [] }
    }
}

export async function createProject(data: CreateProjectInput) {
    try {
        const project = await prisma.project.create({
            data: {
                title: data.title,
                status: data.status,
                type: data.type,
                description: data.description ?? null,
                imageUrl: data.imageUrl ?? null
            }
        })
        revalidatePath('/admin/projecten')
        revalidatePath('/projecten')
        return { success: true, data: project } as const
    } catch (error) {
        console.error('Error creating project:', error)
        return { success: false, error: 'Failed to create project' } as const
    }
}

export async function updateProject(id: number, data: UpdateProjectInput) {
    try {
        const project = await prisma.project.update({
            where: { id },
            data: {
                title: data.title,
                status: data.status,
                type: data.type,
                description: data.description ?? null,
                imageUrl: data.imageUrl ?? null
            }
        })
        revalidatePath('/admin/projecten')
        revalidatePath('/projecten')
        return { success: true, data: project } as const
    } catch (error) {
        console.error('Error updating project:', error)
        return { success: false, error: 'Failed to update project' } as const
    }
}

export async function getRecentProjects(limit: number = 4) {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            take: limit
        })
        return { success: true, data: projects } as const
    } catch (error) {
        console.error('Error fetching recent projects:', error)
        return { success: false, error: 'Failed to fetch recent projects' } as const
    }
}

export async function deleteProject(id: number) {
    try {
        await prisma.project.delete({
            where: { id }
        })
        revalidatePath('/admin/projecten')
        revalidatePath('/projecten')
        return { success: true } as const
    } catch (error) {
        console.error('Error deleting project:', error)
        return { success: false, error: 'Failed to delete project' } as const
    }
}

export async function getProjectsCount() {
    try {
        const totalCount = await prisma.project.count()

        const now = new Date()
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
        const monthlyCount = await prisma.project.count({
            where: {
                createdAt: {
                    gte: startOfMonth
                }
            }
        })

        return { success: true, data: { totalCount, monthlyCount } } as const
    } catch (error) {
        console.error('Error fetching project counts:', error)
        return { success: false, error: 'Failed to fetch project counts' } as const
    }
}