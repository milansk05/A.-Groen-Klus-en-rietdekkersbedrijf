// import { NextRequest, NextResponse } from 'next/server';
// import { writeFile, mkdir } from 'fs/promises';
// import path from 'path';

// export async function POST(request: NextRequest) {
//     const data = await request.formData();
//     const file: File | null = data.get('file') as unknown as File;

//     if (!file) {
//         return NextResponse.json({ success: false, message: 'No file uploaded' }, { status: 400 });
//     }

//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);

//     // Create uploads directory if it doesn't exist
//     const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
//     try {
//         await mkdir(uploadsDir, { recursive: true });
//     } catch (error) {
//         console.error('Error creating uploads directory:', error);
//         return NextResponse.json({ success: false, message: 'Error creating uploads directory' }, { status: 500 });
//     }

//     const filename = `${Date.now()}-${file.name}`;
//     const filepath = path.join(uploadsDir, filename);

//     try {
//         await writeFile(filepath, buffer);
//         return NextResponse.json({ success: true, filename: `/uploads/${filename}` });
//     } catch (error) {
//         console.error('Error saving file:', error);
//         return NextResponse.json({ success: false, message: 'Error saving file' }, { status: 500 });
//     }
// }