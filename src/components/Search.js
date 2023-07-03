import React from "react";

function Search({ search, onSearch }) {

  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          className="prompt" 
          value={search}
          onChange={onSearch}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
