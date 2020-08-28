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
            <h3 style={{
                fontWeight : "bold"
            }}>Выберите тему</h3>
            <div id="tests">{showTheme()}</div>
            <button className={'greeting-button'} style={{
                position: "fixed",
                bottom: "0px",
                right: "0px",
                width: "40%"
            }}><Link to={'/'}>На главную</Link></button>
        </div>
    )
}

export default Testing;