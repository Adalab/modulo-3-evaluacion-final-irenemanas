const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "gender",
      value: ev.target.value,
    });
  };
  return (
    <>
      <label className='form__gender--label' htmlFor='gender'>
        Filtra por género{" "}
      </label>
      <select className='form__gender--select' name='gender' id='gender' onChange={handleChange}>
        <option className='form__gender--select-1' value='all'>
          Todos
        </option>
        <option className='form__gender--select-2' value='Female'>
          Mujer
        </option>
        <option className='form__gender--select-3' value='Male'>
          Hombre
        </option>
      </select>
    </>
  );
};
export default FilterByGender;
