import React, { useState } from 'react';

const Searchbox = ({setSearchValue}) => {
  
  console.log(searchValue)
    return (
    <input 
      type="text" 
      onChange = {(e) => setSearchValue(e.target.value)}
    />
  );
};

export default Searchbox;