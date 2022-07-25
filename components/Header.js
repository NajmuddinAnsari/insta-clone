import React from 'react'
import Image from 'next/image'
import { SearchIcon, HomeIcon } from '@heroicons/react/solid'
// import PlusIcon from '@heroicons/react/outline'
import { PlusCircleIcon } from "@heroicons/react/outline";
function Header() {
    return (
        <div className='sticky top-0  border-b-1 shadow-sm border-gray-200 bg-white '>
            <div className='flex items-center justify-between  max-w-[90%] pl-24 '>
            {/* {left} */}
            <div className="h-24 w-24 relative hidden md:inline-grid ">
                <Image src='https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png' layout='fill' className='object-contain ' />

            </div>
            <div className="h-12 w-12 relative    md:hidden">
                <Image src='https://www.computerhope.com/jargon/i/instagram.png' layout='fill' className='object-contain ' />

            </div>
            {/* {middle} */}
            <div className=' relative bg-gray-100 rounded-md  border border-gray-200'>
                <div className='absolute top-2 left-1'>
                    <SearchIcon className='h-5 text-gray-500' />
                </div>
                <div className='pl-6'>
                    <input type="text " placeholder='search' className='bg-gray-100 focus-within:outline-none p-1' />
                </div>
            </div>
            {/* {right} */}
            <div className='flex items-center space-x-4 '>
                <HomeIcon className='h-5 hidden md:inline-flex hover:scale-125 duration-75 transition-transform  ease-out  cursor-pointer delay-150' />
                    <PlusCircleIcon className='h-5  cursor-pointer hover:scale-125  transition-transform  ease-out' />

                {/* <Image src={'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600'} height={40} width={40} className='object-contain rounded-full' /> */}
                <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" className='h-10 w-10 rounded-full cursor-pointer' />


            </div>

        </div>
        </div>

    )
}

export default Header