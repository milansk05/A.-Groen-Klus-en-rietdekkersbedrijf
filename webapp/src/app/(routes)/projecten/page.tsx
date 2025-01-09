import { getProjects } from '@/app/actions/projects'
import DefaultCard from '@/app/components/projecten/DefaultCard'
import ReviewCard from '@/app/components/projecten/ReviewCard'
import Button from '@/app/components/ui/button'
import SecondaryButton from '@/app/components/ui/SecondaryButton'

export default async function Page() {
    const { success, data: projects = [] } = await getProjects()

    // Group projects by status
    const rietwerk = projects.filter(project =>
        project.status.toLowerCase().includes('rietwerk') ||
        project.title.toLowerCase().includes('riet')
    )

    const klussen = projects.filter(project =>
        !project.status.toLowerCase().includes('rietwerk') &&
        !project.title.toLowerCase().includes('riet')
    )

    return (
        <div className='my-32 container mx-auto px-4'>
            <div className='flex justify-between items-end border-b-2 pb-4'>
                <h1 className='text-3xl font-bold text-[#343333]'>Onze projecten</h1>
                <Button href='/projecten' text='Neem contact op' />
            </div>

            <div className='py-10 flex flex-col'>
                <div className='flex justify-between items-end mb-6'>
                    <h2 className='text-2xl font-semibold text-[#343333]'>Resultaten die voor zichzelf spreken</h2>
                </div>
                <div className='grid grid-cols-2 gap-10'>
                    <ReviewCard title='Joost van Doorn' img='foto.jpg' amountStars={5} />
                    <ReviewCard title='Joost van Doorn' img='foto.jpg' amountStars={5} />
                </div>
            </div>

            {rietwerk.length > 0 && (
                <div className='py-10 flex flex-col'>
                    <div className='flex justify-between items-end mb-6'>
                        <h2 className='text-2xl font-semibold text-[#343333]'>Rietwerk</h2>
                        <SecondaryButton href='/contact' text='Bekijk meer projecten' />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                        {rietwerk.map((project) => (
                            <DefaultCard
                                key={project.id}
                                title={project.title}
                                description={project.description || undefined}
                                img={project.imageUrl || 'hut.jpg'}
                            />
                        ))}
                    </div>
                </div>
            )}

            {klussen.length > 0 && (
                <div className='py-10 flex flex-col'>
                    <div className='flex justify-between items-end mb-6'>
                        <h2 className='text-2xl font-semibold text-[#343333]'>Klussen</h2>
                        <SecondaryButton href='/contact' text='Bekijk meer projecten' />
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                        {klussen.map((project) => (
                            <DefaultCard
                                key={project.id}
                                title={project.title}
                                description={project.description || undefined}
                                img={project.imageUrl || 'hut.jpg'}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}