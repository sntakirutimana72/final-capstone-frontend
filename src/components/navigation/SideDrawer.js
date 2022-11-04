import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';

const SideDrawer = ({ paths }) => (
  <>
    {paths.map(({ path, name }) => (
      <ListItem button component={NavLink} to={path} key={path} className="h-16 font-bold text-lg menuItem">
        {name}
      </ListItem>
    ))}
  </>
);

SideDrawer.propTypes = {
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default SideDrawer;
