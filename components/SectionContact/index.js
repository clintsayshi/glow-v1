import React from 'react'

import {FiPhone, FiMail} from "react-icons/fi"

function Contact() {
  return (
    <section className='relative py-24'>
      <header className='container pb-5 px-4 sm:px-0'>
        <h2 className='text-4xl font-medium'>
          Contact us
        </h2>
      </header>

      <div className='container px-4 sm:px-0 flex flex-col-reverse sm:flex-row gap-10'>
          <div className='space-y-4 sm:flex-1'>
              <p>
                We try our best to get your quotations to you as soon as possible.
                If you need help urgently, please <a href='tel:+27660037750'>call</a> or <a href='tel'>whatsapp</a>:
              </p>

              <ul className='space-y-2'>
                <li className='flex items-center space-x-2'>
                  <FiPhone className='text-2xl p-1 bg-gray-400' />
                  <a href='tel:+27660037750'>+27 66 003 7750</a>
                </li>
                <li className='flex items-center space-x-2'>
                  <FiPhone className='text-2xl p-1 bg-gray-400' />
                  <a href='tel:+27118808124'>+27 11 880 8124</a>
                </li>
                <li className='flex items-center space-x-2'>
                  <FiMail className='text-2xl p-1 bg-gray-400' />
                  <a href='mailto:'>rentals@glowhire.co.za</a>
                </li>
              </ul>
          </div>

          <form className='my-5 sm:mt-0 space-y-5 sm:flex-1'>
            <div className=''>
              <select className='w-full border-2 outline-none focus-within:border-black p-2' name='contact_subject' required>
                <option>
                  Place an order for Johannesburg Gear
                </option>
              </select>
            </div>

            
              <div className='sm:flex-1'>
                <label className='font-medium' htmlFor='contact_name'>Name</label>
                <input className='block w-full px-2 py-2 border-2 focus-within:border-black outline-none' name='contact_name' id='contact_name' placeholder='Enter Name' type="text" required/>
              </div>
              <div className=' sm:flex-1'>
                <label className='font-medium' htmlFor='contact_email'>Email</label>
                <input className='block w-full px-2 py-2 border-2 focus-within:border-black outline-none' name='contact_email' id='contact_email' placeholder='Enter Email' type="email" required/>
              </div>

            <div className=''>
              <label className='font-medium' htmlFor='contact_message'>Message</label>
              <textarea className='w-full px-2 py-2 border-2 focus-within:border-black outline-none' name='contact_message' rows={6} id='contact_message' placeholder='Enter Message' required></textarea>
            </div>

            <input className='px-4 py-1 bg-blue-400 text-white' type="submit" value="Say Hello"/>
          </form>
        </div>
    </section>
  )
}

export default Contact