'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { type Image as ImageType } from '@/app/actions/images'
import { uploadFile } from '@/app/actions/upload'

// Definieert het type voor formuliergegevens zonder de id en tijdstempels
type ImageFormData = Omit<ImageType, 'id' | 'createdAt' | 'updatedAt'>

interface ImageFormProps {
    image?: ImageType // Optioneel bestaand afbeeldingsobject
    onSubmit: (image: ImageFormData) => void // Callback bij formulierverzending
    onCancel: () => void // Callback bij annulering
}

// Lijst van secties waarin afbeeldingen kunnen worden geplaatst
const SECTIONS = [
    { value: 'about-hero', label: 'Over Ons - Hero' },
    { value: 'mission-vision', label: 'Over Ons - Missie & Visie' },
    { value: 'our-story', label: 'Over Ons - Ons Verhaal' },
]

export default function ImageForm({ image, onSubmit, onCancel }: ImageFormProps) {
    // State voor formuliervelden
    const [name, setName] = useState(image?.name || '')
    const [description, setDescription] = useState(image?.description || '')
    const [section, setSection] = useState(image?.pageSection || '')
    const [url, setUrl] = useState(image?.url || '')
    const [isUploading, setIsUploading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Functie om formulierverzending af te handelen
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit({
            name,
            description,
            url,
            pageSection: section
        })
    }

    // Functie om een bestand te uploaden
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setIsUploading(true)
            const formData = new FormData()
            formData.append('file', file)

            try {
                const result = await uploadFile(formData)
                console.log('Upload result:', result)

                if (result.success) {
                    setUrl(result.filename)
                } else {
                    alert('Fout bij het uploaden van de afbeelding: ' + result.error)
                }
            } catch (error) {
                console.error('Error uploading file:', error)
                alert('Er is een fout opgetreden bij het uploaden van de afbeelding')
            } finally {
                setIsUploading(false)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {/* Naam invoerveld */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Naam
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Afbeeldingsnaam"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            {/* Sectie selectievak */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="section">
                    Sectie
                </label>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="section"
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    required
                >
                    <option value="">Selecteer sectie</option>
                    {SECTIONS.map((section) => (
                        <option key={section.value} value={section.value}>
                            {section.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Beschrijving invoerveld */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Beschrijving
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    placeholder="Afbeeldingsbeschrijving"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                />
            </div>

            {/* Bestandsupload knop */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                    Afbeelding
                </label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="hidden"
                />
                <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    disabled={isUploading}
                >
                    {isUploading ? 'Uploading...' : 'Kies bestand'}
                </button>
            </div>

            {/* Actieknoppen */}
            <div className="flex items-center justify-between">
                <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    {image ? 'Bijwerken' : 'Toevoegen'}
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onCancel}>
                    Annuleren
                </button>
            </div>
        </form>
    )
}