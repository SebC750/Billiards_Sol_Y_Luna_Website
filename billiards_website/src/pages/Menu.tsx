import Navbar from "./components/Navbar"
import CardDisplay from "./components/cards/CardDisplay"
import { menuCardsList } from './datasets/infoCards'
const Menu = () => {
    return (
        <>
            <Navbar />
            <div className="absolute top-72 md:top-36 px-8">
                <h3 className="font-fascinate text-yellow-400 text-4xl border-yellow-400 ml-4 border-b-2 mb-4">Menu</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <CardDisplay cardList={menuCardsList}/>
                </div>               
            </div>       
        </>
    )
}

export default Menu