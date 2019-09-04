import React from 'react';
import './App.css';
import data from '../test.json';
import Test from '../test/Test';
import Result from '../result/Result';

class App extends React.Component {
    constructor(props){
       super(props);

       this.state = {
           index : 0,
           arrayAnswer : [],
           arrayRightAnswer : [],
           arrayQuestions : [],
           userAnswer : "",
           sum : 0,
           date : null,
           progress : 0
       }
    }

    componentDidMount() {
        this.setState({date : new Date()});
        this.setState({progress : (((this.state.index + 1)/this.state.arrayQuestions.length)*100)});
        console.log(this.props.match)
    }

    componentWillMount(){
        var questions = data[this.props.match.params.id].questions;
        for ( var i = questions.length; i-->0;) {
            var t = questions[i],
                j = Math.floor(i*Math.random());
            questions[i] = questions[j];
            questions[j] = t;
        }
        this.setState({arrayQuestions : questions});

    }

    render() {
        return this.state.index < this.state.arrayQuestions.length ?
            < Test question={this.state.arrayQuestions[this.state.index].question} answers={this.state.arrayQuestions[this.state.index].answers} rightAnswer={data[this.props.match.params.id].questions[this.state.index].rigthAnswer} length1={this.state.progress} updateData={this.updateData} nextTest={this.nextTest}/> :
            < Result sum={this.state.sum} arrayRightAnswer={this.state.arrayRightAnswer} time={this.state.date} repeatTest={this.repeatTest} theme={data[this.props.match.params.id].theme}/>;
    }

    updateData = (value) => {
        this.setState({userAnswer : value});
    };

    repeatTest = () => {
        this.setState({
                                index : 0,
                                arrayAnswer : [],
                                arrayRightAnswer : [],
                                userAnswer : "",
                                sum : 0,
                                date : null
                            })
        this.setState({date : new Date()})
    }

    nextTest = () => {
        this.setState(prevState => ({
            arrayAnswer: [...prevState.arrayAnswer, this.state.userAnswer]
        }));
        this.setState(prevState => ({
            arrayRightAnswer: [...prevState.arrayRightAnswer, data[this.props.match.params.id].questions[this.state.index].rigthAnswer]
        }));
        if (this.state.userAnswer === data[this.props.match.params.id].questions[this.state.index].rigthAnswer) this.setState ({sum : this.state.sum + 1})
        this.setState({index : this.state.index + 1});
        this.setState({progress : (((this.state.index + 2)/this.state.arrayQuestions.length)*100)})
    }
}

export default App;
