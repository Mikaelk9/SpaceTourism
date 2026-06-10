import logoIcon from "../assets/shared/logo.svg"
import hamburguerIcon from "../assets/shared/icon-hamburger.svg"
import closeIcon from "../assets/shared/icon-close.svg"

import { navigation } from "../data/navigation"
import { useState } from "react"



function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }
    return (
        <>
            <header className="flex justify-between p-[24px]">
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
                className={`fixed top-0 right-0 h-screen w-3/4 bg-slate-900 z-50
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
                        <li key={item.number} className="mb-[26px] font-[Barlow_Condensed] tracking-[2px] text-[18px]">
                            <span className="ml-[50px] font-bold">{item.number} </span>
                            <span className="ml-[14px]   ">{item.name}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Header