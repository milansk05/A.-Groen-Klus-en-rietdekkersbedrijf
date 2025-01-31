import Image from 'next/image'
import OptionCard from './components/home/OptionCard'
import Button from './components/ui/button'
import { getTextContentByPageAndSections } from '@/app/actions/text'

export default async function Home() {
  const textContentsResult = await getTextContentByPageAndSections('home', ['hero-title', 'hero-subtitle', 'cta-text'])

  const textContents = textContentsResult.success ? textContentsResult.data : []
  const getTextContent = (sectie: string) => textContents.find(content => content.sectie === sectie)?.inhoud || ''

  return (
    <div className="container mx-auto flex flex-col items-center my-20">
      <div className="flex flex-col items-center gap-6 w-full">
        <div className="w-full flex justify-center">
          <div className="relative w-[6rem]">
            <img className="absolute -top-2 left-0 w-10 h-10 object-cover rounded-full shadow-[0_0px_10px_0px_rgba(0,0,0,0.4)] border border-white" src="profielfoto.png" />
            <img className="absolute -top-2 left-5 w-10 h-10 object-cover rounded-full shadow-[0_0px_10px_0px_rgba(0,0,0,0.4)] border border-white" src="profielfoto.png" />
            <img className="absolute -top-2 left-10 w-10 h-10 object-cover rounded-full shadow-[0_0px_10px_0px_rgba(0,0,0,0.4)] border border-white" src="profielfoto.png" />
          </div>
          <div className="flex">
            <img src="star.svg" />
            <img src="star.svg" />
            <img src="star.svg" />
            <img src="star.svg" />
            <img src="star.svg" />
          </div>
        </div>
        <h1 className="text-[32px] font-semibold text-center text-[#343333] leading-10">
          {getTextContent('hero-title') || "Uw Allround Specialist Voor Huis En Dak"}
        </h1>
        <p className="text-[16px] text-center text-[#1F1F1F]/60">
          {getTextContent('hero-subtitle') || "Professionele renovatie en onderhoud voor uw woning, van kleine klussen tot complete dakprojecten"}
        </p>
        <div className="w-full mt-20 flex justify-center gap-20 items-center">
          <OptionCard title="Klussen opties" image="vloer.jpg" />
          <span className="w-[2px] h-32 bg-gray-300"></span>
          <OptionCard title="Rietdekken opties" image="hut.jpg" />
        </div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold text-[#343333] mb-4">Bent u geïnteresseerd in onze opties?</h2>
        <Button href="/contact" text="Neem contact op" />
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold text-[#343333] mb-4">{getTextContent('cta-text') || "Wilt u onze klussen zien waaraan wij hebben gewerkt?"}</h2>
        <Button href="/projecten" text="Bekijk onze projecten" />
      </div>
    </div>
  )
}