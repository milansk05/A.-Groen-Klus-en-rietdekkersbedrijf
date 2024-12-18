import { useState } from 'react'

interface TextContent {
    id: number;
    pagina: string;
    sectie: string;
    inhoud: string;
    laatstBijgewerkt: string;
}

interface TextFormProps {
    textContent?: TextContent;
    onSubmit: (textContent: Omit<TextContent, 'id' | 'laatstBijgewerkt'>) => void;
    onCancel: () => void;
}

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
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="pagina"
                    type="text"
                    placeholder="Paginanaam"
                    value={pagina}
                    onChange={(e) => setPagina(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sectie">
                    Sectie
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="sectie"
                    type="text"
                    placeholder="Sectienaam"
                    value={sectie}
                    onChange={(e) => setSectie(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inhoud">
                    Inhoud
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="inhoud"
                    placeholder="Tekstinhoud"
                    value={inhoud}
                    onChange={(e) => setInhoud(e.target.value)}
                    rows={4}
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