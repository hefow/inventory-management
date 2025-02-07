import React from 'react'
import user from '../images/user.png'

function Header() {
  return (
    <header>
      <div className="flex w-full justify-between items-center shadow-md p-2">
      <div>
        <h2 className="text-2xl text-yellow-400 font-bold">
            InvPro
         </h2>
      </div>
      <div>
         <input className="border-2  rounded-md px-4 py-2 outline-none" type="text" placeholder="searching"/>
      </div>
      <div className="flex">
         <svg className="mr-4" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4'/><path d='M15.019 17h-6.04m6.04 0h3.614c1.876 0 1.559-1.86.61-2.804C15.825 10.801 20.68 3 11.999 3s-3.825 7.8-7.243 11.196c-.913.908-1.302 2.804.61 2.804H8.98m6.039 0c0 1.925-.648 4-3.02 4s-3.02-2.075-3.02-4'/></svg>
         <div className="mr-4">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d='M15 7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m4.5 13c-.475-9.333-14.525-9.333-15 0'/></svg>
         </div>
      </div>
      </div>
    </header>
  )
}

export default Header