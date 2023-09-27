import "../SearchComponents/SearchComponent.css";
import SearchIcon from "@mui/icons-material/Search";
import { MediaCard } from "../RestaurantCardComponent/ResCard";

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
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    </div>
  );
};
