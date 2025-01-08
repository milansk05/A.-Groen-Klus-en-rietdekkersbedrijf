import { Edit, Trash2 } from 'lucide-react'
import Image from 'next/image'

interface Project {
    id: number
    title: string
    status: string
    description?: string | null
    imageUrl?: string | null
    createdAt: Date
    updatedAt: Date
}

interface ProjectListProps {
    projects: Project[]
    onEdit: (project: Project) => void
    onDelete: (projectId: number) => void
}

export default function ProjectList({ projects, onEdit, onDelete }: ProjectListProps) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Afbeelding</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titel</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Laatste Update</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acties</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {project.imageUrl ? (
                                    <div className="relative h-16 w-16">
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded"
                                        />
                                    </div>
                                ) : (
                                    <div className="h-16 w-16 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                                        Geen afbeelding
                                    </div>
                                )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">{project.title}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{project.status}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {new Date(project.updatedAt).toLocaleDateString('nl-NL')}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button
                                    onClick={() => onEdit(project)}
                                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                                >
                                    <Edit size={18} />
                                </button>
                                <button
                                    onClick={() => onDelete(project.id)}
                                    className="text-red-600 hover:text-red-900"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}