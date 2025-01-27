'use client'

import { useState, useEffect } from 'react'
import { Plus } from 'lucide-react'
import TextList from '../../../../../components/admin/TextList'
import TextForm from '../../../../../components/admin/TextForm'
import { getTextContents, createTextContent, updateTextContent, deleteTextContent, TextContent } from '@/app/actions/text'

export default function TekstBeheerPagina() {
    const [textContents, setTextContents] = useState<TextContent[]>([])
    const [isAddingText, setIsAddingText] = useState(false)
    const [editingText, setEditingText] = useState<TextContent | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetchTextContents()
    }, [])

    const fetchTextContents = async () => {
        setIsLoading(true)
        setError(null)
        try {
            const result = await getTextContents()
            if (result.success) {
                setTextContents(result.data)
            } else {
                setError(`Er is een fout opgetreden bij het ophalen van de tekstinhoud: ${result.error}`)
            }
        } catch (error) {
            console.error('Unexpected error:', error)
            setError('Er is een onverwachte fout opgetreden. Controleer de console voor meer details.')
        } finally {
            setIsLoading(false)
        }
    }

    const handleAddText = async (newText: Omit<TextContent, 'id' | 'createdAt' | 'updatedAt'>) => {
        try {
            const result = await createTextContent(newText)
            if (result.success) {
                await fetchTextContents()
                setIsAddingText(false)
            } else {
                setError(`Fout bij het toevoegen van tekstinhoud: ${result.error}`)
            }
        } catch (error) {
            console.error('Unexpected error:', error)
            setError('Er is een onverwachte fout opgetreden bij het toevoegen van tekstinhoud.')
        }
    }

    const handleEditText = async (updatedText: Omit<TextContent, 'id' | 'createdAt' | 'updatedAt'> & { id?: number }) => {
        if (updatedText.id) {
            try {
                const result = await updateTextContent(updatedText.id, updatedText)
                if (result.success) {
                    await fetchTextContents()
                    setEditingText(null)
                } else {
                    setError(`Fout bij het bijwerken van tekstinhoud: ${result.error}`)
                }
            } catch (error) {
                console.error('Unexpected error:', error)
                setError('Er is een onverwachte fout opgetreden bij het bijwerken van tekstinhoud.')
            }
        }
    }

    const handleDeleteText = async (textId: number) => {
        try {
            const result = await deleteTextContent(textId)
            if (result.success) {
                await fetchTextContents()
            } else {
                setError(`Fout bij het verwijderen van tekstinhoud: ${result.error}`)
            }
        } catch (error) {
            console.error('Unexpected error:', error)
            setError('Er is een onverwachte fout opgetreden bij het verwijderen van tekstinhoud.')
        }
    }

    if (isLoading) {
        return <div>Laden...</div>
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

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Fout: </strong>
                    <span className="block sm:inline">{error}</span>
                </div>
            )}

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