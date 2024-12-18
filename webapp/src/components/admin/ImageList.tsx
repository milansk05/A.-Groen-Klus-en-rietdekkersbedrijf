import Image from 'next/image'
import { Edit, Trash2 } from 'lucide-react'

interface ImageContent {
    id: number;
    naam: string;
    beschrijving: string;
    url: string;
    uploadDatum: string;
}

interface ImageListProps {
    imageContents: ImageContent[];
    onEdit: (imageContent: ImageContent) => void;
    onDelete: (imageId: number) => void;
}

export default function ImageList({ imageContents, onEdit, onDelete }: ImageListProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imageContents.map((imageContent) => (
                <div key={imageContent.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-48">
                        <Image
                            src={imageContent.url}
                            alt={imageContent.naam}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-lg mb-2">{imageContent.naam}</h3>
                        <p className="text-gray-600 text-sm mb-2">{imageContent.beschrijving}</p>
                        <p className="text-gray-500 text-xs mb-4">Geüpload op: {imageContent.uploadDatum}</p>
                        <div className="flex justify-end">
                            <button
                                onClick={() => onEdit(imageContent)}
                                className="text-indigo-600 hover:text-indigo-900 mr-4"
                            >
                                <Edit size={18} />
                            </button>
                            <button
                                onClick={() => onDelete(imageContent.id)}
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