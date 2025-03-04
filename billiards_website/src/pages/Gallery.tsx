import Navbar from "./components/Navbar"
import { gallery, Picture } from "./datasets/galleryImages"
import Footer from "./components/Footer"
const Gallery = () => {
    return (
        <>
            <Navbar isHomepage={false}/>
            <div className="absolute top-72 md:top-36 w-100">
                <div className="sm:px-8">
                    <h3 className="font-fascinate text-yellow-400 text-6xl border-yellow-400 ml-4 border-b-2 mb-4">Galleria</h3>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4 p-2">
                        {gallery.map((val: Picture, index: number) => (
                            <>
                            {val.pictureLink.slice(val.pictureLink.length - 4, val.pictureLink.length) === ".mp4" ? (
                               <>
                                <video className="w-full object-cover cursor-pointer transition-all border-transparent border-duration-300 hover:p-2 hover:border-2 hover:border-yellow-400" controls> 
                                    <source src={val.pictureLink} type="video/mp4"/>
                                </video>
                               </>
                            ) : (
                                <>
                                <img 
                                key={index} 
                                src={val.pictureLink} 
                                alt={val.altTitle} 
                                loading={val.loading}
                                height={val.height}
                                width={val.width}
                                className="object-cover cursor-pointer transition-all border-transparent border-duration-300 hover:p-2 hover:border-2 hover:border-yellow-400 h-[550px] w-full" 
                                />
                                </>                           
                            )}                               
                            </>
                        ))}
                    </div>                              
                </div>
                <Footer />
            </div>
        </>
    )
}
export default Gallery