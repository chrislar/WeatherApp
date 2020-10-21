import React,{useState} from 'react';
import { Redirect } from "react-router-dom";
//import Home from './Home';
function Logout  () {

    const [loggedOut, setLoggedOut] = useState(false)
  
    function handleLogout  () {
      setLoggedOut(true)
  
    };
  
    if (loggedOut) {
      return <Redirect to="/" push={true} />

    }
  
 //   return <Button onClick={logout}>LogOut</Button>;
  
    
return(


    <button type="submit" onClick={handleLogout} className="btn btn-block btn-success">Logout</button>


)
}
export default Logout;