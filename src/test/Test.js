import React from 'react';
import './Test.css';

class Test extends React.Component{
    constructor(){
        super();

        this.state = {
            onClick : false
        }
    }


     componentWillMount(){
         for ( var i = this.props.answers.length-1; i>0; i--) {
             var t = this.props.answers[i],
                 j = Math.floor(i*Math.random());
             this.props.answers[i] = this.props.answers[j];
             this.props.answers[j] = t;
         }
     }

    componentWillUpdate(nextProps) {
        if (this.props.answers !== nextProps.answers) {
            for ( var i = nextProps.answers.length-1; i>0; i--) {
                var t = nextProps.answers[i],
                    j = Math.floor(i*Math.random());
                nextProps.answers[i] = nextProps.answers[j];
                nextProps.answers[j] = t;
            }
        }
    }

     showAnswers = () => {
        return this.props.answers.map((item, index) =>  <p key={index} onClick={(elem)=>{this.props.updateData(item)
            var style = document.getElementsByClassName('style1');
            for (var i = 0; i < style.length; i++){
                style[i].classList.remove('style1')
            }
            elem.target.setAttribute("class", "style1");
            this.setState({onClick : true});
        }}><span>{String.fromCharCode(65 + index,41,32)}</span>{item}</p>);
    };

    render() {
        return (
            <div className="all-test">
                <h3>{this.props.question}</h3>
                <div>
                    {this.showAnswers()}
                    { this.state.onClick ? <button onClick={() => {
                        this.props.nextTest()
                        var style = document.getElementsByClassName('style1');
                        for (var i = 0; i < style.length; i++){
                            style[i].classList.remove('style1')
                        }
                        this.setState({onClick : false})
                    }}>Следующий вопрос
                    </button> : null}
                </div>
            </div>
        );
    }
}

export default Test;
