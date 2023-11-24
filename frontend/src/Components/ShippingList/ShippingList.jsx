import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ShippingList.css'
import { useNavigate } from 'react-router-dom';
function ShippingList() {

  const [shippingList, setShippingList] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async() => {
    try {
      const response = await axios.get("http://localhost:5000/shipping")
      setShippingList(response.data)
    } catch (error) {
      alert(error)
    }
  }

  const handleDelete = async(shippingId) => {
    try {
      const response = await axios.delete("http://localhost:5000/shipping/" + shippingId)
      alert(response.data)
      fetchData();
    } catch (error) {
      alert(error)
    }
  }
  const handleEdit = (shippingId) => {
    navigate("/ShippingForm/"+shippingId)
  }
  return (
      <div className='list'>
        <div className="image">
          <img src="/6206720.jpg" alt="" srcset="" />
      </div>
      <div className="table-container">
        <center><table border={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Receiver's Name</th>
              <th>Weight(in kg's)</th>
              <th>Color</th>
              <th>Destination Country</th>
              <th>Cost</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {shippingList.map((shipping) => {
              return (
                <tr key={shipping._id}>
                  <td>{shipping._id}</td>
                  <td>{shipping.name}</td>
                  <td>{shipping.weight}</td>
                  <td>{shipping.color}</td>
                  <td>{shipping.country}</td>
                  <td>{shipping.cost}</td>
                  <td>
                    <center><button className='edit' onClick={() => handleEdit(shipping._id)}>Edit</button>
                    <button className='delete' onClick={()=>handleDelete(shipping._id)}>Delete</button></center>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table></center>
        </div>
      </div>
  )
}

export default ShippingList