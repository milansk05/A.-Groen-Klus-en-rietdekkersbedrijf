'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import ProjectList from '../../../../../components/admin/ProjectList'
import ProjectForm from '../../../../../components/admin/ProjectForm'

interface Project {
    id: number;
    title: string;
    status: string;
    lastUpdate: string;
}

const initialProjects: Project[] = [
    { id: 1, title: "Dakrenovatie Villa", status: "In uitvoering", lastUpdate: "2023-06-15" },
    { id: 2, title: "Tuinaanleg Stadstuin", status: "Afgerond", lastUpdate: "2023-05-20" },
    { id: 3, title: "Badkamerrenovatie", status: "Gepland", lastUpdate: "2023-07-01" },
]

export default function ProjectenPage() {
    const [projects, setProjects] = useState<Project[]>(initialProjects)
    const [isAddingProject, setIsAddingProject] = useState(false)
    const [editingProject, setEditingProject] = useState<Project | null>(null)

    const handleAddProject = (newProject: Omit<Project, 'id'>) => {
        setProjects([...projects, { ...newProject, id: projects.length + 1 }])
        setIsAddingProject(false)
    }

    const handleEditProject = (updatedProject: Omit<Project, 'id'> & { id?: number }) => {
        if (updatedProject.id) {
            setProjects(projects.map(p => p.id === updatedProject.id ? { ...updatedProject, id: p.id } : p))
        }
        setEditingProject(null)
    }

    const handleDeleteProject = (projectId: number) => {
        setProjects(projects.filter(p => p.id !== projectId))
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