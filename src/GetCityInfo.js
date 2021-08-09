import {useState , useEffect} from 'react';

function GetCityInfo() {


    useEffect(() => {
        const key = "Ycn7vcd0Ab8FWRia0CMpAokA7VGKRAt6";
        const base ="http://dataservice.accuweather.com/locations/v1/cities/search"
        const query = `?apikey=${key}&q=${city}`
    
        fetch(base + query)
        .then(res=>res.json())
        .then(data=>{ 
            console.log(data)
            data[0]
          })

    }, []);

    return null;
}

export default GetCityInfo;