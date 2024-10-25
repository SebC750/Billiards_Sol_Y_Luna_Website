const HeroSection = () => {
    return (
        <section>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(assets/billiards-inside-1.jpeg)",
                }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-yellow-400 text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl md:text-5xl font-bold font-fascinate">Bienvenidos!</h1>
                        <p className="mb-5 text-sm md:text-base">
                            Este es el sitio web oficial de Billares Sol Y Luna! Aqui veras toda la informacion sobre nuestors servicios, productos, horarios etc. Haz clic abajo para aprender mas.
                        </p>
                        <div className="btn btn-warning rounded-md w-full">
                            <div className="text-xl"> Ver mas! </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroSection