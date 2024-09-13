import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LogIn } from 'lucide-react'

interface NavbarProps {
    showLogin: boolean
}
 
function Navbar({ showLogin } : NavbarProps) {
    return (
        <div className=' h-[65px] flex justify-between pt-3 pb-4 px-5 md:px-10 w-full bg-primary-blue'>
            <Link href='/' className='flex md:gap-3 gap-2 items-center'>
                <Image className='w-6' src='/logo.svg' width={28} height={500} alt='logo' />
                <p className=' text-xl md:text-2xl text-white font-[600]'>Placement Tracker</p>
            </Link>
            {showLogin && <Link href='/login' className='flex items-center rounded-md md:gap-2 gap-1 bg-white px-2 md:px-3'>
                <p className='font-[600] text-sm md:text-lg'>Log In</p>
                <LogIn />
            </Link>}
        </div>
    )
}

export default Navbar   