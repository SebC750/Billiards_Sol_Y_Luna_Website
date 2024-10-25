const Navbar = () => {
    return (
        <>
            <header>
                <nav className="bg-black flex flex-col md:flex-row justify-start items-center sticky-top">
                    <div className="flex items-center p-2">
                        <img src="assets/sunandmoon.png" alt="billiards sol y luna logo" className="h-12 w-12 rounded-full border border-transparent hover:border-yellow-400" />
                        <h1 className="font-fascinate no-underline ml-2 text-yellow-400">Billiares Sol y Luna</h1>
                    </div>
                    <div className="flex space-x-0 md:space-x-4 flex-col w-full md:flex-row md:w-auto">
                        <a className="cursor-pointer transition-all text-yellow-400 no-underline font-fascinate p-2 text-center rounded-none md:rounded-md hover:bg-yellow-400 hover:text-black display-block md:w-100 text-xl md:text-base"> Pagina Principal </a>
                        <a className="cursor-pointer transition-all text-yellow-400 no-underline font-fascinate p-2 text-center rounded-none md:rounded-md hover:bg-yellow-400 hover:text-black display-block md:w-100 text-xl md:text-base"> Galleria </a>
                        <details>
                            <summary className="p-2 text-yellow-400 transition-all md:w-100 text-center text-xl md:text-base hover:bg-yellow-400 rounded-none md:rounded-md font-fascinate hover:text-black display-block md:w-100"> Mas informacion</summary>
                            <ul className="bg-yellow-400 absolute p-2 w-full md:w-24 xl:w-40 rounded-none md:rounded-md text-xl md:text-base text-center">
                                <li className=" cursor-pointer"> <a> Contactos </a> </li>
                            </ul>
                        </details>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar