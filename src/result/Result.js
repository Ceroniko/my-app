import React from 'react';
import { Link } from "react-router-dom";
import "./Result.css";

export default function Result(props) {
    var options1 = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    localStorage.setItem('Результат - ' + (localStorage.length + 1), [Math.round((props.sum*100)/props.arrayRightAnswer.length),new Date().toLocaleString("ru", options1),props.theme ? props.theme : 'Букдет']);
    var end = new Date();
    end -= props.time;
    var end2 = new Date();
    end2.setTime(-10800000+end);
    var options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    return (
        <div className="result">
            <div className="result-wrap">
                {props.theme ?  <p>Тема : {props.theme}</p> : <p>Буклет</p>}
                <p>Вы ответили на {props.sum} {props.sum>=11 && props.sum<=19 ? "вопросов" :
                                                (props.sum % 10) === 0 || ((props.sum % 10)>=5 && (props.sum % 10)<=9) ? "вопросов" :
                                                    ((props.sum % 10)>=2 && (props.sum % 10)<=4) ? "вопроса" : "вопрос"} из {props.arrayRightAnswer.length} </p>
                {(props.sum*100)/props.arrayRightAnswer.length > 55.5 ? <p>Поздравляем! Вы успешно сдали тест, и набрали {Math.round((props.sum*100)/props.arrayRightAnswer.length)}%</p> : <p>Вы не справились, и набрали всего {Math.round((props.sum*100)/props.arrayRightAnswer.length)}%.</p>}
                {(props.sum*100)/props.arrayRightAnswer.length > 55.5 ? <img src="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif" width="90%" heigth="90%" alt=""/> :  <img src="https://media.giphy.com/media/4GWh1lkk0Lwx0gNOjc/giphy.gif" width="90%" heigth="90%" alt=""/>}
                <p style={{
                    marginTop : '5px'
                }}>Время прохождения теста: {end2.toLocaleString("ru", options) }</p>
            </div>  
            <button className={'greeting-button'}><Link to={'/testing'}>Выбрать новую тему для тестирования</Link></button>
            <button className={'greeting-button'}><Link to={'/'}>Вернуться на главную</Link></button>
            <button className={'greeting-button flower'} onClick={() => {props.repeatTest()}}>Пройти тест еще раз</button>
            <button className={'greeting-button'}><Link to={'/results'}>Посмотреть результаты</Link></button>
        </div>
    );
}