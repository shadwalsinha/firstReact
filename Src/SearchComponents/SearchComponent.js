import "./SearchComponent.css";
import React from "react"; 
import SearchIcon from "@mui/icons-material/Search";
import { MediaCard } from "../RestaurantCardComponent/ResCard";
import restList from "../Utils/mockData";
import { useState } from "react";

export const Search = () => {
  const [restList1, setrestList1] = useState(restList);
  return (
    <div>
      <div className="BodyContainer">
        <h2 className="BodyHeading"> Restaurants Near You</h2>
        <div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredlist = restList1.filter((res) => res.rating >= 4);
              setrestList1(filteredlist);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="foodType">
            <label>
              <input type="radio" value="Veg" name="foodType"  onClick={() => {
              const filteredlist = restList1.filter((res) => res.foodtype=="Veg");
              setrestList1(filteredlist);
            }} />
              Veg
            </label>
            <label>
              <input type="radio" value="Non-Veg" name="foodType" onClick={() => {
              const filteredlist = restList1.filter((res) => res.foodtype=="Non-Veg");
              setrestList1(filteredlist);
            }} />
              Non-Veg
            </label>
          </div>
        <span>
          <input
            type="text"
            className="SearchItem"
            placeholder="Search Restaurants"
          />
          <span>
            <SearchIcon className="custom-icon" />
          </span>
        </span>
      </div>

      {console.log(restList1)}
      <div className="AllRes">
        {restList1.map((restaurant) => (
          <MediaCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
