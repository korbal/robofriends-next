import React, { useState } from 'react';

const Searchbox = ({searchValue, setSearchValue}) => {
  
  console.log(searchValue)
    return (
    <input type="text" value={searchValue} 
    onChange = {(e) => setSearchValue(e.target.value)}/>
  );
};

export default Searchbox;