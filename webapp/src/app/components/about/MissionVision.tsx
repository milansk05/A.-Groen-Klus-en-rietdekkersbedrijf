import Image from 'next/image'

export default function MissionVision() {
    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-[300px] md:h-[400px]">
                        <Image
                            src="/images/randomfoto.jpg"
                            alt="Oude schuur representeert onze historie"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold mb-4">Missie en visie</h2>
                        <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non sapien eget diam gravida malesuada vitae id sem. In pretium odio ac nisl accumsan pharetra. Mauris eu erat porta, pretium eros ac, finibus nisi. Aenean feugiat posuere tempor. Fusce mollis massa nec mauris posuere condimentum. In dapibus pellentesque nislLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non sapien eget diam gravida malesuada vitae id sem. In pretium odio ac nisl accumsan pharetra. Mauris eu
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}