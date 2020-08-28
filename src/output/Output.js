import React from 'react';
import "./Output.css";

export default function Result(props) {
    return props.result.map((item, index) => {
        var  res = item.split(',');
        console.log(res)
        return(
            <div className="results" key={index}>
                <p>{"Предмет: " + res[3]}</p>
                <p>{"Результат: " + res[0] + "%"}</p>
                <p>{"Время сдачи: " + res[1]+res[2]}</p>
                <p style={
                    {
                    width: '100vw',
                    borderBottom:'3px solid #dda0dd'}
                }> </p>
            </div>
        )
    })
}