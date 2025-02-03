import React from 'react'
import realTime from '../images/realtime.png'


function Features() {
  return (
    <div className="p-7 mt-5">
      <div>
        <div className="bg-gray-200 rounded-full w-20 px-2 text-purple-500"> 
          Features
        </div>
        <h1 className="text-3xl font-bold mt-2">Optimize Your Inventory with Smart Features</h1>
        <p className="mt-3 font-light text-gray-400">
          Gain full visibility and controll over your stock, orders, and suppliers with intuitive solutions designated to streamline your operation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3    lg:grid-cols-4 gap-4 mt-10 col-span-2 ">
        <div className="bg-gray-300 p-4 rounded-md">
          <h2 className="text-gray-800 font-medium">Real-Time Stock Monitoring</h2>
          <p className="text-gray-600 font-light">Track inventory lavels across all locations with instant updates.</p>
          <img src={realTime}/>
        </div>
        <div className="bg-amber-50 p-4 rounded-md col-span-2">
          <h2 className="text-gray-800 font-medium">Real-Time Stock Monitoring</h2>
          <p className="text-gray-600 font-light">Track inventory lavels across all locations with instant updates.</p>
          <img src={realTime}/>
        </div>
        <div className="bg-[#ffe5e9] p-4 rounded-md col-span-2">
          <h2 className="text-gray-800 font-medium">Real-Time Stock Monitoring</h2>
          <p className="text-gray-600 font-light">Track inventory lavels across all locations with instant updates.</p>
          <img src={realTime}/>
        </div>
        <div className="bg-green-100 p-4 rounded-md">
          <h2 className="text-gray-800 font-medium">Real-Time Stock Monitoring</h2>
          <p className="text-gray-600 font-light">Track inventory lavels across all locations with instant updates.</p>
          <img src={realTime}/>
        </div>
        <div className="bg-rose-50 p-4 rounded-md">
          <h2 className="text-gray-800 font-medium">Real-Time Stock Monitoring</h2>
          <p className="text-gray-600 font-light">Track inventory lavels across all locations with instant updates.</p>
          <img src={realTime}/>
        </div>
        <div className="bg-green-100 p-4 rounded-md col-span-2">
          <h2 className="text-gray-800 font-medium">Real-Time Stock Monitoring</h2>
          <p className="text-gray-600 font-light">Track inventory lavels across all locations with instant updates.</p>
          <img src={realTime}/>
        </div>
      </div>

    </div>
  )
}

export default Features