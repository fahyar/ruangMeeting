import Button from "../components/Button";
import FormContainer_ from "./detailLayout/FormContainer_";
import Sidebar from "./detailLayout/Sidebar";
import Navbar from "./detailLayout/Navbar";
import { Link } from "react-router-dom";

function FormLayoutNew({ children }) {
  return (
    <>
      <Sidebar />

      <Navbar />
      <div className="flex ml-[72px] gap-x-4 pl-7 pt-24 pb-9 pr-9 top-68 left-72">
        <div className="mt-2">
          <Link to={-1}>
            <Button type="button" className="ri-arrow-left-s-line" />
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

      <FormContainer_>{children}</FormContainer_>
    </>
  );
}

export default FormLayoutNew;
