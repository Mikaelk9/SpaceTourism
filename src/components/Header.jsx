import logoIcon from "../assets/shared/logo.svg"
import hamburguerIcon from "../assets/shared/icon-hamburger.svg"
import closeIcon from "../assets/shared/icon-close.svg"

import { NavLink } from "react-router-dom"

import { navigation } from "../data/navigation"
import { useState } from "react"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";



function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }

    return (
        <>
            <div className="md:hidden">{/*Mobile*/}
                <header className="absolute top-0 left-0 z-50 w-full flex justify-between p-[24px]">
                    <img src={logoIcon} alt="Logo" />

                    {!isMenuOpen && (
                        <button onClick={toggleMenu} className="cursor-pointer">
                            <img src={hamburguerIcon} alt="Open menu" />
                        </button>
                    )}
                </header>

                <div
                    onClick={toggleMenu}
                    className={`fixed inset-0 z-40 transition-opacity duration-300
                ${isMenuOpen
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }
                `}
                />

                <nav
                    className={`fixed top-0 right-0 h-screen w-3/4 
                bg-white/5
                backdrop-blur-xl
                
                    
                z-50
                transition-transform
                duration-800
                ease-in-out

                    ${isMenuOpen
                            ? "translate-x-0"
                            : "translate-x-full"
                        }
                `}
                >
                    <div className="flex justify-end  p-[24px]">
                        <button onClick={toggleMenu} className="cursor-pointer">
                            <img src={closeIcon} alt="Close menu" />
                        </button>
                    </div>

                    <ul className="text-white mt-[60px] ">
                        {navigation.map(item => (
                            <li key={item.path}>
                                <NavLink to={item.path} className={({ isActive }) =>
                                    `mb-[26px] font-[Barlow_Condensed] tracking-[2px] text-[18px] flex 
                                border-r-[4px] transition-all duration-600 ease-in-out
                                
                                ${isActive
                                        ? 'border-white'
                                        : 'border-transparent hover:border-[#d0d6f9]'
                                    }
                                
                                ` }>
                                    <span className="ml-[50px] font-bold">{item.number} </span>
                                    <span className="ml-[14px]   ">{item.name}</span>
                                </ NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>{/*Mobile*/}

            <div className="hidden md:flex absolute w-screen"> {/*Tablet*/}

                <header className="flex justify-between w-full" >
                    <div className="m-[24px] ml-[36px]">

                        <img src={logoIcon} alt="Logo" />

                    </div>

                    <nav className=" w-[85%] h-[110px] bg-white/5">
                        <ul className="text-white flex h-full justify-around ml-[80px]">
                            {navigation.map(item => (
                                <li key={item.path}>
                                    <NavLink to={item.path} className={({ isActive }) =>
                                        ` font-[Barlow_Condensed] tracking-[2px] text-[18px] flex 
                                border-b-[3px] transition-all duration-600 ease-in-out h-full items-center
                                
                                ${isActive
                                            ? 'border-white'
                                            : 'border-transparent hover:border-[#d0d6f9]'
                                        }
                                
                                ` }>
                                        <span className="font-bold mr-2">{item.number} </span>
                                        <span className="   ">{item.name}</span>
                                    </ NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </header>
            </div>{/*Tablet*/}

        </>
    )
}

export default Header