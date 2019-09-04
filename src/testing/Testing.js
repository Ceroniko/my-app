import React from 'react';
import data from '../test.json';
import { Link } from "react-router-dom";
import './Testing.css';
const Testing = () => {
    const showTheme = () => {
        return data.map((item, index) => {
            return  <Link key={index} to={`/testing/${index}`}>{item.theme}</Link>;
        })
    };

    return(
        <div className="allTest">
            <p>Выберите тему</p>
            <div id="tests">{showTheme()}</div>
        </div>
    )
}

export default Testing;