(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),o=a(1),i=a(2),s=a(4),u=a(3),m=(a(12),function(e){var t=e.click,a=e.text;return c.a.createElement("button",{type:"button",onClick:t,className:"btn btn-light"},a)}),h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={date:(new Date).toLocaleTimeString()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({date:(new Date).toLocaleTimeString()}),console.log(e.state.date)}),1e3)}},{key:"render",value:function(){var e=this.props,t=e.status,a=e.name;return c.a.createElement("div",null,c.a.createElement("p",null,"Name: ".concat(a)),t?c.a.createElement("p",null,"Current time: ".concat(this.state.date)):c.a.createElement("p",null,"No clocks!"))}}]),a}(c.a.Component),b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!0,name:100},e.click=function(){e.setState((function(e){return{isClockVisible:!e.isClockVisible}}))},e.generateNumber=function(e){return Math.floor(Math.random()*Math.floor(e))},e.changeName=function(){var t=e.generateNumber(100);console.log("the name has changed from ".concat(e.state.name," to ").concat(t)),e.setState({name:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"React clock"),c.a.createElement(h,{status:this.state.isClockVisible,name:this.state.name}),c.a.createElement("div",{className:"btn-group"},c.a.createElement(m,{click:this.click,text:"Clock visibility"}),c.a.createElement(m,{click:this.changeName,text:"Name changer"})))}}]),a}(c.a.Component);l.a.render(c.a.createElement(b,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.160d03b3.chunk.js.map