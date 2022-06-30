import React from 'react'

import {FaCamera, FaLightbulb} from "react-icons/fa"

function Gear() {

    const Gear = [
        {
            name: "Camera",
            Icon: ()=><FaCamera  className='text-2xl'/>
        },
        {
            name: "Lighting",
            Icon: ()=><FaLightbulb className='text-2xl'/>
        },
        {
            name: "Lens",
            Icon: ()=><FaLightbulb className='text-2xl'/>
        },
        {
            name: "Grip",
            Icon: ()=><FaLightbulb className='text-2xl'/>
        },

    ]

  return (
    <section className='border py-20'>
        <div className='container px-4 sm:px-0'>
            <header className='space-y-4'>
                <h2 className='text-3xl font-medium lg:w-1/2 xl:w-1/3'>Hire Film and Photography Gear</h2>

                <p>
                In both Johannesburg and Cape Town we have a solid representation of Film and Photography for hire. 
                </p>
            </header>

            <div className="py-10 gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {
                    Gear.map(({name, Icon})=>(
                        <article className='py-2 space-y-2'>
                            <Icon />
                            <h4>{name}</h4>
                        </article>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Gear