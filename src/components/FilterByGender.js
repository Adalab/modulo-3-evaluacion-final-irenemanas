const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "gender",
      value: ev.target.value,
    });
  };
  return (
    <>
      <label htmlFor='gender'>Filtrar por género: </label>
      <select name='gender' id='gender' onChange={handleChange}>
        <option value='all'>Todos</option>
        <option value='Female'>Mujer</option>
        <option value='Male'>Hombre</option>
      </select>
    </>
  );
};
export default FilterByGender;
