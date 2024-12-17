import Image from 'next/image'

interface TeamMember {
    name: string
    role: string
    description: string
    imageUrl: string
}

const teamMembers: TeamMember[] = [
    {
        name: "Arjen Groen",
        role: "Eigenaar & Projectmanager",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non sapien eget diam gravida malesuada sit amet eget sem. Praesent nec elit purus. Nullam eu erat purus, pretium ante ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi massa nec mauris posuere condimentum.",
        imageUrl: "/images/profielfoto.png"
    },
    {
        name: "Annonymous",
        role: "Functie/Rol",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non sapien eget diam gravida malesuada sit amet eget sem. Praesent nec elit purus. Nullam eu erat purus, pretium ante ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        imageUrl: "/images/profielfoto.png"
    },
    {
        name: "Annonymous",
        role: "Functie/Rol",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non sapien eget diam gravida malesuada sit amet eget sem. Praesent nec elit purus. Nullam eu erat purus, pretium ante ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        imageUrl: "/images/profielfoto.png"
    }
]

export default function TeamSection() {
    return (
        <div className="bg-gray-50 py-12 pb-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2">Maak kennis met ons team</h2>
                    <p className="text-gray-600">Leer ons kennen!</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="relative w-32 h-32 mx-auto mb-4">
                                <Image
                                    src={member.imageUrl}
                                    alt={member.name}
                                    fill
                                    className="object-cover rounded-full"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                            <p className="text-primary text-center mb-4">{member.role}</p>
                            <p className="text-gray-600 text-center">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}