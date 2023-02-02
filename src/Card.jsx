
function  Card(props) {
    return <div style={{border:"2px solid red", padding:"20px", margin:"10px"}}>
     <h2 className="demo" >Name : {props.name}</h2>
    <p>Professsion : {props.professsion}</p>
    </div>

}

export default Card