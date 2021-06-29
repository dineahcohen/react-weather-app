import React, { useState } from 'react';
import styled from '@emotion/styled';
import WeatherCard from './WeatherCard';
import { BASE_URL, API_KEY } from '../api/config';

const WeatherSearch = () => {

    const Button = styled.button`
      background: #b6b6;
      color: #fff;
      border-radius: 8px;
    `;

    const [weather, setWeather] = useState({});
    const [query, setQuery] = useState('');

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`
    }


    const onSearch = (e) => {
        fetch(`${BASE_URL}/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(results => {
                setWeather(results);
                setQuery('');
                console.log(results);
            });
    };

    return (
        <>
            <p style={{ textAlign: "center", color: "white", fontSize: "25px", fontWeight: "bold" }}>
                Find Weather Forecast
            </p>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <Button onClick={onSearch}> Check Weather </Button>
            {(typeof weather.main != "undefined") ? (
                <div>

                    <WeatherCard city={weather.name} country={weather.sys.country} date={dateBuilder(new Date())}
                        temperature={Math.round(weather.main.temp)} weather={weather.weather}
                    />
                </div>

            ) : ("")}
        </>
    )
}
export default WeatherSearch;