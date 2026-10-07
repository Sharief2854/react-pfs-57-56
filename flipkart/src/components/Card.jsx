import { useNavigate } from "react-router-dom"

function Card(props){

    const navigate=useNavigate();

    function gotoViewDetails(){
        navigate(`/doctorDetails/${props.id}`);
    }
    return(
        <div className="card">
            <h3>{props.name}</h3>
            <h1>{props.gender}</h1>
            <h1>{props.specialization}</h1>
            <button className="btn-2" onClick={gotoViewDetails}>View Details</button>
        </div>
    )
}
export default Card