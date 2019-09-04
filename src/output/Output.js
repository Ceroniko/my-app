import React from 'react';

export default function Result(props) {
    return props.result.map((item, index) => {
        var  res = item.split(',');
        console.log(res)
        return(
            <div className="result" key={index}>
                <p>{res[3]}</p>
                <p>{res[0]}</p>
                <p>{res[1]+res[2]}</p>
                <p style={
                    {
                    width: '100%',
                    borderBottom:'1px solid black'}
                }> </p>
            </div>
        )
    })
}