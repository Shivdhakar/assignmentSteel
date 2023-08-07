import React, { useState, useEffect } from 'react';
import mockData from "../../assets/data.json";

const Search = ({ searchText,setSearchText,setRow,rows }) => {
  console.log(searchText);
  useEffect(() => {
    const searchData = rows.filter((row) => {
      setRow(mockData.results);
      console.log(" rows list ", rows)
      return row["&id"].includes(searchText);
    });
    setRow(searchData);
    
  }, [searchText]);

  return <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value); }} />;
};

export default Search;

