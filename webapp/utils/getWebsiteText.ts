import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getWebsiteText(pagina: string, sectie: string): Promise<string | null> {
    try {
        const text = await prisma.websiteText.findFirst({
            where: {
                pagina,
                sectie
            }
        })
        return text?.inhoud || null
    } catch (error) {
        console.error('Error fetching website text:', error)
        return null
    }
}