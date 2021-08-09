// import {useState , useEffect} from 'react';

// function WeatherFetch() {
//     // const key = 'Ycn7vcd0Ab8FWRia0CMpAokA7VGKRAt6';
//     // const[mainTemp , srtMainTemp] = useState('');
//     // const [description,setDescription] = useState('');
//     // const [main,setMain] = useState('');
//     // const [iconID,setIconID] = useState('');

//     useEffect(() => {

//         const key = "Ycn7vcd0Ab8FWRia0CMpAokA7VGKRAt6";
//         const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//         const query = `${id}?apikey=${key}`;
       
//         fetch(base + query)
//         .then(res=>res.json())
//         .then(data=>{
//             console.log(data)
//             // data[0]
//             // setMainTemp(data.main.temp)
//             // setDescription(data.weather[0].description);
//             // setMain(data.weather[0].main);
//             // setIconID(data.weather[0].icon);
// });

//     }, []);

//     return(
//         <>
//         <h2>{mainTemp}</h2>
//         <p></p>
//         <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"} />
//         <h1>{description}</h1>
//         </>
//     );
// };

// export default WeatherFetch;