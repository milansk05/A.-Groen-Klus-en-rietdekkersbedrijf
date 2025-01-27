import { useState } from 'react'
import { TextContent } from '@/app/actions/text'

interface TextFormProps {
    textContent?: TextContent;
    onSubmit: (textContent: Omit<TextContent, 'id' | 'createdAt' | 'updatedAt'>) => void;
    onCancel: () => void;
}

const PAGES = [
    { value: 'home', label: 'Home' },
    { value: 'over-ons', label: 'Over Ons' },
    { value: 'projecten', label: 'Projecten' },
    { value: 'contact', label: 'Contact' },
];

const SECTIONS = {
    'home': [
        { value: 'hero-title', label: 'Hero Titel' },
        { value: 'hero-subtitle', label: 'Hero Ondertitel' },
        { value: 'cta-text', label: 'CTA Tekst' },
    ],
    'over-ons': [
        { value: 'intro', label: 'Introductie' },
        { value: 'missie', label: 'Missie' },
        { value: 'visie', label: 'Visie' },
    ],
    'projecten': [
        { value: 'intro', label: 'Introductie' },
        { value: 'rietdekken-intro', label: 'Rietdekken Intro' },
        { value: 'klussen-intro', label: 'Klussen Intro' },
    ],
    'contact': [
        { value: 'intro', label: 'Introductie' },
        { value: 'adres', label: 'Adres' },
        { value: 'openingstijden', label: 'Openingstijden' },
    ],
};

export default function TextForm({ textContent, onSubmit, onCancel }: TextFormProps) {
    const [pagina, setPagina] = useState(textContent?.pagina || '')
    const [sectie, setSectie] = useState(textContent?.sectie || '')
    const [inhoud, setInhoud] = useState(textContent?.inhoud || '')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit({ pagina, sectie, inhoud })
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pagina">
                    Pagina
                </label>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="pagina"
                    value={pagina}
                    onChange={(e) => {
                        setPagina(e.target.value)
                        setSectie('')  // Reset sectie when page changes
                    }}
                    required
                >
                    <option value="">Selecteer een pagina</option>
                    {PAGES.map((page) => (
                        <option key={page.value} value={page.value}>{page.label}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sectie">
                    Sectie
                </label>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="sectie"
                    value={sectie}
                    onChange={(e) => setSectie(e.target.value)}
                    required
                    disabled={!pagina}
                >
                    <option value="">Selecteer een sectie</option>
                    {pagina && SECTIONS[pagina as keyof typeof SECTIONS].map((section) => (
                        <option key={section.value} value={section.value}>{section.label}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inhoud">
                    Inhoud
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="inhoud"
                    placeholder="Voer hier de tekstinhoud in"
                    value={inhoud}
                    onChange={(e) => setInhoud(e.target.value)}
                    rows={6}
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    {textContent ? 'Bijwerken' : 'Toevoegen'}
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