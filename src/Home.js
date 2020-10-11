import React from "react";
import './Home.css';
function Home (){
    return( 
        <div className="weather">

  <label>
      <h1 > WEATHER APP</h1>
  </label>
  <p>Accra,Ghana</p>
  <p>11-11-2020</p>

<div className="weather-log">
<img src= "Images\weather-logo.jpg" alt=" " height="70" width="70" />
<h2>27° Celcius</h2>
    </div>
    
    
</div>
  
    );
    
}
export default Home;