import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, population, flags} = props.country;
    return (
        <div className='country'>
            <h3>Country Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <h5>Population : {population}</h5>
        </div>
    );
};

export default Country;