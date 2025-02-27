"use client"

import Image from 'next/image'
import React from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"

 import {capitalizeWords} from "../utils/index"




const Navbar = () => {


    return (
        <nav className='h-[70px] sticky top-0 flex gap-2 items-center justify-end px-5 w-full  shadow-sm z-10' style={{ backgroundColor: 'rgb(247, 249, 253)' }}>


            <div className="logo h-[25px] w-[25px] py-[10px] relative   object-contain">

                <Image src='/imgs/user.svg' layout="fill" objectFit="contain" className=" h-[25px]  object-contian" />

            </div>

            <p className='text-[18px] font-semibold'>{localStorage.getItem("user_name") ?capitalizeWords(localStorage.getItem("user_name"))  :"user name"}</p>


            <DropdownMenu>
                <DropdownMenuTrigger style={{outline:0}}>
                    <div className="logo h-[20px] w-[20px] py-[10px] relative object-contain">

                        <Image src='/imgs/menu-dots-vertical.svg' layout="fill" objectFit="contain" className=" h-[20px]   object-contian" />

                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                     <DropdownMenuItem>{localStorage.getItem('email') ?  localStorage.getItem('email'): "Work Mail"}</DropdownMenuItem>
                    <DropdownMenuItem>Change Password</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>





        </nav>
    )
}

export default Navbar 
