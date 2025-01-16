import React from 'react'

interface ReviewCardProps {
    title: string;
    img: string;
    amountStars?: number;
}

const ReviewCard:React.FC<ReviewCardProps> = ({title, img, amountStars}) => {
    const array = [...Array(amountStars)];
  return (
    <div className='flex border items-center justify-start gap-10 p-4 rounded-md shadow-[0_0px_10px_0px_rgba(0,0,0,0.2)]'>
        <img className='w-20 h-20 object-cover rounded-full  border-[4px] border-white shadow-[0_0px_4px_0px_rgba(0,0,0,0.2)]' src={img} />
        <div className='flex flex-col gap-2'>
            <h3 className='text-lg font-semibold text-[#343333]'>{title}</h3>
            <div className="flex gap-1">
                {array.map(index=><img key={index} src="star.svg" />)}
            </div>
        </div>
    </div>
  )
}

export default ReviewCard