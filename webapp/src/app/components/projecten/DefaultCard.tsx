import React from 'react'

interface DefaultCardProps {
    title: string;
    description: string;
    img: string;
}

const DefaultCard:React.FC<DefaultCardProps> = ({title, description, img}) => {
  return (
    <div className='gap-5 flex flex-col justify-between shadow-[0_0px_10px_0px_rgba(0,0,0,0.2)] rounded-md'>
        <img src={img} className='h-[10rem] w-full object-cover rounded-t-md' />
        <div className='flex flex-col gap-3 px-5 pb-6'>
              <h3 className='text-lg font-semibold text-[#343333]'>{title}</h3>
              <p className='text-md text-[#1F1F1F]/60'>{description}</p>
        </div>
    </div>
  )
}

export default DefaultCard