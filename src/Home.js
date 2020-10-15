import React,{useState} from "react";



function Home (){

    const [city, setCity]=useState('')

    function CityInput(event){
        setCity(event.target.value)
    }

    return( 

        <div className="Homepage">


            <h1 > WEATHER APP</h1>

            <p>Accra,Ghana</p>
            <p>11-11-2020</p>

            <div className="weather-logo">
                <img src= "Images\weather-logo.jpg" alt=" "  />
                <h2>27° Celcius</h2>
            </div>
        
            <input type="search" value={city}  onChange={CityInput} className="form-control"  placeholder="Enter your city..."/> 

            
            
             <input type="submit"  className="search-weather-btn btn btn-success " /> 
                    
        
        </div>
  
    );
    
}
export default Home;