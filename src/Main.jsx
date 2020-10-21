import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Main.css'

let storageArray = [];
function Main() {

    const [dataloaded, setDataLoaded] = useState(false);
    const [city, setCity] = useState('');
    const [weatherinfo, setWeatherInfo] = useState(null);
    const [searchLocation, setSearchLocation] = useState("Accra");
    const [searchhistory, setSearchHistory] = useState('');
    function CityInput(event) {
        setCity(event.target.value);
    }

    useEffect(() => {
        if (weatherinfo) {
            setDataLoaded(true)
        }
    }, [weatherinfo]);

    useEffect(() => {
        ApiCall();
    }, [searchLocation]
    )

    function ApiCall() {
        axios.get(`http://api.weatherstack.com/current?access_key=27233a0a91b6fe154323803565655c82&query=${searchLocation}`)
            .then(res => {
                if (res.status === 200 && !res.data.error) {
                    console.log('WeatherArrange', res.data);
                    setWeatherInfo(res.data);
                    storageArray.push(
                        {
                            localtime: `${res.data.location.name},${res.data.location.country} `,
                            time: res.data.current.observation_time,
                            logo: res.data.current.weather_icons[0],
                            temperature: res.data.current.temperature

                        }

                    )
                    localStorage.setItem('browserStorage', JSON.stringify(storageArray));
                    GetSearchHistory()
                } else {
                    console.log(res);
                }
            })
            .catch(err => console.error(err))

    }
    function HandleSearch() {
        setSearchLocation(city);

    }
    function GetSearchHistory() {
        let userSearchVar = JSON.parse(localStorage.getItem('browserStorage'));
        console.log("data in browser", userSearchVar)
        let OnlyFive = userSearchVar.slice(Math.max(userSearchVar.length - 5, 0))
        console.log("OnlyFive", OnlyFive)
        let mySearchResults = OnlyFive.map((r, index) => {
            return <div key={index}>
                <table >
                    <tr>
                        <th>Search History</th>
                    </tr>
                    <tr>
                        <td>{r.localtime}</td>
                    </tr>
                    <tr>
                        <td>{r.time}</td>
                    </tr>
                    <tr>
                        <td> <img src={r.logo} alt=" " /></td>
                    </tr>
                    <tr>
                        <td>{r.temperature}°  Celcius </td>
                    </tr>
                </table>
            </div>
        });
        setSearchHistory(mySearchResults)
    }

    return (
        <div className="mainpage-one-bg" >

            <div className="Users">
                <h1> WEATHER APP </h1>
                <p>{dataloaded ? weatherinfo.request.query : ""}</p>
                <p>{dataloaded ? weatherinfo.location.localtime : ""}</p>
                <div className="weather-logo">
                    <img src={dataloaded ? weatherinfo.current.weather_icons[0] : ""} alt=" " />
                    <h2>{dataloaded ? weatherinfo.current.temperature : ""}° Celcius</h2>
                </div>

                <input type="search" value={city} onChange={CityInput} className="form-control-one" placeholder="Enter your city..." />
                <input type="submit" onClick={HandleSearch} className="search-weather-btn btn btn-success " />
                <div className="history" style={{ color: "whitesmoke" }}>
                    {searchhistory}
                </div>
            </div>
        </div>
    );
}

export default Main;