import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DoctorDetails() {
    const[doctor,setDoctor]=useState({});

    let params=useParams();
    
    async function getData(){
        let res=await axios.get(`http://localhost:3000/doctors/${params.id}`)
        setDoctor(res.data);
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div>
      <div className="doctor-details-container">
        <div className="doctor-details-left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
            width="150"
          />

          {/* later we will fetch doctor details based on the ID (params.id) */}
          <h1>{doctor.name}</h1>

          <p className="subtitle">{doctor.specialization}</p>
          <div className="card-btns">
            <button className="btn-2">
              Edit
            </button>
            <button
              className="btn-2"
              style={{
                backgroundColor: "transparent",
                color: "red",
                borderColor: "red",
              }}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="doctor-details-right">
          <h3>Doctor Information</h3>
          <table className="doctor-details-table">
            <tr>
              <td>Name</td>
              <td>{doctor.name}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{doctor.age}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{doctor.gender}</td>
            </tr>
            <tr>
              <td>Specialization</td>
              <td className="subtitle">{doctor.specialization}</td>
            </tr>
            <tr>
              <td>Salary</td>
              <td>{doctor.salary}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
