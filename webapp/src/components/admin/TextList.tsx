import { Edit, Trash2 } from 'lucide-react'

interface TextContent {
    id: number;
    pagina: string;
    sectie: string;
    inhoud: string;
    laatstBijgewerkt: string;
}

interface TextListProps {
    textContents: TextContent[];
    onEdit: (textContent: TextContent) => void;
    onDelete: (textId: number) => void;
}

export default function TextList({ textContents, onEdit, onDelete }: TextListProps) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pagina</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sectie</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inhoud</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Laatst Bijgewerkt</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acties</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {textContents.map((textContent) => (
                        <tr key={textContent.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{textContent.pagina}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{textContent.sectie}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="truncate max-w-xs">{textContent.inhoud}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">{textContent.laatstBijgewerkt}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button
                                    onClick={() => onEdit(textContent)}
                                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                                >
                                    <Edit size={18} />
                                </button>
                                <button
                                    onClick={() => onDelete(textContent.id)}
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