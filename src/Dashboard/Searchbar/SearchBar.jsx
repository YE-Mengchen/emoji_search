import React from "react";
import "./SearchBar.css";

const SearchBar = ( {handleChange} ) => {
    const handleText = (event) => {
        handleChange(event);
    }
    return (
        <div className="search-input">
            <div>
                <input className="input-text" placeholder="Search Emoji" onChange={handleText} />
            </div>
        </div>
    );
}

export default SearchBar;
