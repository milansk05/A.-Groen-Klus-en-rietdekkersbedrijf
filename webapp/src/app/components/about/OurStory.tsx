import Image from 'next/image'
import Link from 'next/link'

export default function OurStory() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold mb-4">Ons Verhaal</h2>
                    <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non sapien eget diam gravida malesuada vitae id sem. In pretium odio ac nisl accumsan pharetra. Mauris eu erat porta, pretium eros ac, finibus nisi. Aenean feugiat posuere tempor. Fusce mollis massa nec mauris posuere condimentum. In dapibus pellentesque nislLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non sapien eget diam gravida malesuada vitae id sem. In pretium odio ac nisl accumsan pharetra. Mauris eu
                    </p>
                    <div className="pt-4">
                        <Link
                            href="/contact"
                            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
                        >
                            Neem contact op
                        </Link>
                    </div>
                </div>
                <div className="relative h-[300px] md:h-[400px]">
                    <Image
                        src="/images/randomfoto.jpg"
                        alt="Ons werk in uitvoering"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}