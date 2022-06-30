import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

function Index({children}) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between scroll-smooth">
        <Header />

        <main>
          {children}
        </main>

        <Footer />
    </div>
  )
}

export default Index