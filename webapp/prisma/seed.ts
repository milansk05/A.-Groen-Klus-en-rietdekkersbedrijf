import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // Create initial images
    await prisma.image.createMany({
        data: [
            {
                name: "Over Ons Hero",
                description: "Hoofdafbeelding voor de Over Ons pagina",
                url: "/images/randomfoto.jpg",
                pageSection: "about-hero"
            },
            {
                name: "Missie en Visie",
                description: "Afbeelding voor de missie en visie sectie",
                url: "/images/randomfoto.jpg",
                pageSection: "about-mission"
            },
            {
                name: "Ons Verhaal",
                description: "Afbeelding voor de ons verhaal sectie",
                url: "/images/randomfoto.jpg",
                pageSection: "about-story"
            }
        ]
    })
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()  
    })