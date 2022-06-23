import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

function Index({children}) {
  return (
    <div className="relative flex h-screen flex-col justify-between bg-black text-white">
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Index