'use client'

import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import { getProjects, createProject, updateProject, deleteProject, type Project } from '@/app/actions/projects'
import ProjectList from '../../../../../components/admin/ProjectList'
import ProjectForm from '../../../../../components/admin/ProjectForm'

export default function ProjectenPage() {
    const [projects, setProjects] = useState<Project[]>([])
    const [isAddingProject, setIsAddingProject] = useState(false)
    const [editingProject, setEditingProject] = useState<Project | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadProjects()
    }, [])

    const loadProjects = async () => {
        const result = await getProjects()
        if (result.success) {
            setProjects(result.data)
        }
        setIsLoading(false)
    }

    const handleAddProject = async (formData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => {
        const result = await createProject({
            title: formData.title,
            status: formData.status,
            description: formData.description || undefined,
            imageUrl: formData.imageUrl || undefined
        })
        if (result.success) {
            await loadProjects()
            setIsAddingProject(false)
        } else {
            alert('Er is een fout opgetreden bij het toevoegen van het project')
        }
    }

    const handleEditProject = async (formData: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => {
        if (!editingProject) return;
        const result = await updateProject(editingProject.id, {
            title: formData.title,
            status: formData.status,
            description: formData.description || undefined,
            imageUrl: formData.imageUrl || undefined
        })
        if (result.success) {
            await loadProjects()
            setEditingProject(null)
        } else {
            alert('Er is een fout opgetreden bij het bijwerken van het project')
        }
    }

    const handleDeleteProject = async (projectId: number) => {
        if (window.confirm('Weet u zeker dat u dit project wilt verwijderen?')) {
            const result = await deleteProject(projectId)
            if (result.success) {
                await loadProjects()
            } else {
                alert('Er is een fout opgetreden bij het verwijderen van het project')
            }
        }
    }

    if (isLoading) {
        return <div>Laden...</div>
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Projecten Beheer</h1>
                <button
                    onClick={() => setIsAddingProject(true)}
                    className="bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-primary/90 transition-colors"
                >
                    <Plus size={20} />
                    Nieuw Project
                </button>
            </div>

            {isAddingProject && (
                <ProjectForm onSubmit={handleAddProject} onCancel={() => setIsAddingProject(false)} />
            )}

            {editingProject && (
                <ProjectForm
                    project={editingProject}
                    onSubmit={handleEditProject}
                    onCancel={() => setEditingProject(null)}
                />
            )}

            <ProjectList
                projects={projects}
                onEdit={setEditingProject}
                onDelete={handleDeleteProject}
            />
        </div>
    )
}