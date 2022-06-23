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

  console.log(menuIsOpen);

  return (
    <header className="relative bg-black">
    <nav className="container relative z-40 flex items-center justify-between py-4 px-4 sm:px-0">
      <div>GLOW</div>

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
          <a href="#" className="w-full flex-grow px-4 py-1 text-start text-base text-black hover:bg-black hover:bg-opacity-50 sm:text-white">Studios</a>

            </Link>
        </li>
        <li className="flex w-full">
            <Link href="/">
          <a href="#" className="w-full flex-grow px-4 py-1 text-start text-base text-black hover:bg-black hover:bg-opacity-50 sm:text-white">Gear</a>

            </Link>
        </li>
        <li className="flex w-full">
            <Link href="/">
          <a href="#" className="w-full flex-grow px-4 py-1 text-start text-base text-black hover:bg-black hover:bg-opacity-50 sm:text-white">About</a>

            </Link>
        </li>
        <li className="flex w-full">
            <Link href="/">
          <a href="#" className="w-full flex-grow px-4 py-1 text-start text-base text-black hover:bg-black hover:bg-opacity-50 sm:text-white">Contact</a>

            </Link>
        </li>
      </ol>

      <button onClick={toggleMenu} data-mobile-menu className="sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>

    <section className="container relative z-30 flex h-[80vh] flex-col items-center justify-center space-y-4 px-4 py-24 sm:px-0">
      <h1 className="mx-auto mb-5 text-center text-2xl font-medium sm:text-4xl md:w-4/5">Spacious studios for your photography and film needs</h1>

      <p className="mx-auto text-center md:w-4/5">For Hire, book your sessions now</p>

      <div className="flex items-center justify-center space-x-2">
        <Link href="/"><a className="inline-block border bg-blue-600 px-4 py-1">Book</a></Link>
        <Link href="/">
        <a className="inline-block border px-4 py-1">Learn more</a>
        </Link>
      </div>
    </section>

    <div className="absolute inset-0 z-0 block">
      <img className="relative h-full w-full object-cover" src="https://tesla-cdn.thron.com/delivery/public/image/tesla/93b81b8b-7c57-4065-9568-3755ce6c32d8/bvlatuR/std/1920x1080/_1D-Utility-B" alt="  dfsdfsd" />
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-75"></div>
  </header>
  )
}

export default Header