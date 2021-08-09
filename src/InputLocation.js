import React from 'react'
import './InputLocation.css'
import {useState , useRef, useEffect} from 'react';

function InputLocation (){

    const [location , setLocation] = useState();
    const [locations, setLocations] = useState([]);
    const [weather , setWeather] = useState()
    const inputRef = useRef();

    function seartchBarHandler(e){
        e.preventDefault();
        setLocation(inputRef.current.value)
    }

    const apiKey = "Ycn7vcd0Ab8FWRia0CMpAokA7VGKRAt6";

    // get weather info
    useEffect(() => {
        
        const url ="http://dataservice.accuweather.com/currentconditions/v1/";
        const query = `${id}?apiKey=${apiKey}`;
        fetch(url + query)
        .then(res=>res.json())
        .then(data => { 
            console.log(data)
          
            setWeather(data);
          })
    }, [weather]);



    // get city info
    useEffect(() => {
      
        const url ="http://dataservice.accuweather.com/locations/v1/cities/autocomplete";
        const query = `?apikey=${apiKey}&q=${location}`;
        fetch(url + query)
        .then(res=>res.json())
        .then(data => { 
            console.log(data)
          
            setLocations(data);
          })
    }, [location]);

    function fetchWeather(locationKey) {
        console.log(locationKey)
        return location.Key
    }

    return (
        <div>
            <lable>LOCATION</lable>
            <input type="text" ref={inputRef} placeholder="Enter a city"></input>
            <button type="submit" onClick={seartchBarHandler}>SEARCH</button>
            <ul>
            {locations.map((location, i) => {
                return <li key={i} onClick={() => fetchWeather(location.Key)}>{location.LocalizedName}</li>
            })}
            </ul>
        </div>
    )
}

export default InputLocation ;