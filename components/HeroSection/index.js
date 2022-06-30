import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <section className="container relative z-30 flex flex-col items-center justify-center space-y-4 px-4 py-32 sm:px-0">
      <h1 className="mx-auto mb-5 text-center text-2xl font-medium sm:text-4xl md:w-4/5">Spacious studios for your photography and film needs</h1>

      <p className="mx-auto text-center md:w-4/5">For Hire, book your sessions now</p>

      <div className="flex items-center justify-center space-x-2">
        <Link href="/"><a className="inline-block border bg-blue-600 px-4 py-1">Book</a></Link>
        <Link href="/">
        <a className="inline-block border px-4 py-1">Learn more</a>
        </Link>
      </div>
    </section>
  )
}

export default Hero