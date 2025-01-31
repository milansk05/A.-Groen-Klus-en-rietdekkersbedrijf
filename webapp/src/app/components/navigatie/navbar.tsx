import Image from 'next/image'
import Link from 'next/link'
import CurvedShape from '../ui/curvedshape'

export default function Navbar() {
    return (
        <nav className="relative">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center w-[300px]">
                    <Image
                        src="/images/zwartetekstlogo.png"
                        alt="A Groen Dienstverlening Logo"
                        width={300}
                        height={80}
                        priority
                    />
                </Link>
                <div className="flex gap-8">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <Link href="/projecten" className="hover:text-primary">Projecten</Link>
                    <Link href="/over-ons" className="hover:text-primary">Over ons</Link>
                    <Link href="/contact" className="hover:text-primary">Contact</Link>
                </div>
            </div>
            <CurvedShape variant="top" className="z-10" />
        </nav>
    )
}