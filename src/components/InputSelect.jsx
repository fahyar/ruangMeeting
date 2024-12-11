import PropTypes from "prop-types";

InputSelect.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "date", "time"]),
  inputMode: PropTypes.oneOf(["numeric", "text"]),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func,
  defaultValue: PropTypes.string,
  children: PropTypes.node,
};

function InputSelect({
  id,
  type,
  label,
  defaultValue,
  className = "",
  children,
  handleChange,
  placeholder,
  inputMode,
  ...props
}) {
  return (
    <label className="form-control w-full max-w-[268px]">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select
        {...props}
        id={id}
        type={type}
        className={`select select-bordered ${className}`}
        defaultValue={defaultValue}
        inputMode={inputMode}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
      >
        <option disabled>{defaultValue}</option>
        {children}
      </select>
    </label>
  );
}

export default InputSelect;
