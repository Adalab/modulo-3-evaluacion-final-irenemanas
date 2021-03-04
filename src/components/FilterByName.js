import { useState } from "react";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.target.value,
    });
  };
  return (
    <>
      <label className='form__name--label' htmlFor='name'>
        Filtra por nombre{" "}
      </label>
      <input
        className='form__name--input'
        type='text'
        name='name'
        id='name'
        placeholder='Escribe un nombre'
        value={props.FilterByName}
        onChange={handleChange}
      />
    </>
  );
};
export default FilterByName;
