import React from 'react';
import { Link } from "react-router-dom";

export default function Home(props) {
    return (
        <div className="Home-page">
            <button><Link to={'/testing'} className={'greeting-button'}>Начать проходить тесты!</Link></button>
            <button><Link to={'/results'} className={'greeting-button'}>Посмотреть свои результаты</Link></button>
        </div>
    );
}