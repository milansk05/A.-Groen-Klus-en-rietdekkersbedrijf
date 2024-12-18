import React from 'react'
import Link from 'next/link'


interface SecondaryButtonProps {
    text: string;
    href: string;
}

const SecondaryButton:React.FC<SecondaryButtonProps> = ({text, href}) => {
  return (
    <Link
        href={href} 
        className="underline bg-none text-primary  rounded-md hover:bg-opacity-90 transition-colors"
    >
        {text}
</Link>
  )
}

export default SecondaryButton