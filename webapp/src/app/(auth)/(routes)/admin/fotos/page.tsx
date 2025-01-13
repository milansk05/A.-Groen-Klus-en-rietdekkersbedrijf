'use client'

import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import { getImages, createImage, updateImage, deleteImage, type Image } from '@/app/actions/images'
import ImageList from '../../../../../components/admin/ImageList'
import ImageForm from '../../../../../components/admin/ImageForm'

export default function FotosPage() {
    const [images, setImages] = useState<Image[]>([])
    const [isAddingImage, setIsAddingImage] = useState(false)
    const [editingImage, setEditingImage] = useState<Image | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadImages()
    }, [])

    const loadImages = async () => {
        const result = await getImages()
        if (result.success) {
            setImages(result.data)
        }
        setIsLoading(false)
    }

    const handleAddImage = async (formData: Omit<Image, 'id' | 'createdAt' | 'updatedAt'>) => {
        console.log('Submitting form data:', formData)
        const result = await createImage({
            name: formData.name,
            description: formData.description || undefined,
            url: formData.url,
            pageSection: formData.pageSection
        })
        if (result.success) {
            await loadImages()
            setIsAddingImage(false)
        } else {
            alert('Er is een fout opgetreden bij het toevoegen van de afbeelding: ' + result.error)
        }
    }

    const handleEditImage = async (formData: Omit<Image, 'id' | 'createdAt' | 'updatedAt'>) => {
        if (!editingImage) {
            console.error('No image selected for editing');
            return;
        }
        console.log('Editing image:', editingImage.id, formData);
        if (!formData || typeof formData !== 'object') {
            console.error('Invalid form data:', formData);
            alert('Er is een fout opgetreden: Ongeldige formuliergegevens');
            return;
        }
        const result = await updateImage(editingImage.id, {
            name: formData.name,
            description: formData.description || undefined,
            url: formData.url,
            pageSection: formData.pageSection
        });
        if (result.success) {
            await loadImages();
            setEditingImage(null);
        } else {
            console.error('Error updating image:', result.error);
            alert('Er is een fout opgetreden bij het bijwerken van de afbeelding: ' + result.error);
        }
    }

    const handleDeleteImage = async (imageId: number) => {
        if (window.confirm('Weet u zeker dat u deze afbeelding wilt verwijderen?')) {
            const result = await deleteImage(imageId)
            if (result.success) {
                await loadImages()
            } else {
                alert('Er is een fout opgetreden bij het verwijderen van de afbeelding: ' + result.error)
            }
        }
    }

    if (isLoading) {
        return <div>Laden...</div>
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
                    image={editingImage}
                    onSubmit={handleEditImage}
                    onCancel={() => setEditingImage(null)}
                />
            )}

            <ImageList
                images={images}
                onEdit={setEditingImage}
                onDelete={handleDeleteImage}
            />
        </div>
    )
}