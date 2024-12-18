import { useState } from 'react'
import Image from 'next/image'

interface ImageContent {
    id: number;
    naam: string;
    beschrijving: string;
    url: string;
    uploadDatum: string;
}

interface ImageFormProps {
    imageContent?: ImageContent;
    onSubmit: (imageContent: Omit<ImageContent, 'id' | 'uploadDatum'>) => void;
    onCancel: () => void;
}

export default function ImageForm({ imageContent, onSubmit, onCancel }: ImageFormProps) {
    const [naam, setNaam] = useState(imageContent?.naam || '')
    const [beschrijving, setBeschrijving] = useState(imageContent?.beschrijving || '')
    const [url, setUrl] = useState(imageContent?.url || '')
    const [previewUrl, setPreviewUrl] = useState(imageContent?.url || '')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit({ naam, beschrijving, url })
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setUrl(reader.result as string)
                setPreviewUrl(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="naam">
                    Naam
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="naam"
                    type="text"
                    placeholder="Afbeeldingsnaam"
                    value={naam}
                    onChange={(e) => setNaam(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="beschrijving">
                    Beschrijving
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="beschrijving"
                    placeholder="Afbeeldingsbeschrijving"
                    value={beschrijving}
                    onChange={(e) => setBeschrijving(e.target.value)}
                    rows={3}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="afbeelding">
                    Afbeelding
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="afbeelding"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
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