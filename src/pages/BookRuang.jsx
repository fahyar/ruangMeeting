// import { Form } from "react-router-dom";
import FormLayout from "../layout/FormLayout";
import axios from "axios";
import FormLayoutNew from "../layout/FormLayoutNew";
import Input from "../components/Input";
import InputSelect from "../components/InputSelect";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import Checkbox from "../components/Checkbox";
import InputOption from "../components/InputOptions";

const BookRuang = () => {
  const [foods, setFoods] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [offices, setOffices] = useState([]);
  const [capacityRoom, setCapacityRoom] = useState([]);

  // Fetch data from API
  useEffect(() => {
    // fetchFoods();
    // fetchRooms();
    fetchOffices();
  }, []);

  const fetchOffices = async () => {
    try {
      const response = await fetch(
        "https://6666c7aea2f8516ff7a4e261.mockapi.io/api/dummy-data/masterOffice"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setOffices(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  const fetchRooms = async (event) => {
    try {
      const response = await fetch(
        "https://6666c7aea2f8516ff7a4e261.mockapi.io/api/dummy-data/masterMeetingRooms?officeId=" +
          event.target.value
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setRooms(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  const fetchFoods = async () => {
    try {
      const response = await fetch(
        "https://6686cb5583c983911b03a7f3.mockapi.io/api/dummy-data/masterJenisKonsumsi"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setFoods(data);
    } catch (error) {
      console.error("Error fetching offices:", error);
    }
  };

  const capacityRoomChange = async (event) => {
    try {
      const response = await fetch(
        "https://6666c7aea2f8516ff7a4e261.mockapi.io/api/dummy-data/masterMeetingRooms?roomName=" +
          event.target.value
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCapacityRoom(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching capacity:", error);
    }
  };

  //handle selection change
  // const capacityRoomChange = (event) => {
  //   const value = fetchRooms(event.target.value);
  //   setCapacityRoom(value);

  //   console.log("Selected Value", event);
  // };

  // Handle submit form
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log("Form submitted with values:", formValues);

    console.log("Selected Office ID:", event.target.value);
  }

  return (
    <>
      {/* <FormLayout
        offices={offices}
        rooms={rooms}
        foods={foods}
        onSubmit={handleSubmit}
        onChange={handleChange}
      ></FormLayout> */}
      <FormLayoutNew
        offices={offices}
        rooms={rooms}
        capacityRoom={capacityRoom}
      >
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="card-title">Informasi Ruang Meeting</div>
            <div className="mt-2 pb-6 border-b-4 border-b-gray-300">
              <div className="flex flex-nowrap gap-[20px]">
                <InputSelect
                  label="Unit"
                  handleChange={fetchRooms}
                  defaultValue="Pilih Unit"
                >
                  {offices.map((office) => (
                    <option value={office.id} key={office.id}>
                      {office.officeName}
                    </option>
                  ))}
                </InputSelect>

                <InputSelect
                  label="Ruang Meeting"
                  defaultValue="Pilih Ruang Meeting"
                  handleChange={capacityRoomChange}
                >
                  {rooms.map((room) => (
                    <option value={room.roomName} key={room.id}>
                      {room.roomName}
                    </option>
                  ))}
                </InputSelect>
              </div>
              <div className="flex flex-nowrap mt-4">
                {capacityRoom.map((capacity) => (
                  <Input
                    label="Kapasitas"
                    type="number"
                    name="Capacity"
                    // inputmode="numeric"
                    readOnly
                    disabled
                    key={capacity.capacity}
                    value={capacity.capacity}
                  />
                ))}
              </div>
            </div>
            <div className="card-title mt-6">Informasi Rapat</div>
            <div className="mt-2 pb-6 border-b-4 border-b-gray-300">
              <div className="flex flex-nowrap gap-[20px]">
                <Input label="Tanggal Rapat" type="date" />
                <Input
                  label="Waktu Mulai"
                  placeholder="Pilih Waktu Mulai"
                  option=""
                  type="time"
                />
                <Input
                  label="Waktu Selesai"
                  placeholder="Pilih Waktu Selesai"
                  option=""
                  type="time"
                />
              </div>
              <div className="flex flex-nowrap mt-2">
                <Input
                  label="Jumlah Peserta"
                  placeholder="Masukkan Jumlah Peserta"
                  type="number"
                  // className="disabled:opacity-75"
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
              <Button type="submit" className="text-white" label="Simpan" />
              <Button
                type="button"
                label="Batal"
                className="mr-2 text-red-500 bg-white"
              />
            </div>
          </div>
        </form>
      </FormLayoutNew>
    </>
  );
};

export default BookRuang;
