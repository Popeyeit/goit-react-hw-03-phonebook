import React from 'react';

const Filter = ({ filter, handleFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={filter} onChange={handleFilter} />
    </>
  );
};

export default Filter;
