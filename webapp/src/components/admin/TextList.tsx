import { Edit, Trash2 } from 'lucide-react'
import { TextContent } from '@/app/actions/text'

interface TextListProps {
    textContents: TextContent[];
    onEdit: (textContent: TextContent) => void;
    onDelete: (textId: number) => void;
}

const PAGES = {
    'home': 'Home',
    'over-ons': 'Over Ons',
    'projecten': 'Projecten',
    'contact': 'Contact',
};

const SECTIONS = {
    'home': {
        'hero-title': 'Hero Titel',
        'hero-subtitle': 'Hero Ondertitel',
        'cta-text': 'CTA Tekst',
    },
    'over-ons': {
        'intro': 'Introductie',
        'missie': 'Missie',
        'visie': 'Visie',
    },
    'projecten': {
        'intro': 'Introductie',
        'rietdekken-intro': 'Rietdekken Intro',
        'klussen-intro': 'Klussen Intro',
    },
    'contact': {
        'intro': 'Introductie',
        'adres': 'Adres',
        'openingstijden': 'Openingstijden',
    },
};

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
                            <td className="px-6 py-4 whitespace-nowrap">
                                {PAGES[textContent.pagina as keyof typeof PAGES] || textContent.pagina}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {SECTIONS[textContent.pagina as keyof typeof SECTIONS]?.[textContent.sectie as keyof (typeof SECTIONS)[keyof typeof SECTIONS]] || textContent.sectie}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="truncate max-w-xs">{textContent.inhoud}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">{new Date(textContent.updatedAt).toLocaleString()}</td>
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