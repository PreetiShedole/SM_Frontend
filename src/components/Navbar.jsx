import React from 'react'

function Navbar() {
  const navItems = (
    <>
     <li>
        <a>Home</a>
        </li>

        <li>
        <a>About</a>
        </li>

        <li>
        <a>Contact</a>
        </li>     
    </>

  )
  return (
  <>
  <div className="max-w-full container mx-auto">
  <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"> {navItems}
        </ul>
       
      
    </div>
    <a className="btn cursor-pointer text-xl">SocioManager</a>
  </div>
  <div className="navbar-end">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}     
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex gap-2">
      <div className="flex">
      {/* <svg class="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
</svg> */}

      <a className="btn bg-white text-black">I am a Visitor</a>
      </div>
    
    <a className="btn">Login</a>
    </div>
    

  </div>
</div>
</div>
</div>
</>
 )
}

export default Navbar;