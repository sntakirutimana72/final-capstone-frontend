import { filtersProps } from '../../../../props/reserves';
import { visibilityFilters as filters } from '../../../../redux/effects/reservations/mine';
import FilterTouch from './FilterTouch';

const Filters = ({ visibilityFilter, analytics }) => (
  <div>
    <div>
      <div className="flex gap-3 px-5 bg-white rounded-xl shadow-sm justify-between md:max-w-max">
        <FilterTouch filter={filters.ALL} enabled={filters.ALL === visibilityFilter}>
          {`All (${analytics[0]})`}
        </FilterTouch>

        <FilterTouch filter={filters.CONFIRMED} enabled={filters.CONFIRMED === visibilityFilter}>
          {`Confirmed (${analytics[1]})`}
        </FilterTouch>

        <FilterTouch filter={filters.PENDING} enabled={filters.PENDING === visibilityFilter}>
          {`Pending (${analytics[2]})`}
        </FilterTouch>

        <FilterTouch filter={filters.DENIED} enabled={filters.DENIED === visibilityFilter}>
          {`Denied (${analytics[3]})`}
        </FilterTouch>
      </div>
    </div>
  </div>
);

Filters.propTypes = filtersProps;

export default Filters;
