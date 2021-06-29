import React from 'react';
import styled from '@emotion/styled';

const WeatherCard = (props) => {
    const WeatherWrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      background: red;
      width: 18rem;
      border-radius: 8px;
      height: 5rem;
    `;

    console.log(props)
    return (
        <WeatherWrapper>
            <h2> {props.city} </h2>
        </WeatherWrapper>
    );
}
export default WeatherCard;