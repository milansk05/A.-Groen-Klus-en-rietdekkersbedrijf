'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import TextList from '../../../../../components/admin/TextList'
import TextForm from '../../../../../components/admin/TextForm'

interface TextContent {
    id: number;
    pagina: string;
    sectie: string;
    inhoud: string;
    laatstBijgewerkt: string;
}

const initialTextContent: TextContent[] = [
    { id: 1, pagina: "Home", sectie: "Hero", inhoud: "Welkom bij A. Groen Dienstverlening", laatstBijgewerkt: "2023-06-15" },
    { id: 2, pagina: "Over Ons", sectie: "Introductie", inhoud: "A. Groen Dienstverlening is uw betrouwbare partner voor...", laatstBijgewerkt: "2023-06-14" },
    { id: 3, pagina: "Diensten", sectie: "Dakwerk", inhoud: "Wij bieden professionele dakwerkzaamheden...", laatstBijgewerkt: "2023-06-13" },
]

export default function TekstBeheerPagina() {
    const [textContents, setTextContents] = useState<TextContent[]>(initialTextContent)
    const [isAddingText, setIsAddingText] = useState(false)
    const [editingText, setEditingText] = useState<TextContent | null>(null)

    const handleAddText = (newText: Omit<TextContent, 'id' | 'laatstBijgewerkt'>) => {
        const currentDate = new Date().toISOString().split('T')[0]
        setTextContents([...textContents, { ...newText, id: textContents.length + 1, laatstBijgewerkt: currentDate }])
        setIsAddingText(false)
    }

    const handleEditText = (updatedText: Omit<TextContent, 'id' | 'laatstBijgewerkt'> & { id?: number }) => {
        const currentDate = new Date().toISOString().split('T')[0]
        if (updatedText.id) {
            setTextContents(textContents.map(t => t.id === updatedText.id ? { ...updatedText, id: t.id, laatstBijgewerkt: currentDate } : t))
        }
        setEditingText(null)
    }

    const handleDeleteText = (textId: number) => {
        setTextContents(textContents.filter(t => t.id !== textId))
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Tekst Beheer</h1>
                <button
                    onClick={() => setIsAddingText(true)}
                    className="bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-primary/90 transition-colors"
                >
                    <Plus size={20} />
                    Nieuwe Tekst
                </button>
            </div>

            {isAddingText && (
                <TextForm onSubmit={handleAddText} onCancel={() => setIsAddingText(false)} />
            )}

            {editingText && (
                <TextForm
                    textContent={editingText}
                    onSubmit={handleEditText}
                    onCancel={() => setEditingText(null)}
                />
            )}

            <TextList
                textContents={textContents}
                onEdit={setEditingText}
                onDelete={handleDeleteText}
            />
        </div>
    )
}