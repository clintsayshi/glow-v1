import Image from 'next/image'
import React from 'react'

function Index() {
  return (
    <section className='relative pt-32'>
        <div className='container relative px-4 sm:px-0 grid grid-cols-1 items-center sm:grid-cols-2 sm:space-x-20 '>
            <div className='space-y-10 md:w-3/4 py-10'>
                <h3 className='text-3xl text-blue-400 font-medium'>Some text describing the company</h3>
                <p>
                Lorem ipsum dolor sit amet. Vel quisquam sint ut dolores enim et unde internos. Ut officia molestiae ut excepturi optio in nesciunt laboriosam? Ad molestias vero qui velit quas 33 repellendus dolor qui cumque sint nam voluptas inventore est obcaecati atque sed quasi modi.
                </p>
            </div>

            <div className='relative block h-72 sm:h-full'>
                <Image className='object-cover' src="/studio.jpg" alt='studio' layout='fill'/>
            </div>
        </div>
    </section>
  )
}

export default Index