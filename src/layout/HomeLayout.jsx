import Button from "../components/Button";
import Navbar from "./detailLayout/Navbar";
import Sidebar from "./detailLayout/Sidebar";
import { useNavigate, Link } from "react-router-dom";

function HomeLayout() {
  const navigate = { useNavigate };
  return (
    <div>
      <Sidebar />

      <Navbar />
      <div className="flex justify-between ml-[72px] gap-x-8 pl-7 pt-24 pb-9 pr-9 top-68 left-72">
        <div>
          <h1 className="font-bold text-2xl">Ruang Meeting</h1>
          <p className="text-sm font-normal mt-[4px] text-[#4A8394]">
            Ruang Meeting
          </p>
        </div>
        <div>
          <Link to="./pages/BookRuang">
            <Button
              className="ri-add-line text-white"
              label="Pesan Ruangan"
              type="button"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
