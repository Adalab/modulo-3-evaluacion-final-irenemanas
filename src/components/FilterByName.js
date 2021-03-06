import React, { useEffect, useState } from "react";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.target.value,
    });
  };
  return (
    <>
      <section className='form__name'>
        <label className='form__name--label' htmlFor='name'>
          Filtra por nombre{" "}
        </label>
        <input
          className='form__name--input'
          type='text'
          name='name'
          id='name'
          placeholder='Escribe un nombre'
          value={props.filterByName}
          onChange={handleChange}
        />
      </section>
    </>
  );
};
export default FilterByName;
