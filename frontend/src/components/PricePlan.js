import React from 'react'

function PricePlan() {
  return (
    <div className="p-7 mt-10"> 
      <div>
        <div className="bg-gray-200 rounded-full w-20 px-2 text-purple-500"> 
          Features
        </div>
        <h1 className="text-3xl font-bold mt-2">Optimize Your Inventory with Smart Features</h1>
        <p className="mt-3 font-light text-gray-400">
          Gain full visibility and controll over your stock, orders, and suppliers with intuitive solutions designated to streamline your operation.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
         <div className="bg-white p-4 shadow-md shadow-gray-300 rounded-lg"> 
            <h3 className="text-gray-900 font-bold">Basic Plan</h3>
            <p className="text-gray-500 mt-4">Essential inventory for small business</p>
            <div className="flex justify-between mt-5 mb-2">
               <strong className="text-2xl">$29</strong>
               <span className="text-gray-500 font-light">Per Month</span>
            </div>
            <hr/>
            <h5 className="mt-2">Features</h5>
            <ul role="list" className="list-disc marker:text-purple-600 text-gray-600 font-normal ml-5">
               <li>manage up to 500 products</li>
               <li>Real-time stock monitoring</li>
               <li>Basic sales & purchase analytics</li>
               <li>Automated stock alert</li>
               <li>Order management</li>
               <li>Email support</li>
            </ul>
            <button className="w-full bg-purple-600 text-white items-center px-4 py-2 rounded-full mt-4">Get Started</button>
         </div>
         <div className="bg-purple-600 p-4 shadow-md shadow-gray-300 rounded-lg text-white"> 
            <div className="flex justify-between">
               <h3 className="text-white font-bold">Basic Plan</h3>
               <div className="bg-white rounded-full text-gray-900 font-thin px-2">
                  <span>Popular</span>
               </div>
            </div>
            <p className="text-white mt-4">Essential inventory for small business</p>
            <div className="flex justify-between mt-5 mb-2">
               <strong className="text-2xl">$29</strong>
               <span className="text-white-500 font-light">Per Month</span>
            </div>
            <hr/>
            <h5 className="mt-2">Features</h5>
            <ul role="list" className="list-disc marker:text-white text-white font-extralight ml-5 ">
               <li>manage up to 500 products</li>
               <li>Real-time stock monitoring</li>
               <li>Basic sales & purchase analytics</li>
               <li>Automated stock alert</li>
               <li>Order management</li>
               <li>Email support</li>
            </ul>
            <button className="w-full bg-white text-gray-900 items-center px-4 py-2 rounded-full mt-4">Get Started</button>
         </div>
         <div className="bg-white p-4 shadow-md shadow-gray-300 rounded-lg"> 
            <h3 className="text-gray-900 font-bold">Basic Plan</h3>
            <p className="text-gray-500 mt-4">Essential inventory for small business</p>
            <div className="flex justify-between mt-5 mb-2">
               <strong className="text-2xl">$29</strong>
               <span className="text-gray-500 font-light">Per Month</span>
            </div>
            <hr/>
            <h5 className="mt-2">Features</h5>
            <ul role="list" className="list-disc marker:text-purple-600 text-gray-600 font-normal ml-5">
               <li>manage up to 500 products</li>
               <li>Real-time stock monitoring</li>
               <li>Basic sales & purchase analytics</li>
               <li>Automated stock alert</li>
               <li>Order management</li>
               <li>Email support</li>
            </ul>
            <button className="w-full bg-purple-600 text-white items-center px-4 py-2 rounded-full mt-4">Get Started</button>
         </div>

      </div>
    </div>
  )
}

export default PricePlan