import PropTypes from "prop-types";

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "button", "reset"]),
  label: PropTypes.string,
  className: PropTypes.string,
  processing: PropTypes.bool,
};

function Button({ type = "submit", label, className = "", processing }) {
  return (
    <button
      type={type}
      className={`btn bg-[#4A8394] ${className}`}
      disabled={processing}
    >
      {label}
    </button>
  );
}

export default Button;
