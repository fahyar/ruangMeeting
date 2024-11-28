function Checkbox({ label, value }) {
  return (
    <label className="label cursor-pointer">
      <input
        type="checkbox"
        defaultChecked
        className="checkbox"
        value={value}
      />
      <span className="label-text ml-2">{label}</span>
    </label>
  );
}

export default Checkbox;
