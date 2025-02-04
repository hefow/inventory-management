import React from 'react'
import facebook from '../images/facebook.png'
import linkedIN from '../images/linked.png'

function Footer() {
  return (
    <footer className="bg-[#14171f] text-white p-5">
      <div className="md:flex justify-between mb-2">
         <div>
         <div>
            <h2 className="text-2xl text-yellow-400 font-bold">
               InvPro</h2>
            </div>
            <p className="text-gray-400 font-light mt-4">Offering Unique Exprience that cater <br/> to your individual interests and desires.</p>

            <div className="flex mt-4">
               <div className="bg-gray-300 w-5 px-1 py-1 rounded-full">
                  <img src={facebook} width="20"/>
               </div>
               <div className="bg-gray-300 w-5 px-1 py-1 rounded-full mx-2">
                  <img src={linkedIN} width="20"/>
               </div>
            </div>
         </div>
         <div>
            <span className="text-2xl mt-2">About</span>
            <ul className="text-gray-400 font-light">
               <li>About Us</li>
               <li>Careers</li>
               <li>Blog</li>
               <li>Benifits</li>
            </ul>
         </div>
         <div>
            <span>Resource</span>
            <ul className="text-gray-400 font-light">
               <li>Help Center</li>
               <li>Tutorials</li>
               <li>API Documentation</li>
               <li>FAQs</li>
            </ul>
         </div>
         <div>
            <span>Product</span>
            <ul className="text-gray-400 font-light">
               <li>Features</li>
               <li>Pricing</li>
               <li>Integration</li>
               <li>Free Trial</li>
            </ul>
         </div>
      </div>
      <hr className="text-gray-300 "/>
      <h2 className="md:text-9xl text-yellow-400 font-extrabold">
         InvPro</h2>
      <hr/>
      <div className="md:flex justify-between mt-2">
         <spn>&copy; 2025 Inventory System. All Rights Reserved.</spn>
         <div>
            <span className="mr-4">Privacy Policy</span>
            <span>Terms Of Use</span>
         </div>
      </div>
    </footer>
  )
}

export default Footer