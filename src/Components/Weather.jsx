import React, { useEffect, useState } from 'react';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import axios from 'axios';
const Weather = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('delhi');
    const API_key = `a4a16998b2d5d7273954cd5063f381c0`;
    useEffect(() => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_key}`
    
        const data1 = async () => {

            const res = await fetch(url)
            const resj = await res.json();
            console.log(resj.main)
            setCity(resj.main);
        }
      
        data1();

    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputFeild" value={search} onChange={(e) => {
                        setSearch(e.target.value);
                    }} />
                </div>
                {!city ? <p className="errorMsg">`No data Found`</p> : (<>
                    <div className="info">
                        <h2 className="location"><span id="street"> <AccessibilityNewIcon /></span>{search}</h2>
                        <h1 className="temp">{city.temp}°Cel</h1>
                        <h3 className="tempmin_max">Min : {city.temp_min} °Cel | Max : {city.temp_max} °Cel</h3>
                    </div>
                    <div className="wave -one"></div>
                    <div className="wave -two"></div>
                    <div className="wave -three"></div>
                </>)}
            </div>
        </>
    )
}
export default Weather;