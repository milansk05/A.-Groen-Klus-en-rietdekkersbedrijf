import { getProjects } from '@/app/actions/projects'
import DefaultCard from '@/app/components/projecten/DefaultCard'
import ReviewCard from '@/app/components/projecten/ReviewCard'
import Button from '@/app/components/ui/button'
import SecondaryButton from '@/app/components/ui/SecondaryButton'

export default async function ProjectenPage() {
    const { success, data: projects = [] } = await getProjects()

    // Groepeer projecten op type
    const rietdekkenProjects = projects.filter(project => project.type === 'rietdekken')
    const klussenProjects = projects.filter(project => project.type === 'klussen')

    return (
        <div className='my-32 container mx-auto px-4'>
            <div className='flex justify-between items-end border-b-2 pb-4'>
                <h1 className='text-3xl font-bold text-[#343333]'>Onze projecten</h1>
                <Button href='/contact' text='Neem contact op' />
            </div>

            <div className='py-10 flex flex-col'>
                <div className='flex justify-between items-end mb-6'>
                    <h2 className='text-2xl font-semibold text-[#343333]'>Resultaten die voor zichzelf spreken</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <ReviewCard title='Naam persoon' img='./images/profielfoto.png' amountStars={5} />
                    <ReviewCard title='Naam persoon' img='./images/profielfoto.png' amountStars={5} />
                </div>
            </div>

            {rietdekkenProjects.length > 0 && (
                <div className='py-10 flex flex-col'>
                    <div className='flex justify-between items-end mb-6'>
                        <h2 className='text-2xl font-semibold text-[#343333]'>Rietdekken Projecten</h2>
                        <SecondaryButton href='/projecten?type=rietdekken' text='Bekijk meer rietdekken projecten' />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                        {rietdekkenProjects.slice(0, 4).map((project) => (
                            <DefaultCard
                                key={project.id}
                                title={project.title}
                                description={project.description || undefined}
                                img={project.imageUrl || '/images/default-rietdekken.jpg'}
                            />
                        ))}
                    </div>
                </div>
            )}

            {klussenProjects.length > 0 && (
                <div className='py-10 flex flex-col'>
                    <div className='flex justify-between items-end mb-6'>
                        <h2 className='text-2xl font-semibold text-[#343333]'>Klussen Projecten</h2>
                        <SecondaryButton href='/projecten?type=klussen' text='Bekijk meer klussen projecten' />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                        {klussenProjects.slice(0, 4).map((project) => (
                            <DefaultCard
                                key={project.id}
                                title={project.title}
                                description={project.description || undefined}
                                img={project.imageUrl || '/images/default-klussen.jpg'}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}