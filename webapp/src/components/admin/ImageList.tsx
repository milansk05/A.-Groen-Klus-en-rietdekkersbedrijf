import { Edit, Trash2 } from 'lucide-react'
import Image from 'next/image'
import { type Image as ImageType } from '@/app/actions/images'

interface ImageListProps {
    images: ImageType[]
    onEdit: (image: ImageType) => void
    onDelete: (imageId: number) => void
}

const SECTION_LABELS: Record<string, string> = {
    'about-hero': 'Over Ons - Hero',
    'mission-vision': 'Over Ons - Missie & Visie',
    'our-story': 'Over Ons - Ons Verhaal',
}

export default function ImageList({ images, onEdit, onDelete }: ImageListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
                <div key={image.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-48">
                        <Image
                            src={image.url}
                            alt={image.name}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-lg mb-2">{image.name}</h3>
                        <p className="text-primary text-sm mb-2">{SECTION_LABELS[image.section] || image.section}</p>
                        {image.description && (
                            <p className="text-gray-600 text-sm mb-4">{image.description}</p>
                        )}
                        <div className="flex justify-end">
                            <button
                                onClick={() => onEdit(image)}
                                className="text-indigo-600 hover:text-indigo-900 mr-4"
                            >
                                <Edit size={18} />
                            </button>
                            <button
                                onClick={() => onDelete(image.id)}
                                className="text-red-600 hover:text-red-900"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}