import Link from 'next/link'
import React from 'react'
import{MdWindow} from 'react-icons/md'
const Sidebar = () => {
let categories = ['Electonics', 'Home', 'Fashion', 'Books', 'Beauty', 'watches',
'Automotives', 'Games']

  return (
    <div className='w-[300px] h-[70vh] bg-white border shadow-sm rounded-xl py-5'>
      <div className='flex items-center'>
      <div className='w-1 h-7 bg-[#ff9900] my-4 '>
<div className='flex mx-6 space-x-2'>
  <span className='text-2xl'><MdWindow/></span>
  <span className='uppercase text-xl  tracking-widest'>Categories</span>
</div>
<div className='mx-14 my-3'>{

  categories.map((category)=> (
<Link href="/">
      <button className='text-xl hover:text-[#ff9900] block py-2'>{category}</button>
    </Link>
  ) )
}

</div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
