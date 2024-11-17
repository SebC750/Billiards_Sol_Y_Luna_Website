import Card from "./Card.tsx"
import {MenuCard, HomeCard} from "../../datasets/infoCards.ts"
const CardDisplay = (props: {cardList: MenuCard[] | HomeCard[]}) => {
    return (
                <>
                 {props.cardList.map((val: MenuCard | HomeCard, index:number) => <Card cardProps={val} key={index}/>)}
                </>
    )
}
export default CardDisplay