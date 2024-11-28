import Input from "../components/Input";
import InputSelect from "../components/InputSelect";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import FormContainer_ from "./detailLayout/FormContainer_";
import Sidebar from "./detailLayout/Sidebar";
import Navbar from "./detailLayout/Navbar";
import { Link } from "react-router-dom";

function FormLayoutNew() {
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

      <div className="flex form-control card-body container-md border-2 rounded-lg shadow mx-auto h-full">
        <FormContainer_ />
        <div className="card-title">Informasi Ruang Meeting</div>
        <div className="mt-2 pb-6 border-b-4 border-b-gray-300">
          <div className="flex flex-nowrap gap-[20px]">
            <InputSelect label="Unit" placeholder="Pilih Unit" option="" />
            <InputSelect
              label="Ruang Meeting"
              placeholder="Pilih Ruang Meeting"
              option=""
            />
          </div>
          <div className="flex flex-nowrap mt-4">
            <Input
              label="Kapasitas"
              placeholder="0"
              type="number"
              disabled
              className="disabled:opacity-75"
            />
          </div>
        </div>
        <div className="card-title mt-6">Informasi Rapat</div>
        <div className="mt-2 pb-6 border-b-4 border-b-gray-300">
          <div className="flex flex-nowrap gap-[20px]">
            <Input label="Tanggal Rapat" />
            <InputSelect
              label="Waktu Mulai"
              placeholder="Pilih Waktu Mulai"
              option=""
            />
            <InputSelect
              label="Waktu Selesai"
              placeholder="Pilih Waktu Selesai"
              option=""
            />
          </div>
          <div className="flex flex-nowrap mt-2">
            <Input
              label="Jumlah Peserta"
              placeholder="Masukkan Jumlah Peserta"
              type="number"
              disabled
              className="disabled:opacity-75"
            />
          </div>
          <div className="flex flex-nowrap mt-2">
            <div className="form-control">
              Jenis Konsumsi
              <Checkbox label="Snack Siang" />
              <Checkbox label="Makan Siang" />
              <Checkbox label="Snack Sore" />
            </div>
          </div>
          <div className="flex flex-nowrap mt-2">
            <Input
              label="Nominal Konsumsi"
              placeholder="0"
              type="number"
              disabled
              className="disabled:opacity-100"
            />
          </div>
        </div>
        <div className="flex flex-row-reverse mt-2">
          <Button type="submit" label="Simpan" />
          <Button
            type="button"
            label="Batal"
            className="mr-2 text-red-500 bg-white"
          />
        </div>
      </div>
    </>
  );
}

export default FormLayoutNew;
