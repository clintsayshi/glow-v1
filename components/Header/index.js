import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'


function Header() {

  const obj = {
    name: "me",
    age: 23
  }

  const { name } = obj

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenu =()=>{
    setMenuIsOpen((prev)=>{
      return !prev
    })
  }


  return (
    <header className="relative">
    <nav className="container relative z-40 flex items-center justify-between py-4 px-4 sm:px-0">
      <div className='relative w-36 h-14'>
        <Image className="block object-contain" src="/glow.png" alt="" layout='fill'/>
      </div>

      <ol className={`${menuIsOpen ? "nav--menu-links active-nav-links" : "nav--menu-links"}`}>
        <div className="flex w-full justify-end py-4 sm:hidden">
          <button className=" " onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

       
         
        <li className="flex w-full">
            <Link href="/">
          <a href="#" className="w-full flex-grow px-4 py-1 text-start text-base text-black">Studios</a>

            </Link>
        </li>
        <li className="flex w-full">
            <Link href="/">
          <a href="#" className="w-full flex-grow px-4 py-1 text-start text-base text-black">Gear</a>

            </Link>
        </li>
        <li className="flex w-full">
            <Link href="/">
          <a href="#" className="w-full flex-grow px-4 py-1 text-start text-base text-black">About</a>

            </Link>
        </li>
        <li className="flex w-full">
            <Link href="/">
          <a href="#" className="w-full flex-grow px-4 py-1 text-start text-base text-black">Contact</a>

            </Link>
        </li>
      </ol>

      <button onClick={toggleMenu} data-mobile-menu className="sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  </header>
  )
}

export default Header