import React from 'react'
import Header from './Header'
function Hero() {
  return (
    <section className="bg-purple-600 ">
      <div>
      <Header/>
      <div className="text-center mt-10 p-5">
         <h1 className="text-white font-bold text-3xl">Effortless Inventory Tracking for Businesses</h1>
         <p className="text-white font-light mt-5">Track, manage, and optimize your inventory <br/> in real-time with ease.</p>
         <div className="mt-5 m-5">
            <buttom className="rounded-full outline-none  px-4 py-2 text-white ring ring-white">Get Started</buttom>
            <buttom className="bg-white rounded-full px-4 py-3 mx-5">Try for Free</buttom>
         </div>
      </div>
     </div>
    </section>
  )
}

export default Hero