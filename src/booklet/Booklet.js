import React from 'react';
import './Booklet.css';
import data from '../test.json';
import Test from '../test/Test';
import Result from '../result/Result';

class Booklet extends React.Component {
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
    }

    componentWillMount(){
        let questions = [];
        for (let i = 0; i < data.length; i++){
            for (let j = 0; j < Math.floor( data[i].questions.length * 0.232); j++){
                let k = Math.floor(data[i].questions.length*Math.random());
                questions.push(data[i].questions[k]);
            }
        }
        for ( let i = questions.length-1; i>=0; i--) {
            let t = questions[i],
                j = Math.floor(questions.length*Math.random());
            questions[i] = questions[j];
            questions[j] = t;
        }
        console.log(questions);
        this.setState({arrayQuestions : questions});

    }

    render() {
        return this.state.index < this.state.arrayQuestions.length ?
            < Test question={this.state.arrayQuestions[this.state.index].question} answers={this.state.arrayQuestions[this.state.index].answers} rightAnswer={this.state.arrayQuestions[this.state.index].rigthAnswer} length1={this.state.progress} updateData={this.updateData} nextTest={this.nextTest}/> :
            < Result sum={this.state.sum} arrayRightAnswer={this.state.arrayRightAnswer} time={this.state.date} repeatTest={this.repeatTest}/>;
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
        this.setState({progress : ((1/this.state.arrayQuestions.length)*100)})
        this.setState({date : new Date()})
    }

    nextTest = () => {
        this.setState(prevState => ({
            arrayAnswer: [...prevState.arrayAnswer, this.state.userAnswer.trim()]
        }));
        this.setState(prevState => ({
            arrayRightAnswer: [...prevState.arrayRightAnswer, this.state.arrayQuestions[this.state.index].rigthAnswer.trim()]
        }));
        if (this.state.userAnswer.trim() === this.state.arrayQuestions[this.state.index].rigthAnswer.trim()) this.setState ({sum : this.state.sum + 1});
        this.setState({index : this.state.index + 1});
        this.setState({progress : (((this.state.index + 2)/this.state.arrayQuestions.length)*100)})
    }
}

export default Booklet;