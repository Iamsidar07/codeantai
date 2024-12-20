import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <Link href={"/"} className='inline-flex items-center gap-[11px]'>
        <Image src="/logo.png" width={28.5} height={32} alt="logo" className='object-contain' />
        <span className='text-2xl font-normal leading-[26px]'>CodeAnt AI</span>
    </Link>
  )
}
