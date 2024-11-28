import PropTypes from "prop-types";

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "date", "time"]),
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

function Input({ label, type, placeholder, className = "" }) {
  return (
    <label className="form-control w-full max-w-[268px]">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered ${className}`}
      />
    </label>
  );
}

export default Input;
