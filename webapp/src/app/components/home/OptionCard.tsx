import React from 'react'
import Image from 'next/image'

interface PupilArray {
  text: string;
}

interface OptionCardProps {
  title: string;
  image: string;
}

const OptionCard: React.FC<OptionCardProps> = ({ title, image }) => {
  return (
    <div className="relative w-[25rem] h-[12rem] rounded-lg overflow-hidden">
      <Image
        src={`/${image}`}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 px-8 py-6 flex flex-col justify-between bg-black bg-opacity-40">
        <h2 className="text-white text-[22px] font-semibold">{title}</h2>
        <div className="text-white flex flex-wrap gap-2 text-sm">
          <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg">kozijnen</span>
          <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg">zonnepanelen</span>
          <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg">renovaties</span>
          <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg">tuinen</span>
          <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg">daken</span>
        </div>
      </div>
    </div>
  )
}

export default OptionCard