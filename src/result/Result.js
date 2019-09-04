import React from 'react';
import { Link } from "react-router-dom";

export default function Result(props) {
    var options1 = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    localStorage.setItem('Результат - ' + (localStorage.length + 1), [Math.round((props.sum*100)/props.arrayRightAnswer.length),new Date().toLocaleString("ru", options1),props.theme]);
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
            <p>Вы ответили на {props.sum} {props.sum>=11 && props.sum<=19 ? "вопросов" :
                                              (props.sum % 10) === 0 || ((props.sum % 10)>=5 && (props.sum % 10)<=9) ? "вопросов" :
                                                  ((props.sum % 10)>=2 && (props.sum % 10)<=4) ? "вопроса" : "вопрос"} из {props.arrayRightAnswer.length} </p>
            {(props.sum*100)/props.arrayRightAnswer.length > 55.5 ? <p>Поздравляем! Вы успешно сдали тест, и набрали {Math.round((props.sum*100)/props.arrayRightAnswer.length)}%</p> : <p>Вы не справились, и набрали всего {Math.round((props.sum*100)/props.arrayRightAnswer.length)}%.</p>}
            <p>Время прохождения теста: {end2.toLocaleString("ru", options) }</p>
            <button><Link to={'/testing'} className={'greeting-button'}>Выбрать новую тему для тестирования</Link></button>
            <button><Link to={'/'} className={'greeting-button'}>Вернуться на главную</Link></button>
            <button onClick={() => {props.repeatTest()}}>Пройти тест еще раз</button>
            <button><Link to={'/results'} className={'greeting-button'}>Посмотреть результаты</Link></button>
        </div>
    );
}