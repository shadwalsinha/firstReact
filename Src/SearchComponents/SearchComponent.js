import "./SearchComponent.css";
import SearchIcon from "@mui/icons-material/Search";
import { MediaCard } from "../RestaurantCardComponent/ResCard"

const restList = [
  {
    name: "Shiva Dhaba",
    description: "Shiva Dhaba offers a delightful dining experience with a wide range of Indian dishes. With over 60 branches, it is a widespread and trusted choice for food lovers across India.",
    rating: 4.5,
    deliveryTime: "30 minutes"
  },
  {
    name: "Meghana Foods",
    description: "Meghana Foods specializes in South Indian and Andhra cuisine, serving a variety of delicious vegetarian dishes. Enjoy authentic flavors with every bite.",
    rating: 4.2,
    deliveryTime: "40 minutes"
  },
  {
    name: "Kanoor Food Point",
    description: "Kanoor Food Point is known for its delectable North Indian, Chinese, and Biryani offerings. Savor the rich flavors and spices in every dish.",
    rating: 4.0,
    deliveryTime: "35 minutes"
  },
  {
    name: "Call Me Chow",
    description: "Call Me Chow serves up a tempting menu of Chinese, Fast Food, and Noodles. Taste the perfect blend of flavors in their dishes, all delivered to your doorstep.",
    rating: 4.1,
    deliveryTime: "45 minutes"
  },
  {
    name: "RotiWala",
    description: "RotiWala is your go-to spot for Indian, Fast Food, and Kebabs. Experience the mouthwatering taste of freshly prepared dishes with a touch of Indian spices.",
    rating: 4.3,
    deliveryTime: "30 minutes"
  },
  {
    name: "KFC",
    description: "KFC is a popular choice for Fast Food lovers, known for its delicious chicken and burgers. Satisfy your cravings with their quick and tasty offerings.",
    rating: 4.7,
    deliveryTime: "25 minutes"
  },
];


export const Search = () => {
  return (
    <div>
      <div className="BodyContainer">
        <h2 className="BodyHeading"> Restaurants Near You</h2>
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
      <div className="AllRes">
        {restList.map((restaurant)=>(<MediaCard resData={restaurant}/>))}
      </div>
    </div>
  );
};
