import React,{useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './Home';
import Main from './Main';




function App() {

const [userlogged, setLogged] = useState(false)

  return (
   <div className="App">
  <div className="Left"> 
< Home/>
</div>
 <div className="Right">
 {!userlogged &&<Login setLogged={setLogged}/>}

 </div>
 
 {userlogged &&<Main/>}
  
   
     
     

</div>

  );
  
 
  
}

  
export default App;

