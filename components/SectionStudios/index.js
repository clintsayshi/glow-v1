import Image from 'next/image'
import React from 'react'

function StudioSection() {
  return (
    <section className='py-20'>
    <header className='container px-4 sm:px-0'>
        <h2 className='text-3xl font-medium lg:w-1/2 xl:w-1/3'>Hire Film and Photography Studios</h2>
    </header>

    <div className='container flex flex-col-reverse  justify-between px-4 py-10 gap-10 sm:px-0 sm:flex-row sm:space-y-0 sm:space-x-10 md:space-x-20'>
        <div className='relative w-full sm:flex-1'>

            <div className='relative aspect-square lg:w-4/5'>
                <Image className='object-cover' src="/studioInt.jpeg" alt="another studio" layout='fill'/>
            </div>
            
            <div className='lg:w-4/5 flex justify-between'>
                <div className=''>
                    <h3 className='text-2xl'>Studio One</h3>
                    <address>
                        70C Oxford Road<br/>
                        Riviera, JHB
                    </address>
                </div>

                <a className='text-base underline' href=''>Learn more</a>
            </div>
            
        </div>

        <div className='flex-1 space-y-5'>
            <h3 className='text-2xl text-left'>
                Our contemporary Studios in Johannesburg and Cape Town offer a space that caters for fashion shoots, food, lifestyle and film with plenty of space for a large team.
            </h3>
        </div>
    </div>

    
    <div className='container flex flex-col  justify-between px-4 py-10 gap-10 sm:px-0 sm:flex-row sm:space-y-0 sm:space-x-10 md:space-x-20'>
        <div className='flex-1 space-y-5'>
            <h3 className='text-2xl text-left'>
            Designed and built by photographers and are fully functional to all standards, and is no doubt the best of all studios on offer
            </h3>
        </div>
        
        <div className='relative w-full sm:flex-1 ml-auto'>

            <div className='relative aspect-square lg:ml-auto lg:w-4/5'>
                <Image className='object-cover' src="/studioInt.jpeg" alt="another studio" layout='fill'/>
            </div>
            
            <div className='lg:w-4/5 flex justify-between lg:ml-auto'>
                <div className=''>
                    <h3 className='text-2xl'>Studio One</h3>
                    <address>
                        70C Oxford Road<br/>
                        Riviera, JHB
                    </address>
                </div>

                <a className='text-base underline' href=''>Learn more</a>
            </div>
            
        </div>
    </div>
</section>
  )
}

export default StudioSection