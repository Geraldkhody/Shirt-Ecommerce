import React from 'react'

const NavBar = () => {
  return (
    <div className='w-[80%] m-auto flex justify-between items-center text-xs h-[3rem]'>
      <div className='text-red-800'>ECOMMER</div>

      <div className='flex justify-between items-center'>
        <i className="fa fa-search ml-8"></i>
        <i className="fa fa-user ml-8"></i>
        <i className="fa fa-shopping-bag ml-8"></i>
        <i className="fa fa-bars ml-8"></i>
      </div>
    </div>
  )
}

export default NavBar;
