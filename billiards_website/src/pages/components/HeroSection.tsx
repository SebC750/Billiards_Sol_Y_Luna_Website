const HeroSection = () => {
    return (
        
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(assets/billiards-inside-1.jpeg)",
                }}>
                <div className="hero-overlay bg-opacity-60 pt-36 sm:pt-12"></div>
                <div className="hero-content text-yellow-400 text-center">
                    <div className="max-w-md">
                        <h1 className="mt-10 sm:mt-0 mb-3 text-3xl sm:text-4xl md:text-5xl font-bold font-fascinate">Bienvenidos!</h1>
                        <p className="mb-5 text-sm md:text-base">
                            Este es el sitio web oficial de Billares Sol Y Luna! Aqui veras toda la informacion sobre nuestros servicios, productos, horarios etc. Haz clic abajo para aprender mas.
                        </p>
                        <a href="#info-section"className="btn btn-outline-warning rounded-md w-full flex gap-2  hover:text-black">  
                                <span className="text-2xl"> Ver mas! </span>
                                <i className="ml-2 bi bi-arrow-down-circle text-2xl"></i>                      
                        </a>
                    </div>
                </div>
            </div>
       

    )
}

export default HeroSection