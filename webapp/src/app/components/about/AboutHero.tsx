import Image from 'next/image'

export default function AboutHero() {
    return (
        <div className="container mx-auto px-4 pt-24 pb-12">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Over Ons Bedrijf</h1>
                <p className="text-gray-600">Leer meer over het bedrijf!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold mb-4">Over ons</h2>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non sapien eget diam gravida malesuada vitae id sem. In pretium odio ac nisl accumsan pharetra. Mauris eu erat porta, pretium eros ac, finibus nisi. Aenean feugiat posuere tempor. Fusce mollis massa nec mauris posuere condimentum. In dapibus pellentesque nislLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non sapien eget diam gravida malesuada vitae id sem. In pretium odio ac nisl accumsan pharetra. Mauris eu
                    </p>
                </div>
                <div className="relative h-[300px] md:h-[400px]">
                    <Image
                        src="/images/randomfoto.jpg"
                        alt="A. Groen Dienstverlening gebouw"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}