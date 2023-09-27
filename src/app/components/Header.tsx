import React from 'react'
import Image from 'next/image'
import amazonL from "/public/amazon-logo.webp"
import amazonL1 from "/public/m2.jpg"
import { text } from 'node:stream/consumers'
import{TbSearch} from 'react-icons/tb'
import{FaShoppingCart} from 'react-icons/fa'
import Link from 'next/link'
const Header = () => {
  return (

    <div className='-mt-10'>
    <div className='flex  w-full  justify-between items-center space-x-5 shadow-sm bg-white skicky top-0 left-0'>
        <div>
 <Image src ={amazonL} alt="my logo" className=' w-40 h-40'/>
  </div>

<div className='w-full lg:block hidden'>
 <form className='flex'>
    <input type="text" className='w-full border rounded-l-xl   py-1 px-1 outline-none
    focus:border-[#ff9900] font-bold text-gray-100'  placeholder="Search Here"/>
    <button className='text-2xl bg-[#ff9900]  px-2 rounded-r-xl'><TbSearch />
    </button>
   </form>

 </div>
 <div className='flex items-center space-x-4'>
  <Link href={"/Cart"}>
  <button className='text-[25px] bg-[#ff9900] p-2 rounded-md relative'>
     <FaShoppingCart/>
     <span className=' absolute text-sm bg-black text-white
      px-2 rounded-full py-1 -top-4 -right-3'>0</span>
  </button>
  </Link>
  <button>
  <Image src ={amazonL1} alt="my logo" className=' h-10 w-14 rounded-md'/> 
  </button>
 
 </div>
  </div>
</div>
  )
}

export default Header
