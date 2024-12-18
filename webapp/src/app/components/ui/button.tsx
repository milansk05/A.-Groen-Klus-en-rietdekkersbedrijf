import Link from 'next/link'

import React from 'react'

interface ButtonProps {
    text: string;
    href: string;
}

const Button:React.FC<ButtonProps> = ({text, href}) => {
  return (
    <Link
        href={href} 
        className=" bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors"
    >
        {text}
    </Link>
  )
}

export default Button
