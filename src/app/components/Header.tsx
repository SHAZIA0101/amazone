import React from 'react'
import Image from 'next/image'
import amazonL from "/public/amazon-logo.webp"
import { text } from 'node:stream/consumers'
import{TbSearch} from 'react-icons/tb'
import{FaShoppingCart} from 'react-icons/fa'
import Link from 'next/link'
const Header = () => {
  return (
    <>
    <div className='flex w-full px-11 justify-between gap-6 items-center'>
        <div>
 <Image src ={amazonL} alt="my logo" className=' w-40  ml-6 '/>
  </div>

<div className='w-full'>
 <form className='flex'>
    <input type="text" className='w-full border rounded-l-xl   py-2 px-2 outline-none
    focus:border-[#ff9900] font-bold text-gray-100'  placeholder="Search Here"/>
    <button className='text-2xl bg-[#ff9900]  px-2 rounded-r-xl'><TbSearch />
    </button>
   </form>

 </div>
 <div>
  <Link href={"/Cart"}></Link>
  <FaShoppingCart/>
 </div>
  </div>
</>
  )
}

export default Header
