import React, { useState } from "react";
//Best Practices while using hooks:
/**
 * A hook cannot be used in a loop/any control statement
 *
 */

//creates the search component
const SearchParams = () => {
  //assigns values from useState to default and current state
  const [location, setLocation] = useState("Seattle,WA");
  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          <input
            name="search"
            id="location"
            value={location}
            placeholder="Location"
            //function to handle event change and settle a new location
            onChange={(event) => setLocation(event.target.value)}
          ></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams; //exports the component
