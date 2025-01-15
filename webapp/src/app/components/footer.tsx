import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Mail, Twitter } from 'lucide-react'
import CurvedShape from './ui/CurvedShape'

export default function Footer() {
    return (
        <footer className="relative bg-gray-100">
            <CurvedShape variant="bottom" className="top-0 transform -translate-y-full" />
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div>
                        <Image
                            src="/images/zwartetekstlgo.png"
                            alt="A Groen Dienstverlening Logo"
                            width={300}
                            height={80}
                        />
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold">A. Groen Dienstverlening</p>
                        <p>Emmerhoutstraat 57</p>
                        <p>7814 XW Emmen</p>
                    </div>
                    <div className="space-y-2">
                        <p>06 12812117</p>
                        <p>info@agroen-dv.nl</p>
                        <p>KVK: 59536276</p>
                    </div>
                </div>
                <div className="flex justify-center gap-6 mt-8">
                    <Link href="https://www.facebook.com/agroendienstverlening/about?locale=nl_NL" className="text-gray-600 hover:text-primary">
                        <Facebook size={24} />
                        <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="https://www.instagram.com/arjen.groen/" className="text-gray-600 hover:text-primary">
                        <Instagram size={24} />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="/contact" className="text-gray-600 hover:text-primary">
                        <Mail size={24} />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}