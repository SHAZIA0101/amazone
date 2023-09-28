import Link from 'next/link'
import React from 'react'
import{MdWindow} from 'react-icons/md'
import{RiBillFill} from 'react-icons/ri';
import{IoLogoGoogle} from 'react-icons/io5';
const Sidebar = () => {
let categories = ['Electonics', 'Home', 'Fashion', 'Books', 'Beauty', 'watches',
'Automotives', 'Games']

  return (
    <div className='w-[300px] h-[70vh] bg-white border shadow-sm rounded-xl py-5 '>
      <div className='flex items-center'>
      <div className='w-1 h-7 bg-[#ff9900] my-4 '>
<div className='flex mx-6 space-x-2'>
  <span className='text-2xl'><MdWindow/></span>
  <span className='uppercase text-xl tracking-widest'>Categories</span>
</div>
<div className='mx-14 my-3'>{

  categories.map((category)=> (
<Link href="/">
      <button className='text-xl hover:text-[#ff9900] block py-2'>{category}</button>
    </Link>
  ) )
}
</div>
<div className='mx-7'>
  <Link href="/">
    <button className='flex text-2xl uppercase font-light space-x-2 hover:bg-[#ff9900] py-1 px-5 mx-1
     rounded-xl'>
    <span className='text-2xl'> <RiBillFill/></span>
      <span className='text-xl  font-bold'>Orders</span>
    </button>
  </Link>

  <div className=''>
   <button className='flex items-center text-xl space-x-3 bg-black text-white rounded-md uppercase p-1 px-3 w-[90px]'>
   <span><IoLogoGoogle/></span>
   <span>Login</span>
   </button>
  </div>
</div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
