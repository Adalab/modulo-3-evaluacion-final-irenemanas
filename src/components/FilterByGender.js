const FilterByGender = (props) => {
  return (
    <>
      <label htmlFor='gender'>Filtrar por género: </label>
      <select name='gender' id='gender'>
        <option value='all'>Todos</option>
        <option value='female'>Mujer</option>
        <option value='male'>Hombre</option>
      </select>
    </>
  );
};
export default FilterByGender;
