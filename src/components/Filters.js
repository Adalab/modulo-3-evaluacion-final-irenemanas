import FilterByName from "./FilterByName";
import FilterByGender from "./FilterByGender";

const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterByName handleFilter={props.handleFilter} />
        <FilterByGender />
      </form>
    </section>
  );
};
export default Filters;
