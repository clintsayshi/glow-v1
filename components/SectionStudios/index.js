import Image from 'next/image'
import React from 'react'

function StudioSection() {
  return (
    <section className='py-32'>
        <div className='container px-4 sm:px-0 py-10 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-10 md:space-x-20'>
            <div className='relative w-full sm:flex-1'>
                <div className='relative aspect-square lg:w-4/5'>
                    <Image className='object-cover rounded-full' src="/studioInt.jpeg" alt="another studio" layout='fill'/>
                </div>
            </div>

            <div className='flex-1 space-y-5'>
                <h3 className=' text-3xl text-center sm:text-left font-medium'>Studio One</h3>
                
                <div>
                    <p className=' text-center sm:text-left'>
                        Lorem ipsum dolor sit amet. Vel quisquam sint ut dolores enim et unde internos. Ut officia molestiae ut excepturi optio in nesciunt laboriosam? Ad molestias vero qui velit quas 33 repellendus dolor qui cumque sint nam voluptas inventore est obcaecati atque sed quasi modi.
                    </p>
                </div>
            </div>
        </div>

        <div className='container px-4 sm:px-0 py-10 flex flex-col-reverse sm:flex-row justify-between items-center space-y-0 sm:space-y-0 sm:space-x-10 md:space-x-20'>
            <div className='block flex-1 space-y-5'>
                <h3 className=' text-3xl text-center sm:text-left font-medium'>Studio Two</h3>
                
                <div>
                    <p className=' text-center sm:text-left'>
                        Lorem ipsum dolor sit amet. Vel quisquam sint ut dolores enim et unde internos. Ut officia molestiae ut excepturi optio in nesciunt laboriosam? Ad molestias vero qui velit quas 33 repellendus dolor qui cumque sint nam voluptas inventore est obcaecati atque sed quasi modi.
                    </p>
                </div>
            </div>
            
            <div className='relative w-full sm:flex-1'>
                <div className='relative aspect-square  sm:ml-auto lg:w-4/5'>
                    <Image className='object-cover rounded-full' src="/studioInt.jpeg" alt="another studio" layout='fill'/>
                </div>
            </div>
        </div>

        <div className='container px-4 py-10 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-10 md:space-x-20'>
            <div className='relative w-full sm:flex-1'>
                <div className='relative aspect-square lg:w-4/5'>
                    <Image className='object-cover rounded-full' src="/studioInt.jpeg" alt="another studio" layout='fill'/>
                </div>
            </div>

            <div className='flex-1 space-y-5'>
                <h3 className=' text-3xl text-center sm:text-left font-medium'>Gear</h3>
                
                <div>
                    <p className=' text-center sm:text-left'>
                        Lorem ipsum dolor sit amet. Vel quisquam sint ut dolores enim et unde internos. Ut officia molestiae ut excepturi optio in nesciunt laboriosam? Ad molestias vero qui velit quas 33 repellendus dolor qui cumque sint nam voluptas inventore est obcaecati atque sed quasi modi.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default StudioSection