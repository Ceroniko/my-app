(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(37)},30:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(22),o=n.n(r);n(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(2),l=n(6);function u(e){return s.a.createElement("div",{className:"Home-page"},s.a.createElement("button",null,s.a.createElement(i.b,{to:"/testing",className:"greeting-button"},"\u041d\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c \u0442\u0435\u0441\u0442\u044b!")),s.a.createElement("button",null,s.a.createElement(i.b,{to:"/results",className:"greeting-button"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0432\u043e\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b")))}var c=n(7),m=function(){return s.a.createElement("div",{className:"allTest"},s.a.createElement("p",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0435\u043c\u0443"),s.a.createElement("div",null,c.map(function(e,t){return s.a.createElement(i.b,{key:t,to:"/testing/".concat(t)},e.theme)})))},h=n(18),p=n(8),g=n(9),w=n(11),d=n(10),f=n(12),E=(n(35),n(36),function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(w.a)(this,Object(d.a)(t).call(this))).showAnswers=function(){return e.props.answers.map(function(t,n){return s.a.createElement("p",{key:n,onClick:function(n){e.props.updateData(t);for(var a=document.getElementsByClassName("style1"),s=0;s<a.length;s++)a[s].classList.remove("style1");n.target.setAttribute("class","style1"),e.setState({onClick:!0,onConfirm:!0,userAnswer:t})}},s.a.createElement("span",null,String.fromCharCode(65+n,41,32)),t)})},e.state={onClick:!1,onConfirm:!1,userAnswer:""},e}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentWillMount",value:function(){for(var e=this.props.answers.length-1;e>0;e--){var t=this.props.answers[e],n=Math.floor(e*Math.random());this.props.answers[e]=this.props.answers[n],this.props.answers[n]=t}console.log(this.props.rightAnswer)}},{key:"componentWillUpdate",value:function(e){if(this.props.answers!==e.answers)for(var t=e.answers.length-1;t>0;t--){var n=e.answers[t],a=Math.floor(t*Math.random());e.answers[t]=e.answers[a],e.answers[a]=n}}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"all-test"},s.a.createElement("h3",null,this.props.question),s.a.createElement("div",null,this.showAnswers(),this.state.onClick&&!this.state.onConfirm?s.a.createElement("button",{onClick:function(){e.props.nextTest();for(var t=document.getElementById("all-test").getElementsByTagName("p"),n=0;n<t.length;n++)t[n].style.pointerEvents="auto";for(var a=document.getElementsByClassName("style1"),s=document.getElementsByClassName("style2"),r=0;r<a.length;r++)a[r].classList.remove("style1");for(var o=0;o<s.length;o++)s[o].classList.remove("style2");e.setState({onClick:!1})}},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0432\u043e\u043f\u0440\u043e\u0441"):this.state.onClick&&this.state.onConfirm?s.a.createElement("button",{onClick:function(){for(var t=document.getElementsByClassName("style1"),n=0;n<t.length;n++)e.state.userAnswer!==e.props.rightAnswer&&(t[n].classList.add("style2"),t[n].classList.remove("style1"));for(var a=document.getElementById("all-test").getElementsByTagName("p"),s=0;s<a.length;s++)a[s].style.pointerEvents="none",a[s].textContent===String.fromCharCode(65+s,41,32)+e.props.rightAnswer&&a[s].setAttribute("class","style1");e.setState({onConfirm:!1})}}," \u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440 "):null))}}]),t}(s.a.Component));function y(e){localStorage.setItem("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 - "+(localStorage.length+1),[100*e.sum/e.arrayRightAnswer.length,(new Date).toLocaleString("ru",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),e.theme]);var t=new Date;t-=e.time;var n=new Date;n.setTime(-108e5+t);return s.a.createElement("div",{className:"result"},s.a.createElement("p",null,"\u0412\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u043b\u0438 \u043d\u0430 ",e.sum," ",e.sum>=11&&e.sum<=19?"\u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432":e.sum%10===0||e.sum%10>=5&&e.sum%10<=9?"\u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432":e.sum%10>=2&&e.sum%10<=4?"\u0432\u043e\u043f\u0440\u043e\u0441\u0430":"\u0432\u043e\u043f\u0440\u043e\u0441"," \u0438\u0437 ",e.arrayRightAnswer.length," "),100*e.sum/e.arrayRightAnswer.length>55.5?s.a.createElement("p",null,"\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c! \u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u0434\u0430\u043b\u0438 \u0442\u0435\u0441\u0442, \u0438 \u043d\u0430\u0431\u0440\u0430\u043b\u0438 ",100*e.sum/e.arrayRightAnswer.length,"%"):s.a.createElement("p",null,"\u0412\u044b \u043d\u0435 \u0441\u043f\u0440\u0430\u0432\u0438\u043b\u0438\u0441\u044c, \u0438 \u043d\u0430\u0431\u0440\u0430\u043b\u0438 \u0432\u0441\u0435\u0433\u043e ",100*e.sum/e.arrayRightAnswer.length,"%."),s.a.createElement("p",null,"\u0412\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u0430: ",n.toLocaleString("ru",{hour:"numeric",minute:"numeric",second:"numeric"})),s.a.createElement("button",null,s.a.createElement(i.b,{to:"/testing",className:"greeting-button"},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0442\u0435\u043c\u0443 \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f")),s.a.createElement("button",null,s.a.createElement(i.b,{to:"/",className:"greeting-button"},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")),s.a.createElement("button",{onClick:function(){e.repeatTest()}},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442 \u0435\u0449\u0435 \u0440\u0430\u0437"),s.a.createElement("button",null,s.a.createElement(i.b,{to:"/results",className:"greeting-button"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b")))}var v=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(w.a)(this,Object(d.a)(t).call(this,e))).updateData=function(e){n.setState({userAnswer:e})},n.repeatTest=function(){n.setState({index:0,arrayAnswer:[],arrayRightAnswer:[],userAnswer:"",sum:0,date:null}),n.setState({date:new Date})},n.nextTest=function(){n.setState(function(e){return{arrayAnswer:[].concat(Object(h.a)(e.arrayAnswer),[n.state.userAnswer])}}),n.setState(function(e){return{arrayRightAnswer:[].concat(Object(h.a)(e.arrayRightAnswer),[c[n.props.match.params.id].questions[n.state.index].rigthAnswer])}}),n.state.userAnswer===c[n.props.match.params.id].questions[n.state.index].rigthAnswer&&n.setState({sum:n.state.sum+1}),n.setState({index:n.state.index+1})},n.state={index:0,arrayAnswer:[],arrayRightAnswer:[],arrayQuestions:[],userAnswer:"",sum:0,date:null},n}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.setState({date:new Date})}},{key:"componentWillMount",value:function(){for(var e=c[this.props.match.params.id].questions,t=e.length;t-- >0;){var n=e[t],a=Math.floor(t*Math.random());e[t]=e[a],e[a]=n}this.setState({arrayQuestions:e})}},{key:"render",value:function(){return this.state.index<this.state.arrayQuestions.length?s.a.createElement(E,{question:this.state.arrayQuestions[this.state.index].question,answers:this.state.arrayQuestions[this.state.index].answers,rightAnswer:c[this.props.match.params.id].questions[this.state.index].rigthAnswer,updateData:this.updateData,nextTest:this.nextTest}):s.a.createElement(y,{sum:this.state.sum,arrayRightAnswer:this.state.arrayRightAnswer,time:this.state.date,repeatTest:this.repeatTest,theme:c[this.props.match.params.id].theme})}}]),t}(s.a.Component);function b(e){return e.result.map(function(e,t){var n=e.split(",");return s.a.createElement("div",{className:"result",key:t},s.a.createElement("p",null,n[3]),s.a.createElement("p",null,n[0]),s.a.createElement("p",null,n[1]+n[2]),s.a.createElement("p",{style:{width:"100%",borderBottom:"1px solid black"}}," "))})}var A=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(w.a)(this,Object(d.a)(t).call(this))).state={result:[""]},e}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentWillMount",value:function(){for(var e=[],t=localStorage.length;t>=1;t--)e.push(localStorage.getItem("\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 - "+t));this.setState({result:e})}},{key:"render",value:function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement(b,{result:this.state.result}),s.a.createElement("button",null,s.a.createElement(i.b,{to:"/"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")))}}]),t}(s.a.Component),C=function(){return s.a.createElement(i.a,null,s.a.createElement("div",{id:"router-wrapper"},s.a.createElement(l.c,null,s.a.createElement(l.a,{exact:!0,path:"/",component:u}),s.a.createElement(l.a,{exact:!0,path:"/testing/:id",component:v}),s.a.createElement(l.a,{path:"/testing",component:m}),s.a.createElement(l.a,{path:"/results",component:A}))))};o.a.render(s.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e){e.exports=[{theme:"\u041f\u0430\u0442\u043e\u043c\u043e\u0440\u0444\u043e\u043b\u043e\u0433\u0456\u044f",number:0,questions:[{question:"\u0423 \u0445\u0432\u043e\u0440\u043e\u0433\u043e \u043f\u0440\u0438 \u0433\u0430\u0441\u0442\u0440\u043e\u0441\u043a\u043e\u043fi\u0457 \u0432\u0438\u044f\u0432\u043b\u0435\u043d\u0430 \u0432\u0438\u0440\u0430\u0437\u043a\u0430 \u0441\u043b\u0438\u0437\u043e\u0432\u043e\u0457 \u043e\u0431\u043e\u043b\u043e\u043d\u043a\u0438 \u0448\u043b\u0443\u043d\u043a\u0430 \u0437 \u0448\u0442\u0430\u043c\u043f\u043e\u0432\u0430\u043d\u0438\u043c\u0438 \u043a\u0440\u0430\u044f\u043c\u0438 i \u0431\u0443\u0440\u043e-\u0447\u043e\u0440\u043d\u0438\u043c \u0434\u043d\u043e\u043c, \u0430 \u043f\u0440\u0438 \u0433\u0430\u0441\u0442\u0440\u043e\u0431i\u043e\u043f\u0441i\u0457 \u043fi\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043e \u0433\u043e\u0441\u0442\u0440\u0443 \u0432\u0438\u0440\u0430\u0437\u043a\u0443 \u0437 \u043a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u043e-\u0447\u043e\u0440\u043d\u0438\u043c \u043fi\u0433\u043c\u0435\u043d\u0442\u043e\u043c \u0432 \u0457\u0457 \u043d\u0435\u043a\u0440\u043e\u0442\u0438\u0447\u043d\u043e\u043c\u0443 \u0448\u0430\u0440i. \u042f\u043a\u0438\u0439 \u0446\u0435 \u043fi\u0433\u043c\u0435\u043d\u0442?  ",answers:["\u0421\u043e\u043b\u044f\u043d\u043e\u043a\u0438\u0441\u043b\u0438\u0439 \u0433\u0435\u043c\u0430\u0442\u0438\u043d","\u0413\u0435\u043c\u043e\u0441\u0438\u0434\u0435\u0440\u0438\u043d","\u0411i\u043bi\u0440\u0443\u0431i\u043d","\u0411i\u043bi\u0440\u0443\u0431i\u043d","\u041f\u043e\u0440\u0444i\u0440\u0438\u043d"],rigthAnswer:"\u0421\u043e\u043b\u044f\u043d\u043e\u043a\u0438\u0441\u043b\u0438\u0439 \u0433\u0435\u043c\u0430\u0442\u0438\u043d"},{question:"\u041d\u0430 \u0440\u043e\u0437\u0442\u0438\u043d\u0456 \u0436\u0456\u043d\u043a\u0438 \u0432\u0456\u043a\u043e\u043c 63 \u0440\u043e\u043a\u0438, \u044f\u043a\u0430 \u0445\u0432\u043e\u0440\u0456\u043b\u0430 \u043d\u0430 \u0440\u0435\u0432\u043c\u0430\u0442\u0438\u0447\u043d\u0443 \u0445\u0432\u043e\u0440\u043e\u0431\u0443 \u0437 \u0440\u043e\u0437\u0432\u0438\u0442\u043a\u043e\u043c \u043a\u043e\u043c\u0431\u0456\u043d\u043e\u0432\u0430\u043d\u043e\u0457 \u0432\u0430\u0434\u0438 \u043c\u0456\u0442\u0440\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u043f\u0430\u043d\u0430, \u0432\u0438\u044f\u0432\u043b\u0435\u043d\u043e \u0437\u043c\u0456\u043d\u0438 \u0443 \u0441\u0442\u0443\u043b\u043a\u0430\u0445 \u043a\u043b\u0430\u043f\u0430\u043d\u0430, \u044f\u043a\u0456 \u0440\u0456\u0437\u043a\u043e \u043f\u043e\u0442\u043e\u0432\u0449\u0435\u043d\u0456, \u0441\u043f\u0430\u044f\u043d\u0456 \u043c\u0456\u0436 \u0441\u043e\u0431\u043e\u044e, \u0449\u0456\u043b\u044c\u043d\u0456, \u043f\u0440\u0438 \u0457\u0445 \u0440\u043e\u0437\u0440\u0456\u0437\u0443\u0432\u0430\u043d\u043d\u0456 \u0447\u0443\u0442\u0438 \u0445\u0440\u0443\u0441\u0442. \u042f\u043a\u0438\u0439 \u043f\u0430\u0442\u043e\u043b\u043e\u0433\u0456\u0447\u043d\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u0441 \u0437\u0443\u043c\u043e\u0432\u0438\u0432 \u043a\u0430\u043c\u2019\u044f\u043d\u0438\u0441\u0442\u0443 \u0449\u0456\u043b\u044c\u043d\u0456\u0441\u0442\u044c \u043a\u043b\u0430\u043f\u0430\u043d\u0430 \u0441\u0435\u0440\u0446\u044f?",answers:["\u0414\u0438\u0441\u0442\u0440\u043e\u0444\u0456\u0447\u043d\u0435 \u0437\u0432\u0430\u043f\u043d\u0456\u043d\u043d\u044f","\u041c\u0435\u0442\u0430\u0441\u0442\u0430\u0442\u0438\u0447\u043d\u0435 \u0437\u0432\u0430\u043f\u043d\u0456\u043d\u043d\u044f","\u041c\u0435\u0442\u0430\u0431\u043e\u043b\u0456\u0447\u043d\u0435 \u0437\u0432\u0430\u043f\u043d\u0456\u043d\u043d\u044f","\u0410\u043c\u0456\u043b\u043e\u0457\u0434\u043e\u0437","\u0413\u0456\u0430\u043b\u0456\u043d\u043e\u0437"],rigthAnswer:"\u0414\u0438\u0441\u0442\u0440\u043e\u0444\u0456\u0447\u043d\u0435 \u0437\u0432\u0430\u043f\u043d\u0456\u043d\u043d\u044f"},{question:"\u041d\u0430 \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u043d\u044f \u0432\u043f\u043b\u0438\u0432\u0430\u044e\u0442\u044c \u0440\u0456\u0437\u043d\u0456 \u0433\u0440\u0443\u043f\u0438 \u0447\u0438\u043d\u043d\u0438\u043a\u0456\u0432. \u042f\u043a\u0438\u0439 \u043e\u0441\u043d\u043e\u0432\u043d\u0438\u0439 \u043c\u0435\u0442\u043e\u0434 \u0441\u043e\u0446\u0456\u0430\u043b\u044c\u043d\u043e\u0457 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0438, \u0449\u043e \u0441\u0442\u043e\u0441\u0443\u0454\u0442\u044c\u0441\u044f \u043f\u0456\u0434\u0432\u0438\u0449\u0435\u043d\u043d\u044f \u0440\u0456\u0432\u043d\u044f \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f \u0456 \u0439\u043e\u0433\u043e \u043e\u0445\u043e\u0440\u043e\u043d\u0438, \u0431\u0443\u0434\u0435 \u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448 \u0434\u043e\u0446\u0456\u043b\u044c\u043d\u0438\u043c \u0434\u043b\u044f \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f?",answers:["\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u043d\u0438\u0439","\u0415\u043a\u043e\u043d\u043e\u043c\u0456\u0447\u043d\u0438\u0439","\u0421\u043e\u0446\u0456\u043e\u043b\u043e\u0433\u0456\u0447\u043d\u0438\u0439","\u0415\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u0438\u0439","\u0415\u043a\u0441\u043f\u0435\u0440\u0442\u0438\u0437\u0438"],rigthAnswer:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u043d\u0438\u0439"},{question:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0438\u0439 \u0440\u0456\u0432\u0435\u043d\u044c \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f \u0434\u0456\u0442\u0435\u0439 \u0440\u0430\u043d\u043d\u044c\u043e\u0433\u043e \u0432\u0456\u043a\u0443 \u0432\u0438\u0437\u043d\u0430\u0447\u0430\u044e\u0442\u044c \u0440\u0456\u0437\u043d\u0456 \u0447\u0438\u043d\u043d\u0438\u043a\u0438, \u044f\u043a\u0456 \u0444\u043e\u0440\u043c\u0443\u044e\u0442\u044c\u0441\u044f \u0432\u043f\u0440\u043e\u0434\u043e\u0432\u0436 \u0434\u0430\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443. \u042f\u043a\u0438\u0439 \u0437 \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u0456\u0432 \u0454 \u043d\u0430\u0439\u0432\u0430\u0436\u043b\u0438\u0432\u0456\u0448\u0438\u0439?",answers:["\u0424\u0456\u0437\u0438\u0447\u043d\u0438\u0439 \u0440\u043e\u0437\u0432\u0438\u0442\u043e\u043a","\u0406\u043d\u0442\u0435\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0438\u0439 \u0440\u043e\u0437\u0432\u0438\u0442\u043e\u043a","\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043d\u043d\u044f","\u0417\u0430\u043d\u044f\u0442\u0442\u044f \u0441\u043f\u043e\u0440\u0442\u043e\u043c"],rigthAnswer:"\u0424\u0456\u0437\u0438\u0447\u043d\u0438\u0439 \u0440\u043e\u0437\u0432\u0438\u0442\u043e\u043a"}]},{theme:"\u0421\u043e\u0446\u0456\u0430\u043b\u044c\u043d\u0430 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0430",number:1,questions:[{question:"\u041d\u0430 \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u043d\u044f \u0432\u043f\u043b\u0438\u0432\u0430\u044e\u0442\u044c \u0440\u0456\u0437\u043d\u0456 \u0433\u0440\u0443\u043f\u0438 \u0447\u0438\u043d\u043d\u0438\u043a\u0456\u0432. \u042f\u043a\u0438\u0439 \u043e\u0441\u043d\u043e\u0432\u043d\u0438\u0439 \u043c\u0435\u0442\u043e\u0434 \u0441\u043e\u0446\u0456\u0430\u043b\u044c\u043d\u043e\u0457 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0438, \u0449\u043e \u0441\u0442\u043e\u0441\u0443\u0454\u0442\u044c\u0441\u044f \u043f\u0456\u0434\u0432\u0438\u0449\u0435\u043d\u043d\u044f \u0440\u0456\u0432\u043d\u044f \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f \u0456 \u0439\u043e\u0433\u043e \u043e\u0445\u043e\u0440\u043e\u043d\u0438, \u0431\u0443\u0434\u0435 \u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448 \u0434\u043e\u0446\u0456\u043b\u044c\u043d\u0438\u043c \u0434\u043b\u044f \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f?",answers:["\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u043d\u0438\u0439","\u0415\u043a\u043e\u043d\u043e\u043c\u0456\u0447\u043d\u0438\u0439","\u0421\u043e\u0446\u0456\u043e\u043b\u043e\u0433\u0456\u0447\u043d\u0438\u0439","\u0415\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u0438\u0439","\u0415\u043a\u0441\u043f\u0435\u0440\u0442\u0438\u0437\u0438"],rigthAnswer:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u043d\u0438\u0439"},{question:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0438\u0439 \u0440\u0456\u0432\u0435\u043d\u044c \u0437\u0434\u043e\u0440\u043e\u0432\u2019\u044f \u0434\u0456\u0442\u0435\u0439 \u0440\u0430\u043d\u043d\u044c\u043e\u0433\u043e \u0432\u0456\u043a\u0443 \u0432\u0438\u0437\u043d\u0430\u0447\u0430\u044e\u0442\u044c \u0440\u0456\u0437\u043d\u0456 \u0447\u0438\u043d\u043d\u0438\u043a\u0438, \u044f\u043a\u0456 \u0444\u043e\u0440\u043c\u0443\u044e\u0442\u044c\u0441\u044f \u0432\u043f\u0440\u043e\u0434\u043e\u0432\u0436 \u0434\u0430\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443. \u042f\u043a\u0438\u0439 \u0437 \u043f\u043e\u043a\u0430\u0437\u043d\u0438\u043a\u0456\u0432 \u0454 \u043d\u0430\u0439\u0432\u0430\u0436\u043b\u0438\u0432\u0456\u0448\u0438\u0439?",answers:["\u0424\u0456\u0437\u0438\u0447\u043d\u0438\u0439 \u0440\u043e\u0437\u0432\u0438\u0442\u043e\u043a","\u0406\u043d\u0442\u0435\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0438\u0439 \u0440\u043e\u0437\u0432\u0438\u0442\u043e\u043a","\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0435 \u0445\u0430\u0440\u0447\u0443\u0432\u0430\u043d\u043d\u044f","\u0417\u0430\u043d\u044f\u0442\u0442\u044f \u0441\u043f\u043e\u0440\u0442\u043e\u043c"],rigthAnswer:"\u0424\u0456\u0437\u0438\u0447\u043d\u0438\u0439 \u0440\u043e\u0437\u0432\u0438\u0442\u043e\u043a"}]}]}},[[25,1,2]]]);
//# sourceMappingURL=main.f2216c86.chunk.js.map