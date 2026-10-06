import { useEffect, useState } from "react";
import Card from "./Card"
import axios from "axios"

function Home() {
    const[data,setdata]=useState([]);
    const[loading,setLoading]=useState(false);
    async function getData(){
       try{
            setLoading(true);
            let api="http://localhost:3000/doctors"
            let res=await axios.get(api);
            console.log(res.data);
            setdata(res.data);
       }
       catch(err){
            alert("something went wrong ...")
       }
       finally{
            setLoading(false);
       }
    }
    let newArr=data.map((item,ind)=>{
        return(
            <Card name={item.name} specialization={item.specialization} gender={item.gender} key={ind}/>
        )
    });

    useEffect(()=>{
        getData()
    },[])

  return (
    <div>   
        
        <div className="container">
            {loading==true?"Loading.....":newArr}
        </div>
    </div>
  )
}

export default Home
