import PropTypes from "prop-types";

InputOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
};

function InputOption({ id, value, label }) {
  return (
    <option id={id} value={value}>
      {label}
    </option>
  );
}

export default InputOption;
