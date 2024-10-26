const InfoCards = () => {
    return (
        <div className="h-auto bg-black px-2 py-24 md:px-24">
            <h1 className="font-fascinate text-yellow-400 border-b-2 border-yellow-400 pb-4"> Lo que ofrecemos </h1>
            <div className="flex space-x-0 md:space-x-24 pt-8 flex-col items-stretch lg:flex-row">
                <div className="rounded-md flex flex-col flex-grow bg-transparent shadow-xl border-b-4 border-yellow-400 w-full mb-4 md:pb-0">
                    <figure>
                        <img src="assets/beer_card_image.jpg" className="transition-all h-56 object-cover w-full rounded-t-md cursor-pointer hover:p-2"/>
                    </figure>
                    <div className="card-body h-auto px-2 pb-4">
                        <h2 className="text-yellow-400 font-fascinate border-b-2 border-yellow-400 pb-4">Menu</h2>
                        <p className="text-yellow-400">Visítanos para disfrutar de una buena selección de bebidas y comidas en un ambiente de billar y taberna.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline-warning w-full text-yellow-400">Ver precios</button>
                        </div>
                    </div>
                </div>
                <div className="rounded-md flex flex-col flex-grow bg-transparent shadow-xl border-b-4 border-yellow-400 w-full ml-0 mb-4 md:pb-0">
                    <figure>
                        <img src="assets/billiards-bg-2.jpg" className="transition-all w-full h-56 object-cover rounded-t-md cursor-pointer hover:p-2"/>
                    </figure>
                    <div className="card-body h-auto px-2 pb-4">
                        <h2 className="text-yellow-400 font-fascinate border-b-2 border-yellow-400 pb-4">Juegos</h2>
                        <p className="text-yellow-400">Vengan a jugar billar con sus amigos para aprender sobre el juego y disfrutar de buenas experiencias.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline-warning w-full text-yellow-400"> Ver precios</button>
                        </div>
                    </div>
                </div>
                <div className="rounded-md flex flex-col flex-grow bg-transparent shadow-xl border-b-4 border-yellow-400 w-full mb-4 md:pb-0">
                    <figure>
                        <img src="assets/gallery_card_image.jpg" className="object-cover transition-all h-56 w-full rounded-t-md cursor-pointer hover:p-2"/>
                    </figure>
                    <div className="card-body h-auto px-2 pb-4">
                        <h2 className="text-yellow-400 font-fascinate border-b-2 border-yellow-400 pb-4">Galleria</h2>
                        <p className="text-yellow-400">Sumérgete en nuestro acogedor bar y sala de billar, donde te esperan buena compañía, un ambiente amigable y juegos emocionantes. ¡Descubre el ambiente vibrante y echa un vistazo a las noches llenas de diversión en nuestro establecimiento!</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline-warning w-full text-yellow-400"> Ver imagenes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfoCards