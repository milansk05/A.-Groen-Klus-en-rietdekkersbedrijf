'use server'

import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

export async function uploadFile(formData: FormData) {
    const file = formData.get('file') as File | null
    if (!file) {
        return { success: false, error: 'Geen bestand geüpload' }
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Maak uploads directory aan als deze niet bestaat
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
    try {
        await mkdir(uploadsDir, { recursive: true })
    } catch (error) {
        console.error('Error creating uploads directory:', error)
        return { success: false, error: 'Fout bij het maken van uploads directory' }
    }

    const filename = `${Date.now()}-${file.name}`
    const filepath = path.join(uploadsDir, filename)

    try {
        await writeFile(filepath, buffer)
        return { success: true, filename: `/uploads/${filename}` }
    } catch (error) {
        console.error('Error saving file:', error)
        return { success: false, error: 'Fout bij het opslaan van het bestand' }
    }
}