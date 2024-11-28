import PropTypes from "prop-types";

InputSelect.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "date", "time"]),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.element),
};

function InputSelect({
  id,
  type,
  label,
  placeholder,
  className = "",
  children,
}) {
  return (
    <label className="form-control w-full max-w-[268px]">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select
        id={id}
        type={type}
        className={`select select-bordered ${className}`}
      >
        <option disabled selected>
          {placeholder}
        </option>
        {children}
      </select>
    </label>
  );
}

export default InputSelect;
