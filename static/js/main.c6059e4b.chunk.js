(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),l=n(1),i=n(2),s=n(4),u=n(3),m=(n(12),function(e){var t=e.click;return c.a.createElement("button",{type:"button",onClick:t},"Clock visibility")}),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={date:(new Date).toLocaleTimeString(),name:e.props.name},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.setState({date:(new Date).toLocaleTimeString()}),console.log(e.state.date)}),1e3)}},{key:"render",value:function(){var e=this.props,t=e.status,n=e.name;return this.state.name=n,t?c.a.createElement("div",null,c.a.createElement("p",null,"Name:"," ",this.state.name),c.a.createElement("p",null,"Current time: ".concat(this.state.date))):c.a.createElement("p",null,"No clocks! ")}}]),n}(c.a.Component),p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isClockVisible:!0,name:"clocks"},e.click=function(){e.setState((function(e){return{isClockVisible:!e.isClockVisible}}))},e.generateNumber=function(e){return Math.floor(Math.random()*Math.floor(e))},e.changeName=function(){var t=e.generateNumber(100);console.log("the name has changed from ".concat(e.state.name," to ").concat(t)),e.setState({name:t})},e}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"React clock"),c.a.createElement(h,{status:this.state.isClockVisible,name:this.state.name}),c.a.createElement(m,{click:this.click}),c.a.createElement("button",{type:"button",onClick:this.changeName},"Name changer"))}}]),n}(c.a.Component);o.a.render(c.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.c6059e4b.chunk.js.map