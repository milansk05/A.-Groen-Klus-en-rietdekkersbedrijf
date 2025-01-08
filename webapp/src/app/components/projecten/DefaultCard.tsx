import Image from 'next/image'

interface DefaultCardProps {
  title: string
  description?: string
  img?: string
}

export default function DefaultCard({ title, description, img }: DefaultCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48">
        <Image
          src={img || '/images/placeholder.jpg'}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600 text-sm">{description}</p>
        )}
      </div>
    </div>
  )
}