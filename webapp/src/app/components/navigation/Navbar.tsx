"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import CurvedShape from "../ui/CurvedShape"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    if (pathname?.startsWith("/admin")) return null

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="relative">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center w-[200px] sm:w-[300px]">
                        <Image
                            src="/./Logo_A-Groen.png"
                            alt="A Groen Dienstverlening Logo"
                            width={200}
                            height={100}
                            priority
                        />
                    </Link>
                    <div className="hidden md:flex gap-8">
                        <Link href="/" className="hover:text-primary">
                            Home
                        </Link>
                        <Link href="/projecten" className="hover:text-primary">
                            Projecten
                        </Link>
                        <Link href="/over-ons" className="hover:text-primary">
                            Over ons
                        </Link>
                        <Link href="/contact" className="hover:text-primary">
                            Contact
                        </Link>
                    </div>
                    <button className="md:hidden" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50">
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex flex-col gap-4">
                            <Link href="/" className="hover:text-primary" onClick={toggleMenu}>
                                Home
                            </Link>
                            <Link href="/projecten" className="hover:text-primary" onClick={toggleMenu}>
                                Projecten
                            </Link>
                            <Link href="/over-ons" className="hover:text-primary" onClick={toggleMenu}>
                                Over ons
                            </Link>
                            <Link href="/contact" className="hover:text-primary" onClick={toggleMenu}>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            <CurvedShape variant="top" className="z-10" />
        </nav>
    )
}