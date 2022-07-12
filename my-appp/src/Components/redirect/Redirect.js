import { useNavigate } from "react-router-dom";
function Redirect() {

    const navigate = useNavigate()
    setTimeout(() => {
       console.log("waited 3 seconds") 
       navigate("/Dashbord")
    }, 3000);
  
    return (
      <div style={{backgroundColor:"#1a1a1a",color:"#ff5b00",fontSize:"200%"}}>Redirecting to Dashboard</div>
    )
}


export default Redirect