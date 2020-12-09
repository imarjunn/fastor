import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Data from './restData.json';
import './ShowList.css';


const rating = (rating) => {
    if(rating>=4){
        return 'green';
    }else if(rating >=3){
        return 'orange';
    }else{
        return 'red';
    }
}

const Restaurents = () => {

    const [jsonData,setJsonData] = useState({});
    useEffect(() => {
        Data.map((data) => {
            console.log(data);
        })
    },[]);
                   
    return(
        <>
            <div className="show-container">
            {Data.map((val,i) => (
                <div className="show" key={i}>
                    <img src={val.cover_image ? val.cover_image : "https://images.unsplash.com/photo-1582091652153-eb8f55ff7cd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" } alt="" />
                    <div className="show-info">
                        <h3>{val.restaurant_name}</h3>
                        <div className="show-cuisine">Cake, Pastry, Pastas</div>
                        <div className="show-location">{val.location.location_locality} , {val.location.city_name}</div>
                        <div className="discount">4 Offers Trending</div>

                        <div className="bottom-section">
                            <div className="first-part">
                                <span className="star">Hi</span>
                                <span className={`rating ${rating(val.rating['restaurent_avg_rating'])}`}>{val.rating['restaurent_avg_rating'] !== null ? val.rating.restaurant_avg_rating : 'NA'}</span>
                                <div className="popularity">Popularity</div>
                            </div>
                            <div className="second-part">
                                <span>{val.currency.symbol}</span>
                                <span>{val.avg_cost_for_two}</span>
                                <div className="popularity">Cost for Two</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </>
    );
}

export default Restaurents;