import Navbar from "./components/Navbar"
import {gallery, Picture} from "./datasets/galleryImages"
const Gallery = () => {
    return (
        <>
            <Navbar />
            <div className="absolute top-72 md:top-36 px-8">
                <h3 className="font-fascinate text-yellow-400 text-4xl border-yellow-400 ml-4 border-b-2 mb-4">Galleria</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {gallery.map((val: Picture, index: number) => (
                            <>
                              <img key={index} src={val.pictureLink} alt={val.altTitle} className="object-cover"/>
                            </>
                        ))}
                </div>
            </div>
        </>

    )
}

export default Gallery