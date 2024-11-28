import PropTypes from "prop-types";
import Button from "../components/Button";
import Navbar from "./detailLayout/Navbar";
import Sidebar from "./detailLayout/Sidebar";
import FormContainer from "./detailLayout/FormContainer";
import { Link } from "react-router-dom";

FormLayout.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  offices: PropTypes.array,
  rooms: PropTypes.array,
  foods: PropTypes.array,
};

function FormLayout({ offices, rooms, foods, onSubmit, onChange }) {
  return (
    <div>
      <Sidebar />

      <Navbar />
      <div className="flex ml-[72px] gap-x-4 pl-7 pt-24 pb-9 pr-9 top-68 left-72">
        <div className="mt-2">
          <Link to={-1}>
            <Button type="button" className="ri-arrow-left-s-line text-white" />
          </Link>
        </div>
        <div>
          <h1 className="font-bold text-2xl">Ruang Meeting</h1>
          <div className="flex mt-[4px]">
            <p className="text-sm font-normal ">Ruang Meeting</p>
            <i className="ri-arrow-right-s-line"></i>
            <p className="text-sm font-normal  text-[#4A8394]">Pesan Ruangan</p>
          </div>
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div className="w-[90%] bg-white ml-[72px] gap-x-8 pl-7 h-[900px]">
          <FormContainer
            offices={offices}
            rooms={rooms}
            foods={foods}
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
}

export default FormLayout;
