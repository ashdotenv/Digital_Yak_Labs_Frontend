import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
                    {/* Logo & About */}
                    <div className="w-full md:w-1/3">
                        <h1 className="text-2xl font-bold">Digital Yak Labs</h1>
                        <p className="text-sm mt-2">
                            Your partner for innovative design, branding, and digital
                            marketing solutions tailored for success.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full md:w-1/3">
                        <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                        <ul className="text-sm space-y-2">
                            <li>
                                <Link to="/about" className="hover:underline">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:underline">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/portfolio" className="hover:underline">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="w-full md:w-1/3">
                        <h2 className="text-lg font-semibold mb-2">Contact</h2>
                        <ul className="text-sm space-y-2">
                            <li>
                                Email:{' '}
                                <a
                                    href="mailto:abhayabikramshahiofficial@gmail.com"
                                    className="hover:underline"
                                >
                                    abhayabikramshahiofficial@gmail.com
                                </a>
                            </li>
                            <li>
                                Phone:{' '}
                                <a href="tel:+9779808370638" className="hover:underline">
                                    +977 9808370638
                                </a>
                            </li>
                            <li>
                                Location: Digital Yak Labs, Pokhari Chowr, Kalikot, Nepal
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
                    <p>&copy; 2024 Digital Yak Labs. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer