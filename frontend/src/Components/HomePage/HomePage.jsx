import React from 'react'
import Header from "../HomePage/Header"
import Main from "../HomePage/Main"
import Footer from "../HomePage/Footer"



function HomePage() {
  return (
    <div className='bg-blue-100 min-h-screen text-gray-900 m-0 top-0'>

      <Header/>
      <Main/>
      <Footer/>
      {/* <header >
        <nav className='container flex justify-between items-center'>
          <div className='text-emerald-300 flex spacing-sm'>Logo</div>
          <div className='text-emerald-300 flex spacing-sm'>About US</div>
          <div className='text-emerald-300 flex spacing-sm'>Contact</div>
          <div className='text-emerald-300 flex spacing-sm'>Login/Register</div>
        </nav>


      </header>
      <main>


      </main>
      <footer>


      </footer> */}
    </div>
  )
}

export default HomePage
