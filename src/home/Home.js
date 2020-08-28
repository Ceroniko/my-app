import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home(props) {
    return (
        <div className="Home-page">
            <button className={'greeting-button'}><Link to={'/testing'} >Начать проходить тесты!</Link></button>
            <button className={'greeting-button'}><Link to={'/booklet'} >Пройти буклет!</Link></button>
            <button className={'greeting-button'}><Link to={'/results'} >Посмотреть свои результаты</Link></button>
        </div>
    );
}