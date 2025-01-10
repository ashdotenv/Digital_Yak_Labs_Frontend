import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="bg-white shadow-lg">
                <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-16">
                    {/* Logo */}
                    <NavLink to="/" className="text-2xl font-bold text-gray-800">
                        Digital Yak Labs
                    </NavLink>

                    {/* Navigation Links */}
                    <ul className="hidden lg:flex space-x-8 text-lg font-medium text-gray-600">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? 'text-blue-500' : 'hover:text-blue-500'
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? 'text-blue-500' : 'hover:text-blue-500'
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    isActive ? 'text-blue-500' : 'hover:text-blue-500'
                                }
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/portfolio"
                                className={({ isActive }) =>
                                    isActive ? 'text-blue-500' : 'hover:text-blue-500'
                                }
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? 'text-blue-500' : 'hover:text-blue-500'
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        id="menu-btn"
                        className="lg:hidden focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-gray-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div id="mobile-menu" className="lg:hidden bg-white">
                        <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-medium text-gray-600">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? 'text-blue-500' : 'hover:text-blue-500'
                                    }
                                    onClick={toggleMobileMenu}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? 'text-blue-500' : 'hover:text-blue-500'
                                    }
                                    onClick={toggleMobileMenu}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        isActive ? 'text-blue-500' : 'hover:text-blue-500'
                                    }
                                    onClick={toggleMobileMenu}
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/portfolio"
                                    className={({ isActive }) =>
                                        isActive ? 'text-blue-500' : 'hover:text-blue-500'
                                    }
                                    onClick={toggleMobileMenu}
                                >
                                    Portfolio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? 'text-blue-500' : 'hover:text-blue-500'
                                    }
                                    onClick={toggleMobileMenu}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
