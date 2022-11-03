import PropTypes from 'prop-types';

export const singleProps = () => PropTypes.shape({
  id: PropTypes.number.isRequired,
  from_date: PropTypes.string.isRequired,
  to_date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number_of_beds: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    accomodations: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
});

export const collectionProps = PropTypes.arrayOf(singleProps());

export const filtersProps = {
  visibilityFilter: PropTypes.string.isRequired,
  analytics: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export const filterTouchProps = {
  enabled: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
