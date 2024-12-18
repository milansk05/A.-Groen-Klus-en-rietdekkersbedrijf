import { useState } from 'react'

interface Project {
    id: number;
    title: string;
    status: string;
    lastUpdate: string;
}

interface ProjectFormProps {
    project?: Project;
    onSubmit: (project: Omit<Project, 'id'> & { id?: number }) => void;
    onCancel: () => void;
}

export default function ProjectForm({ project, onSubmit, onCancel }: ProjectFormProps) {
    const [title, setTitle] = useState(project?.title || '')
    const [status, setStatus] = useState(project?.status || '')
    const [lastUpdate, setLastUpdate] = useState(project?.lastUpdate || '')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit({ id: project?.id, title, status, lastUpdate })
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
                    <option value="Gepland">Gepland</option>
                    <option value="In uitvoering">In uitvoering</option>
                    <option value="Afgerond">Afgerond</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastUpdate">
                    Laatste Update
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lastUpdate"
                    type="date"
                    value={lastUpdate}
                    onChange={(e) => setLastUpdate(e.target.value)}
                    required
                />
            </div>
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