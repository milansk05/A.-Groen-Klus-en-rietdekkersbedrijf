import DefaultCard from '@/app/components/projecten/DefaultCard';
import ReviewCard from '@/app/components/projecten/ReviewCard';
import Button from '@/app/components/ui/button';
import SecondaryButton from '@/app/components/ui/SecondaryButton';
import React from 'react'

export default function Page() {
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


            <div className='py-10 flex flex-col'>
                <div className='flex justify-between items-end mb-6'>
                    <h2 className='text-2xl font-semibold text-[#343333]'>Rietwerk</h2>
                    <SecondaryButton href='/contact' text='Bekijk meer projecten' />
                </div>
                <div className='grid grid-cols-4 gap-10'>
                    <DefaultCard title='Project superdak' description='Heeft u net een nieuw huis gekocht? Of wilt u uw pannendak vervangen door een rieten dak?' img='hut.jpg' />
                    <DefaultCard title='Project superdak' description='Heeft u net een nieuw huis gekocht? Of wilt u uw pannendak vervangen door een rieten dak?' img='hut.jpg' />
                    <DefaultCard title='Project superdak' description='Heeft u net een nieuw huis gekocht? Of wilt u uw pannendak vervangen door een rieten dak?' img='hut.jpg' />
                    <DefaultCard title='Project superdak' description='Heeft u net een nieuw huis gekocht? Of wilt u uw pannendak vervangen door een rieten dak?' img='hut.jpg' />
                </div>
            </div>

            <div className='py-10 flex flex-col'>
                <div className='flex justify-between items-end mb-6'>
                    <h2 className='text-2xl font-semibold text-[#343333]'>Klussen</h2>
                    <SecondaryButton href='/contact' text='Bekijk meer projecten' />
                </div>
                <div className='grid grid-cols-4 gap-10'>
                    <DefaultCard title='Project superdak' description='Heeft u net een nieuw huis gekocht? Of wilt u uw pannendak vervangen door een rieten dak?' img='hut.jpg' />
                    <DefaultCard title='Project superdak' description='Heeft u net een nieuw huis gekocht? Of wilt u uw pannendak vervangen door een rieten dak?' img='hut.jpg' />
                    <DefaultCard title='Project superdak' description='Heeft u net een nieuw huis gekocht? Of wilt u uw pannendak vervangen door een rieten dak?' img='hut.jpg' />
                    <DefaultCard title='Project superdak' description='Heeft u net een nieuw huis gekocht? Of wilt u uw pannendak vervangen door een rieten dak?' img='hut.jpg' />
                </div>
            </div>

 
        </div>
    );
}