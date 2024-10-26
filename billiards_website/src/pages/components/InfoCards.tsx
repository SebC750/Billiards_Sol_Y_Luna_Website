const InfoCards = () => {
    return (
        <div className="h-auto bg-black px-24 py-24">
            <h1 className="font-fascinate text-yellow-400 border-b-2 border-yellow-400 pb-4"> Lo que ofrecemos </h1>
            <div className="flex space-x-0 md:space-x-24 pt-8 flex-col items-start lg:flex-row">
                <div className="card bg-transparent w-full border shadow-xl">
                    <figure>
                        <img src="assets/beer_card_image.jpg"/>
                    </figure>
                    <div className="card-body h-64">
                        <h2 className="text-yellow-400 font-fascinate border-b-2 border-yellow-400 pb-4">Menu</h2>
                        <p className="text-yellow-400">Tenemos un menu </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline-warning text-yellow-400">Ver precios</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-transparent shadow-xl border w-full">
                    <figure>
                        <img src="assets/billiards-bg-2.jpg" className=""/>
                    </figure>
                    <div className="card-body h-64">
                        <h2 className="text-yellow-400 font-fascinate border-b-2 border-yellow-400 pb-4">Juegos</h2>
                        <p className="text-yellow-400">Vengan a jugar billar con sus amigos para aprender sobre el juego y disfrutar buenas experiencias  </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline-warning text-yellow-400"> Ver precios</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-transparent shadow-xl border w-full">
                    <figure>
                        <i className="bi bi-cup-straw text-9xl text-yellow-400"></i>
                    </figure>
                    <div className="card-body h-64">
                        <h2 className="text-yellow-400 font-fascinate border-b-2 border-yellow-400 pb-4">Galleria</h2>
                        <p className="text-yellow-400">Ver Imagenes</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline-warning text-yellow-400"> Ver imagenes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfoCards