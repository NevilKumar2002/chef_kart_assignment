import { useAPI } from '../../context';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import './style.css';
import Time from "../../assets/Set_time-01.svg"
import Ingredient1 from "../../assets/Mask Group 17.png"
import Ingredient2 from "../../assets/Ingredient2.png"
import Refrigerator from "../../assets/Mask Group 20.png"
import ItemList from './ItemList';


let description = "Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire."
const Ingredients = () => {
    const [dish, setDish] = useState();

    const {dishId} = useParams();
    const {getDishDetails} = useAPI();

    useEffect(() => {
        getDishDetails(dishId)
            .then(dish => setDish({...dish, description : description}))
    }, [])
    return (
        <div id="ingredients-container">
            <div id="top-container">
                <h1 id="dish-name">{dish?.name}</h1>
                <p id="dish-description">{dish?.description}</p>
                <div id="dish-time-to-prepare">
                    <img src={Time} alt="" />
                    <div>{dish?.timeToPrepare}</div>
                </div>
            </div>
            <img src={Ingredient1} alt="" id="ingredient-image-1"/>
            <img src={Ingredient2} alt="" id="ingredient-image-2"/>
            <div id='watermark'></div>
            <div id="dish-ingredients">
                <h2>Ingredients</h2>
                <p>For 2 people</p>
                <hr />
                <h3>Vegetables</h3>
                <ItemList   items={dish?.ingredients.vegetables} />
                <h3>Spices</h3>
                <ItemList items={dish?.ingredients.spices} />
                <h3>Appliances</h3>
                <div id="appliance-list">
                    {dish?.ingredients.appliances.map(appliance => {
                        return (
                            <div className="appliance-card" key={appliance.name}>
                                <img src={Refrigerator} alt="" />
                                <div className="appliance-name">{appliance.name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Ingredients;