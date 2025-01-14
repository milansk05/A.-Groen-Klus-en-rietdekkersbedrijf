import { useState } from 'react'
import Image from 'next/image'

interface Project {
    id: number
    title: string
    status: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date
    updatedAt?: Date
}

interface ProjectFormProps {
    project?: Project
    onSubmit: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => void
    onCancel: () => void
}

export default function ProjectForm({ project, onSubmit, onCancel }: ProjectFormProps) {
    const [title, setTitle] = useState(project?.title || '');
    const [status, setStatus] = useState(project?.status || '');
    const [description, setDescription] = useState(project?.description || '')
    const [imageUrl, setImageUrl] = useState(project?.imageUrl || '')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit({
            title,
            status,
            description: description || undefined,
            imageUrl: imageUrl || undefined
        })
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Titel
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="Projecttitel"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                    Status
                </label>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                >
                    <option value="">Selecteer status</option>
                    <option value="In voorbereiding">In voorbereiding</option>
                    <option value="In uitvoering">In uitvoering</option>
                    <option value="Afgerond">Afgerond</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Beschrijving
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    placeholder="Projectbeschrijving"
                    value={description || ''}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">
                    Afbeelding URL
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="imageUrl"
                    type="text"
                    placeholder="https://voorbeeld.nl/afbeelding.jpg"
                    value={imageUrl || ''}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </div>
            {imageUrl && (
                <div className="mb-4">
                    <p className="block text-gray-700 text-sm font-bold mb-2">Voorbeeld:</p>
                    <div className="relative h-48 w-full">
                        <Image
                            src={imageUrl}
                            alt="Voorbeeld"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>
            )}
            <div className="flex items-center justify-between">
                <button
                    className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    {project ? 'Bijwerken' : 'Toevoegen'}
                </button>
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={onCancel}
                >
                    Annuleren
                </button>
            </div>
        </form>
    )
}