import React from 'react'

interface PupilArray {
    text: string;
}

interface OptionCardProps {
    title: string;
    image: string;
}

const OptionCard:React.FC<OptionCardProps> = ({title, image}) => {
  return (
    <div className={`w-[25rem] h-[12rem] bg-[url('/${image}')] bg-cover rounded-lg px-8 py-6 flex flex-col justify-between`}>
        <h2 className="text-white text-[22px] font-semibold">{title}</h2>
        <div className="text-white flex flex-wrap gap-2 text-sm">
            <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg text-black">kozijnen</span>
            <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg text-black">zonnepanelen</span>
            <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg text-black">renovaties</span>
            <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg text-black">tuinen</span>
            <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg text-black">daken</span>
        </div>
    </div>
  )
}

export default OptionCard