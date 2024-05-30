import { useState, useEffect } from 'react';
import { useAPI } from '../../context';
import './style.css';

const TrendingDishes = () => {
    const { getPopularDishes } = useAPI();
    const [popularDishes, setPopularDishes] = useState([]);

    useEffect(() => {
        getPopularDishes()
            .then(dishes => {
                setPopularDishes(prev => [...prev, ...dishes])
        console.log('dishes', dishes)
    })
            .catch(error => console.error('Error fetching popular dishes:', error));
    }, [getPopularDishes]);

    return (
        <>
            <h3 style={{ marginBottom: '.5rem' , textAlign:'center'}}>Popular Dishes</h3>
            <div id="dish-carousel">
                {popularDishes?.map((dish, index) => (
                    <div className="dish-card" key={index}>
                        <p className="dish-card-name">{dish.name}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TrendingDishes;
