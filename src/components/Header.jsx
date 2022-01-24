import Button from './Button';
import PropTypes from 'prop-types';

function Header({ title, onAdd, showAdd }) {
  return (
    <header>
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </header>
  );
}

Header.defaultProps = {
  title: 'Tool Shed',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
