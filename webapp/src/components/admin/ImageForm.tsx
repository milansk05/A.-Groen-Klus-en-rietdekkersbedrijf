'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

interface ImageContent {
    id: number;
    name: string;
    description: string;
    url: string;
    uploadDatum: string;
}

interface ImageFormProps {
    imageContent?: ImageContent;
    onSubmit: (imageContent: FormData) => void;
    onCancel: () => void;
}

export default function ImageForm({ imageContent, onSubmit, onCancel }: ImageFormProps) {
    const [name, setName] = useState(imageContent?.name || '')
    const [description, setDescription] = useState(imageContent?.description || '')
    const [previewUrl, setPreviewUrl] = useState(imageContent?.url || '')
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        if (fileInputRef.current?.files?.[0]) {
            formData.append('file', fileInputRef.current.files[0])
        } else if (imageContent) {
            formData.append('url', imageContent.url)
        }
        onSubmit(formData)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
                    Afbeelding
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="file"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                />
            </div>
            {previewUrl && (
                <div className="mb-4">
                    <p className="block text-gray-700 text-sm font-bold mb-2">Voorbeeld:</p>
                    <div className="relative h-48 w-full">
                        <Image
                            src={previewUrl}
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
                    {imageContent ? 'Bijwerken' : 'Toevoegen'}
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