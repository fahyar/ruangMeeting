// import Input from "../../components/Input";
// import InputSelect from "../../components/InputSelect";
// import Checkbox from "../../components/Checkbox";
// import Button from "../../components/Button";
import PropTypes from "prop-types";

FormContainer_.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  handleChange: PropTypes.func,
  children: PropTypes.node
};

function FormContainer_({ children, className }) {
  return (
    // <div className="w-[90%] bg-white ml-[72px] gap-x-8 pl-7 h-[900px]">
    <div
      className={`bg-white border-2 rounded-lg shadow ml-[100px] mr-[50px] mx-auto h-[900px] ${className}`}
    >
      {children}
    </div>
    // </div>
  );
}

export default FormContainer_;
