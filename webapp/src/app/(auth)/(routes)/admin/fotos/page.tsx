'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import ImageList from '../../../../../components/admin/ImageList'
import ImageForm from '../../../../../components/admin/ImageForm'

interface ImageContent {
    id: number;
    naam: string;
    beschrijving: string;
    url: string;
    uploadDatum: string;
}

const initialImageContent: ImageContent[] = [
    { id: 1, naam: "Hero Afbeelding", beschrijving: "Hoofdafbeelding voor de homepage", url: "/images/hero.jpg", uploadDatum: "2023-06-15" },
    { id: 2, naam: "Over Ons Team", beschrijving: "Teamfoto voor de Over Ons pagina", url: "/images/team.jpg", uploadDatum: "2023-06-14" },
    { id: 3, naam: "Diensten Icoon", beschrijving: "Icoon voor de diensten sectie", url: "/images/services-icon.svg", uploadDatum: "2023-06-13" },
]

export default function FotosBeheerPagina() {
    const [imageContents, setImageContents] = useState<ImageContent[]>(initialImageContent)
    const [isAddingImage, setIsAddingImage] = useState(false)
    const [editingImage, setEditingImage] = useState<ImageContent | null>(null)

    const handleAddImage = (newImage: Omit<ImageContent, 'id' | 'uploadDatum'>) => {
        const currentDate = new Date().toISOString().split('T')[0]
        setImageContents([...imageContents, { ...newImage, id: imageContents.length + 1, uploadDatum: currentDate }])
        setIsAddingImage(false)
    }

    const handleEditImage = (updatedImage: Omit<ImageContent, 'id' | 'uploadDatum'> & { id?: number }) => {
        const currentDate = new Date().toISOString().split('T')[0]
        if (updatedImage.id) {
            setImageContents(imageContents.map(img => img.id === updatedImage.id ? { ...updatedImage, id: img.id, uploadDatum: currentDate } : img))
        }
        setEditingImage(null)
    }

    const handleDeleteImage = (imageId: number) => {
        setImageContents(imageContents.filter(img => img.id !== imageId))
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Afbeeldingen Beheer</h1>
                <button
                    onClick={() => setIsAddingImage(true)}
                    className="bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-primary/90 transition-colors"
                >
                    <Plus size={20} />
                    Nieuwe Afbeelding
                </button>
            </div>

            {isAddingImage && (
                <ImageForm onSubmit={handleAddImage} onCancel={() => setIsAddingImage(false)} />
            )}

            {editingImage && (
                <ImageForm
                    imageContent={editingImage}
                    onSubmit={handleEditImage}
                    onCancel={() => setEditingImage(null)}
                />
            )}

            <ImageList
                imageContents={imageContents}
                onEdit={setEditingImage}
                onDelete={handleDeleteImage}
            />
        </div>
    )
}