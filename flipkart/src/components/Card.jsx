function Card(props){
    return(
        <div className="card">
            <h3>{props.name}</h3>
            <h1>{props.gender}</h1>
            <h1>{props.specialization}</h1>
        </div>
    )
}
export default Card