import { useState, useEffect } from "react"
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const changeNavColor = () => {
            setScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', changeNavColor);
        return () => window.removeEventListener('scroll', changeNavColor);
        
    }, [])
    return (
        <>
            <header>
                <nav className={`${scrolled ? 'bg-black shadow-xl' : 'bg-transparent shadow-none'} flex flex-col md:flex-row justify-start items-center fixed p-2 w-full transition-all duration-250 z-10 border-b-2 border-yellow-400`}>
                    <div className="flex items-center p-2">
                        <img src="assets/sunandmoon.png" alt="billiards sol y luna logo" className="h-12 w-12 rounded-full border border-transparent hover:border-yellow-400" />
                        <h2 className="cursor-pointer text-xl sm:text-xl md:text-2xl pl-4"> <a href="/" className="font-fascinate no-underline ml-2 transition-all text-yellow-400 mr-4 hover:text-3xl"> Billiards Sol y Luna </a></h2>
                    </div>
                    <div className="flex space-x-0 md:space-x-4 flex-col w-full md:flex-row md:w-auto">
                        <a className="cursor-pointer transition-all text-yellow-400 no-underline font-fascinate p-2 text-center rounded-none md:rounded-md hover:bg-yellow-400 hover:text-black display-block md:w-100 text-md md:text-base"> Pagina Principal </a>
                        <a className="cursor-pointer transition-all text-yellow-400 no-underline font-fascinate p-2 text-center rounded-none md:rounded-md hover:bg-yellow-400 hover:text-black display-block md:w-100 text-md md:text-base"> Galleria </a>
                        <details>
                            <summary className="p-2 text-yellow-400 transition-all md:w-100 text-center text-md md:text-base hover:bg-yellow-400 rounded-none md:rounded-md font-fascinate hover:text-black display-block"> Mas informacion</summary>
                            <ul className="bg-yellow-400 absolute p-2 w-screen md:w-24 xl:w-40 rounded-none md:rounded-md text-md md:text-base text-center">
                                <li className="transition-all cursor-pointer rounded-md hover:text-yellow-400 hover:bg-yellow-700"> <a> Contactos </a> </li>
                                <li className="transition-all cursor-pointer rounded-md hover:text-yellow-400 hover:bg-yellow-700"> <a> Menu </a> </li>
                                <li className="transition-all cursor-pointer rounded-md hover:text-yellow-400 hover:bg-yellow-700"> <a> Juegos </a> </li>
                            </ul>
                        </details>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar