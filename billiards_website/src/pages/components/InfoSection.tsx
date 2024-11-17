import CardDisplay from './cards/CardDisplay'
import { homeCardsList } from '../datasets/infoCards'
const InfoSection = () => {
    return (
        <div className="h-auto bg-black px-2 py-24 md:px-24">
            <h3 className="font-fascinate text-5xl text-yellow-400 border-b-2 border-yellow-400 pb-4"> Lo que ofrecemos </h3>
            <div className="flex space-x-0 md:space-x-24 pt-8 flex-col items-stretch lg:flex-row">
                <CardDisplay cardList={homeCardsList} />
            </div>

        </div>
    )
}

export default InfoSection