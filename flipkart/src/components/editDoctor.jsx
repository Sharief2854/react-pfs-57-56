import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditDoctor() {
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");
    const[specialization,setSpecialization]=useState("");
    const[salary,setSalary]=useState("");
    const[loading,setLoading]=useState(false);

    const navigate=useNavigate();
    const params=useParams();
    async function handleSubmit(e){
        e.preventDefault();

        if(name=="" || age=="" || gender=="" || specialization=="" || salary==""){
            alert("please fill all details")
            return;
        }
        // regex

        let data={
            name,
            age,
            gender,
            specialization,
            salary
        }

        try{
            setLoading(true);
            let res=await axios.put(`http://localhost:3000/doctors/${params.id}`,data)
            // console.log(res);
            alert("doctor details updated!!!");
            navigate(-1)
        }
        catch(err){
            alert("something went wrong")
        }
        finally{
            setLoading(false)
        }
    }

    async function getData(){
        let res=await axios.get(`http://localhost:3000/doctors/${params.id}`)
        console.log(res);
        setName(res.data.name)
        setGender(res.data.gender)
        setSpecialization(res.data.specialization)
        setSalary(res.data.salary)
        setAge(res.data.age)
    }

    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
        <form>
            Name:
            <input type="text"  onChange={(event)=>setName(event.target.value)} value={name}/>

             Age:
            <input type="number"  onChange={(event)=>setAge(event.target.value)} value={age}/>

             Gender:
            <select onChange={(event)=>setGender(event.target.value)} value={gender}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>  
            </select>

            Specialization:
            <input type="text" onChange={(event)=>setSpecialization(event.target.value)} value={specialization}/>

            Salary:
            <input type="number" onChange={(event)=>setSalary(event.target.value)} value={salary}/>

            <button onClick={handleSubmit}>
                {loading==true?"loading....":"EditDoctor"}
            </button>
        </form>
    </div>
  )
}

export default EditDoctor
