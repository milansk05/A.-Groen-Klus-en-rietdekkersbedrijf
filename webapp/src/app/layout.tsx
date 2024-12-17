import type { Metadata } from 'next'
import { Bricolage_Grotesque } from "next/font/google";
import './globals.css'
import Navbar from './components/navigation/Navbar'
import Footer from './components/footer'

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'A Groen Dienstverlening - Uw Allround Specialist Voor Huis En Dak',
  description: 'Professionele renovatie en onderhoud voor uw woning, van kleine klusjes tot complete dakprojecten',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={bricolageGrotesque.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}