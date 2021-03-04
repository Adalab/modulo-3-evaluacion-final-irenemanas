import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";

const Filters = (props) => {
  return (
    <>
      <form className='form'>
        <FilterByName handleFilter={props.handleFilter} filterByName={props.filterByName} />
        <FilterByGender handleFilter={props.handleFilter} />
      </form>
    </>
  );
};
export default Filters;
