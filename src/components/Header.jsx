import logoIcon from "../assets/shared/logo.svg"
import hamburguerIcon from "../assets/shared/icon-hamburger.svg"
import closeIcon from "../assets/shared/icon-close.svg"

import { navigation } from "../data/navigation"

function Header() {
    return (
        <div>
            <img src={logoIcon} alt="logo-icon" />
            <button><img src={hamburguerIcon} /></button>
        </div>
    )
}

export default Header