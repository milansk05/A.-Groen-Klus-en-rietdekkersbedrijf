import { getImagesBySection } from '@/app/actions/images'
import AboutHero from '@/app/components/about/AboutHero'
import MissionVision from '@/app/components/about/MissionVision'
import OurStory from '@/app/components/about/OurStory'
import TeamSection from '@/app/components/about/TeamSection'

export default async function AboutPage() {
    const heroImages = await getImagesBySection('about-hero')
    const missionImages = await getImagesBySection('mission-vision')
    const storyImages = await getImagesBySection('our-story')

    return (
        <main className="min-h-screen">
            <AboutHero imageUrl={heroImages.success && heroImages.data[0]?.url} />
            <MissionVision imageUrl={missionImages.success && missionImages.data[0]?.url} />
            <OurStory imageUrl={storyImages.success && storyImages.data[0]?.url} />
            <TeamSection />
        </main>
    )
}