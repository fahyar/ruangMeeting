import PropTypes from "prop-types";

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "date", "time"]),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.oneOf([PropTypes.text, PropTypes.number]),
  name: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
};

function Input({
  value,
  name,
  children,
  label,
  type,
  placeholder,
  className = "",
  defaultValue,
  handleChange,
  ...props
}) {
  return (
    <label className="form-control w-full max-w-[268px]">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        {...props}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        defaultValue={defaultValue}
        onChange={(e) => handleChange(e)}
        className={`input input-bordered ${className}`}
      />
    </label>
  );
}

export default Input;
