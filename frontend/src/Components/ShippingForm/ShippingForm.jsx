import React, { useEffect, useState } from "react";
import "./ShippingForm.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function ShippingForm() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("#000000");
  const [country, setCountry] = useState("");
  const [cost, setCost] = useState("");

  const [shippingId, setShippingId] = useState(null);

  const params = useParams();

  useEffect(() => {
    if (params && params.id) {
      setShippingId(params.id);
      getShippingById(params.id);
    } else {
      setShippingId(null);
    }
  }, [params]);

  const getShippingById = async (shippingId) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/shipping/" + shippingId
      );
      const shippingData = response.data;

      setName(shippingData.name);
      setWeight(shippingData.weight);
      setColor(shippingData.color);
      setCountry(shippingData.country);
      setCost(shippingData.weight*shippingData.country.value)
    } catch (error) {
      alert(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      weight: weight,
      color: color,
      country: country,
      cost:cost
    };
    // console.log(data);
    try {
      let response;
      if (shippingId) {
        //edit
        response = await axios.put(
          "http://localhost:5000/shipping/" + shippingId,
          data
        );
      } else {
        //create
        response = await axios.post("http://localhost:5000/shipping", data);
      }
      alert(response.data);
    } catch (error) {}
  };
 
  const calculateShippingCost = () => {
    const totalShippingCost = weight * country;
    setCost(totalShippingCost);
  };
  
  return (
    <div className="container">
      <center>
        <form onSubmit={handleSubmit}>
          <h1>Shipping Form</h1>
          <div className="field">
            <label>
              Receiver's Name:
              <input
                type="text"
                placeholder="Enter the name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                pattern="[A-Z|a-z]"
                title="Only characters allowed"
              />
            </label>
          </div>
          <br />
          <div className="field">
            <label>
              Weight(in kgs):
              <input
                type="text"
                placeholder="Enter the weight"
                required
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                pattern="\d*\.?\d*"
                title="Only positive numbers allowed"
              />
            </label>
          </div>
          <br />
          <div className="field">
            <label>
              Select the color of the box:
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                required
              />
            </label>
          </div>
          <br />
          <div className="field">
            <label>
              Country:
              <select
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                required
              >
                <option value="" disabled hidden>
                  Select a country
                </option>
                <option value="7.35">Sweden(7.35 INR)</option>
                <option value="11.53">China(11.53 INR)</option>
                <option value="15.63">Brazil(15.63 INR)</option>
                <option value="50.09">Australia(50.09 INR)</option>
              </select>
            </label>
          </div>
          <br />
          <input type="submit" value="Submit" onClick={ calculateShippingCost} className="button" />
        </form>
      </center>
    </div>
  );
}

export default ShippingForm;
