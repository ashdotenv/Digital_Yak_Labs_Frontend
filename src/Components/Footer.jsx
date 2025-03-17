import React from 'react'
import { Link } from 'react-router-dom'
import Privacypolicy from '../Pages/Privacypolicy'

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className="bg-white text-gray-800 py-6">
  <div className="list text-center mb-4">
    <a href="#" className="mx-4 hover:text-red-500">Home</a>
    <a href= {Privacypolicy}className="mx-4 hover:text-red-500">Privacy Policy</a>
    <a href="#" className="mx-4 hover:text-red-500">Terms</a>
    <a href="#" className="mx-4 hover:text-red-500">Contact</a>
  </div>
  <div className="name text-center">
    <p>&copy; All rights reserved Digital Yak Labs</p>
  </div>
</footer>

        </>
    )
}

export default Footer