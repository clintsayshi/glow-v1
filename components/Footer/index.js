import React from 'react'
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

function Footer() {

  const social_links = [
    ['username', 'https://instagram.com/', ()=><FaInstagram className="text-2xl"/>],
    ['username', 'https://facebook.com/', ()=><FaFacebook className="text-2xl"/>],
    ['username', 'https://youtube.com/', ()=><FaTwitter className="text-2xl" />],
  ]

  const page_links = [
    ['About', '/#about'],
    ['Studios', '/#studios'],
    ['Gear', '/#gear'],
    ['Contact', '/#Contact'],
  ]

  return (
    <footer className='bg-black text-white'>
      <div className='container sm:flex flex-col items-center px-4 py-10'>
        
        <ul className='mx-auto py-2 flex items-center space-x-6'>
          {
            social_links.map(([link, url ,Icon],key)=>(
              <li key={key}>
                <a className='inline-block rounded-full p-2 bg-gray-900 sm:bg-black sm:hover:bg-gray-900' href={url}>
                  <Icon/>
                </a>
              </li>
            ))
          }
        </ul>

        <ul className='sm:mx-auto py-2 sm:flex items-center sm:space-x-6'>
          {
              page_links.map(([link, url],key)=>(
                <li key={key}>
                  <a className='inline-block py-1 text-lg sm:text-base' href={url}>
                    {link}
                  </a>
                </li>
              ))
            }
        </ul>
        
        <p className='py-2'>
          {new Date().getFullYear() } &copy; glow
        </p>

      </div>
    </footer>
  )
}

export default Footer