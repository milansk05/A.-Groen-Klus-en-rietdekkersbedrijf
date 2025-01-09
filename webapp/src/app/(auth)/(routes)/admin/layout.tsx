import { Bell, ChevronDown, Home, ImageIcon, Users, FileText, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface NavItem {
    label: string
    icon: React.ReactNode
    href: string
}

const navItems: NavItem[] = [
    {
        label: "Projecten",
        icon: <Home className="w-4 h-4" />,
        href: "/admin/projecten"
    },
    {
        label: "Accounts",
        icon: <Users className="w-4 h-4" />,
        href: "/admin/accounts"
    },
    {
        label: "Tekst",
        icon: <FileText className="w-4 h-4" />,
        href: "/admin/tekst"
    },
    {
        label: "Foto's",
        icon: <ImageIcon className="w-4 h-4" />,
        href: "/admin/fotos"
    },
    {
        label: "Website",
        icon: <Globe className="w-4 h-4" />,
        href: "/admin/website"
    }
]

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/admin" className="flex items-center">
                            <Image
                                src="/images/zwartetekstlgo.png"
                                alt="A Groen Dienstverlening Logo"
                                width={200}
                                height={50}
                                priority
                            />
                        </Link>

                        <nav className="flex items-center gap-6">
                            <Link
                                href="/admin"
                                className="text-gray-700 hover:text-primary"
                            >
                                Dashboard
                            </Link>

                            <div className="relative group">
                                <button className="flex items-center gap-1 text-gray-700 hover:text-primary">
                                    Beheren
                                    <ChevronDown className="w-4 h-4" />
                                </button>

                                <div className="absolute right-0 top-full w-48 bg-white rounded-md shadow-lg border hidden group-hover:block">
                                    <div className="py-2">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                {item.icon}
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button className="relative text-gray-700 hover:text-primary">
                                <Bell className="w-6 h-6" />
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                                    4
                                </span>
                            </button>

                            <div className="flex items-center gap-2">
                                <span className="text-gray-700">Hallo, Arjen</span>
                                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    )
}