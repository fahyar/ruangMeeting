import Input from "../../components/Input";
import InputSelect from "../../components/InputSelect";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import PropTypes from "prop-types";
import InputOption from "../../components/InputOptions";
import { useState } from "react";
import axios from "axios";

FormContainer.propTypes = {
  onChange: PropTypes.func,
  offices: PropTypes.array,
  rooms: PropTypes.array,
  foods: PropTypes.array,
};

function FormContainer({ offices, rooms, foods, onChange }) {
  // const handleOfficeChange = (value) => {
  //   setSelectedOffice(value.rooms);
  //   console.log("Selected Office", value);
  // };

  // function selectOffice({ rooms, onChange }) {
  //   const handleSelectOffice = (event) => {
  //     onChange(event.target.value);
  //   };
  // }

  return (
    <div className="flex form-control card-body container-md border-2 rounded-lg shadow mx-auto h-full ">
      <div className="card-title">Informasi Ruang Meeting</div>
      <div className="mt-2 pb-6 border-b-4 border-b-gray-300">
        <div className="flex flex-nowrap gap-[20px]">
          <InputSelect
            label="Unit"
            placeholder="Pilih Unit"
            onChange={onChange}
          >
            {offices.map((office) => (
              <InputOption
                key={office.id}
                value={office.id}
                label={office.officeName}
              />
            ))}
          </InputSelect>

          <InputSelect label="Ruang Meeting" placeholder="Pilih Ruang Meeting">
            {rooms.map((room) => (
              <InputOption
                key={room.id}
                value={room.id}
                label={room.roomName}
              />
            ))}
            else{}
          </InputSelect>
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
          {/* <input type="date" />
          <input type="time" /> */}
          <Input type="date" label="Tanggal Rapat" />
          <Input
            type="time"
            label="Waktu Mulai"
            placeholder="Pilih Waktu Mulai"
            option=""
          />
          <Input
            type="time"
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
        <Button type="submit" label="Simpan" className="text-white" />
        <Button
          type="reset"
          label="Batal"
          className="mr-2 text-red-600 bg-white"
        />
      </div>
    </div>
  );
}

export default FormContainer;
