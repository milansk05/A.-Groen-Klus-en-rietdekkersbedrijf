import { Project } from '@/app/actions/projects'

interface ProjectsListProps {
    projects: Project[]
}

export default function ProjectsList({ projects }: ProjectsListProps) {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Recente Projecten</h2>
            <p className="text-gray-600 mb-6">Overzicht van de meest recente projecten</p>

            <div className="space-y-4">
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <div
                            key={project.id}
                            className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium">{project.title}</h3>
                                <p className="text-sm text-gray-500">
                                    Laatste update: {new Date(project.updatedAt).toLocaleString('nl-NL')}
                                </p>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">{project.status}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Geen recente projecten gevonden.</p>
                )}
            </div>
        </div>
    )
}