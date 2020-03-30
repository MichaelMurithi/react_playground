import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
//Best Practices while using hooks:
/**
 * A hook cannot be used in a loop/any control statement
 *
 */
//creates the search component
const SearchParams = () => {
  //assigns values from useState to default and current state
  const [location, setLocation] = useState("Seattle,WA");
  const [animal, setAnimal] = useState("Dog");

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
        <label htmlFor="Animal">
          Animal
          <select
            id="animal"
            name="animal"
            value={animal}
            onChange={(event) => setAnimal(event.target.value)}
          >
            <option>All</option>
            {ANIMALS.map((animal) => (
              <option value={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams; //exports the component
