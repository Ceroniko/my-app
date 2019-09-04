import React from "react";
import Output from "../output/Output";
import { Link } from "react-router-dom";

class Results extends React.Component{
    constructor(){
        super();

        this.state = {
            result : [''],
        }
    }

    componentWillMount(){
        var res = [];
        for (let i = localStorage.length; i >= 1; i--){
            res.push(localStorage.getItem('Результат - ' + i));
        }
        this.setState({result : res});
    }

    render() {
        return(
            <div className="wrapper">
                <Output result={this.state.result}/>
                <button style={{
                    position: "fixed",
                    bottom: "0px",
                    right: "0px"
                }}><Link to={'/'}>На главную</Link></button>
            </div>
        )
    }

}

export default Results;