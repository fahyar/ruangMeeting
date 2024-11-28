// import { Form } from "react-router-dom";
import FormLayout from "../layout/FormLayout";
// import FormLayoutNew from "../layout/FormLayoutNew";
import { useState, useEffect } from "react";

const BookRuang = () => {
  const [foods, setFoods] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [offices, setOffices] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);

  // Fetch data from API
  useEffect(() => {
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
        console.error("Error fetching offices:", error);
      }
    };

    const fetchRooms = async () => {
      try {
        const response = await fetch(
          "https://6666c7aea2f8516ff7a4e261.mockapi.io/api/dummy-data/masterMeetingRooms"
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

    fetchFoods();
    fetchRooms();
    fetchOffices();
  }, []);

  //handle selection change
  const handleChange = (value) => {
    setSelectedValue(value);
    console.log("Selected Value", value);
  };

  // Handle submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log("Form submitted with values:", formValues);

    console.log("Selected Office ID:", event.target.value);
  };

  return (
    <>
      <FormLayout
        offices={offices}
        rooms={rooms}
        foods={foods}
        onSubmit={handleSubmit}
        onChange={handleChange}
      ></FormLayout>
    </>
  );
};

export default BookRuang;
