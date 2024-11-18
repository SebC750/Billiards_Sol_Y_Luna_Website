import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
const Navbar = (props: {isHomepage: boolean}) => {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const changeNavColor = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', changeNavColor);
        return () => window.removeEventListener('scroll', changeNavColor);
        
    }, [])
    return (
        <>
            <header>
                <nav className={`${scrolled || !props.isHomepage ? 'bg-black shadow-xl' : 'bg-transparent shadow-none'} flex flex-col md:flex-row justify-start items-center fixed top-0 p-2 w-full transition-all duration-250 z-10`}>
                    <div className="flex items-center p-2">
                        <img src="images/sunandmoon.webp" alt="billiards sol y luna logo" className="h-12 w-12 rounded-full border border-transparent hover:border-yellow-400" />
                        <h1 className="cursor-pointer text-xl sm:text-xl md:text-2xl pl-4"> <a href="/" className="font-fascinate no-underline ml-2 transition-all text-yellow-400 mr-4 hover:text-3xl"> Billiards Sol y Luna </a></h1>
                    </div>
                    <div className="flex space-x-0 md:space-x-4 flex-col w-full md:flex-row md:w-auto">
                        <Link to="/" className="cursor-pointer transition-all text-yellow-400 no-underline font-fascinate p-1 sm:p-2 text-center rounded-none md:rounded-md hover:bg-yellow-400 hover:text-black display-block md:w-100 text-md md:text-base" aria-label="Home page navbar link"> Pagina Principal </Link>
                        <Link to="/Gallery" className="cursor-pointer transition-all text-yellow-400 no-underline font-fascinate p-1 sm:p-2 text-center rounded-none md:rounded-md hover:bg-yellow-400 hover:text-black display-block md:w-100 text-md md:text-base" aria-label="Gallery navbar link"> Galleria </Link>
                        <Link to="/Menu" className="cursor-pointer transition-all text-yellow-400 no-underline font-fascinate p-1 sm:p-2 text-center rounded-none md:rounded-md hover:bg-yellow-400 hover:text-black display-block md:w-100 text-md md:text-base" aria-label="Menu prices navbar link"> Menu </Link>
                        <a href="#contacts-section" className="cursor-pointer transition-all text-yellow-400 no-underline font-fascinate p-1 sm:p-2 text-center rounded-none md:rounded-md hover:bg-yellow-400 hover:text-black display-block md:w-100 text-md md:text-base" aria-label="Contacts navbar link"> Contactos </a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar