import React from 'react';
import './Test.css';

class Test extends React.Component{
    constructor(){
        super();

        this.state = {
            onClick : false,
            onConfirm : false,
            userAnswer : ""
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
        document.getElementById("prog").style.width = "" + this.props.length1 + "%";
        document.getElementById("prog").setAttribute('data-tooltip', "" + Math.round(this.props.length1) + "%")
    }

     showAnswers = () => {
        return this.props.answers.map((item, index) =>  <p key={index} onClick={(elem)=>{this.props.updateData(item)
            var style = document.getElementsByClassName('style1');
            for (var i = 0; i < style.length; i++){
                style[i].classList.remove('style1')
            }
            elem.target.setAttribute("class", "style1");
            this.setState({
                                    onClick : true,
                                    onConfirm : true,
                                    userAnswer : item
                                });
        }}><span>{String.fromCharCode(65 + index,41,32)}</span>{item}</p>);
    };

    render() {
        return (
            <div id ="all-test">
                <h3>{this.props.question}</h3>
                <div>
                    {this.showAnswers()}
                    { this.state.onClick && !this.state.onConfirm ? <button onClick={() => {
                        this.props.nextTest()
                        var div = document.getElementById("all-test");
                        var elems = div.getElementsByTagName("p");
                        for(let i=0; i<elems.length; i++) {
                            elems[i].style.pointerEvents = 'auto';
                        }
                        var style = document.getElementsByClassName('style1');
                        var style1 = document.getElementsByClassName('style2');
                        for (let i = 0; i < style.length; i++){
                            style[i].classList.remove('style1');
                        }
                        for (let i = 0; i < style1.length; i++){
                            style1[i].classList.remove('style2');
                        }
                        this.setState({onClick : false})
                    }}>Следующий вопрос
                    </button> : this.state.onClick && this.state.onConfirm ? <button onClick={ () => {
                        var style = document.getElementsByClassName('style1');
                        for (var i = 0; i < style.length; i++){
                                if (this.state.userAnswer !== this.props.rightAnswer){
                                        style[i].classList.add('style2');
                                        style[i].classList.remove('style1');
                                }
                        }
                        var div = document.getElementById("all-test");
                        var elems = div.getElementsByTagName("p");
                        for(let i=0; i<elems.length; i++) {
                            elems[i].style.pointerEvents = 'none';
                            if (elems[i].textContent === (String.fromCharCode(65 + i,41,32)) + this.props.rightAnswer){
                                elems[i].setAttribute("class", "style1");
                            }
                        }

                        this.setState({onConfirm : false})
                    }}> Подтвердить выбор </button> : null}
                </div>
                <div className='bar'>
                    <div id="prog" className="bar-item tooltip" role="progressbar" data-tooltip="50%" aria-valuemin="0" aria-valuemax="100">   </div>
                </div>
            </div>
        );
    }
}

export default Test;
