import React,{useState,useEffect} from 'react';
import axios from "axios";
import './Main.css'


function Main(){
    const [dataloaded,setDataLoaded]=useState(false);
    const [city, setCity]=useState('');
    const [weatherinfo,setWeatherInfo]=useState(null);
    const [searchLocation, setSearchLocation] = useState("Accra");

    function CityInput(event) {
        setCity(event.target.value);
    }
    
    useEffect( ()=>{
        if (weatherinfo){
            setDataLoaded(true)
        }
    }, [weatherinfo]);
      
   useEffect(() =>{
             ApiCall();  
        },[searchLocation] 
    )
    
   function ApiCall() {
    axios.get(`http://api.weatherstack.com/current?access_key=27233a0a91b6fe154323803565655c82&query=${searchLocation}`)
    .then( res => {
        if(res.status===200 && !res.data.error) {
            console.log(res);
            setWeatherInfo(res.data);
        } else {
            console.log(res);
        }
    })
    .catch( err => console.error(err)) 

}
function HandleSearch() {
    setSearchLocation(city);

}


 /*
        let storageArray=[];

storageArray.push(
  {
  name:"Asamoah",
  email:"asamoah@gmail.com"
  },
  {
  name:"Christian",
  email:"christian@gmail.com"
  },
  {
  name:"Aziz",
  email:"aziz@gmail.com"
  },
  {
  name:"Bless",
  email:"bless@gmail.com"
  },
  {
  name:"Thomas",
  email:"thomas@gmail.com"
  },
  {
  name:"Frank",
  email:"frank@gmail.com"
  },
  {
  name:"Nat",
  email:"nat@gmail.com"
  }
  
)

localStorage.setItem('browserStorage',JSON.stringify(storageArray));


 let userSearchVar= JSON.parse(localStorage.getItem('browserStorage'));
 console.log("data in browser",userSearchVar)


 let OnlyFive= userSearchVar.slice(Math.max(userSearchVar.length - 5, 0))
 console.log("OnlyFive",OnlyFive)  */
 
    return(
            <div className="mainpage-one-bg" >
                 
                 <div className="Users">
                        <h1> WEATHER APP </h1>
                        <p>{dataloaded ? weatherinfo.request.query : ""}</p>
                        <p>{ dataloaded ? weatherinfo.location.localtime : ""}</p>
                        <div className="weather-logo">
                             <img src= {dataloaded ? weatherinfo.current.weather_icons[0] : ""} alt=" "  />
                             <h2>{dataloaded ? weatherinfo.current.temperature : ""}° Celcius</h2>
                        </div>
                    
                        <input type="search" value={city}  onChange={CityInput} className="form-control-one"  placeholder="Enter your city..."/> 
                        <input type="submit" onClick={HandleSearch} className="search-weather-btn btn btn-success " />
                 </div>
            </div>

    );
    }
        
        export default Main;


 