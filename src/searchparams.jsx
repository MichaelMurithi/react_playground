import React from "react";
import Pet from "./Pet";

const SearchParams = () => {
  const location = "Seattle,WA";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            name="search"
            id="location"
            value={location}
            placeholder="Location"
          ></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;
