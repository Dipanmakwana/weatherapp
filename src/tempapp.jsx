import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Temp = () =>{
    const [city, setCity] = useState([]);
    const [search , searchName] = useState("Gujrat");
    useEffect(()=>{
        const fetchAPI = async ()=>{
            const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${search}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'ba22ea4078msh73af2954f5aeff7p149424jsn719bd6e6195d',
                    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                setCity(result);
            } catch (error) {
                console.error(error);
            }
        }

        fetchAPI();
    }, [search]);

    return(
        <>
        <div className="main-card d-flex justify-content-center align-items-center flex-column flex-nowrap">
        <h1 className=" text-center fw-bolder my-5 text">𝕎𝕖𝕒𝕥𝕙𝕖𝕣 𝔸𝕡𝕡</h1>
            <div className="co container-fluid card text-bg-dark mb-3 mx-auto"  data-wow-delay="0.5s">
                <input className=" pl-5 p-2 border-0 me-2 m-3 serch text-capitalize" type="search" placeholder="Search" aria-label="Search" onChange={(event)=>{
                    searchName(event.target.value);
                }}/>

                {
                    !city.temp ? (<p className="text-center">No data Found</p>) : (
                        <div>
                            <div className="card-header text-center fw-bolder c-name text-capitalize"> 
                                🧑‍🍼 {search}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center mb-3"> Temprature :  {city.temp}&#xb0; Cel </h5>
                                <p className="card-text text-center">Wind Speed : {city.wind_speed} km/h || Wind Degree : {city.wind_degrees}&#xb0; </p>
                                <p className="text-center"> Max. Temp : {city.max_temp}&#xb0; Cel 
                                || Min. Temp : {city.min_temp}&#xb0; Cel </p>
                                <p className="text-center">Humidity : {city.humidity}% </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        </>
    )
}

export default Temp;