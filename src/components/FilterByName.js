const FilterByName = (props) => {
  const handleChange = (ev) => {
    //props.handleFilter("name", ev.target.value);
    props.handleFilter({
      key: "name",
      value: ev.target.value,
    });
  };
  return (
    <>
      <label htmlFor='name'>Nombre: </label>
      <input type='text' name='name' id='name' onChange={handleChange} />
    </>
  );
};
export default FilterByName;
