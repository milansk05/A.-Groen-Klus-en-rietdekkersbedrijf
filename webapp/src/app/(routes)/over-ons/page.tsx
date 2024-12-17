import AboutHero from '../../components/about/AboutHero';
import MissionVision from '../../components/about/MissionVision';
import OurStory from '../../components/about/OurStory';
import TeamSection from '../../components/about/TeamSection';

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <AboutHero />
            <MissionVision />
            <OurStory />
            <TeamSection />
        </main>
    )
}