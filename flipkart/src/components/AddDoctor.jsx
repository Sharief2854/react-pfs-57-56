import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddDoctor() {
    const[name,setName]=useState("");
    const[number,setNumber]=useState("");
    const[gender,setGender]=useState("");
    const[specialization,setSpecialization]=useState("");
    const[salary,setSalary]=useState("");
    const[loading,setLoading]=useState(false);

    const navigate=useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        if(name=="" || number=="" || gender=="" || specialization=="" || salary==""){
            alert("please fill all details")
            return;
        }
        // regex

        let data={
            name,
            number,
            gender,
            specialization,
            salary
        }

        try{
            setLoading(true);
            let res=await axios.post("http://localhost:3000/doctors",data)
            // console.log(res);
            alert("doctor details added!!!");
            navigate("/")
        }
        catch(err){
            alert("something went wrong")
        }
        finally{
            setLoading(false)
        }
    }


  return (
    <div>
        <form>
            Name:
            <input type="text"  onChange={(event)=>setName(event.target.value)}/>

             Number:
            <input type="number"  onChange={(event)=>setNumber(event.target.value)}/>

             Gender:
            <select onChange={(event)=>setGender(event.target.value)}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>  
            </select>

            Specialization:
            <input type="text" onChange={(event)=>setSpecialization(event.target.value)}/>

            Salary:
            <input type="number" onChange={(event)=>setSalary(event.target.value)}/>

            <button onClick={handleSubmit}>
                {loading==true?"loading....":"addDoctor"}
            </button>
        </form>
    </div>
  )
}

export default AddDoctor
