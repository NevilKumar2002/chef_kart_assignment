import { useState, useEffect } from "react";
import DishCard from "./DishCard";

const DishList = () => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/')
            .then(response => response.json())
            .then(response => setDishes(response.dishes))
    }, [])
    return (
        <div id="dish-list">
            {dishes.map(dish =>{
                return (
                    <DishCard key={dish.id} dish={dish} />
                )
            })}
        </div>
    )
}
export default DishList;