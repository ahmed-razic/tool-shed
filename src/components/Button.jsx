import PropTypes from 'prop-types';

function Button({ color, text, onClick }) {
  return (
    <button
      className='btn'
      style={{ backgroundColor: color }}
      onClick={() => {
        onClick('text from button');
      }}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: 'Add',
  color: 'steelblue',
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
