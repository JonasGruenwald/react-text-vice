(this["webpackJsonpreact-text-vice-example"]=this["webpackJsonpreact-text-vice-example"]||[]).push([[0],{12:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),l=a(3),c=a.n(l),o=a(4),i=a(1),r=a.n(i);class h extends n.a.Component{constructor(t){super(t),this.state={viewBox:"0 0 1000 1000"},this.textEl=n.a.createRef()}componentDidUpdate(t){String(t.children)!==String(this.props.children)&&this.calculateBox()}componentDidMount(){this.calculateBox()}calculateBox(){const t=this.textEl.current.getBBox();this.setState({viewBox:"".concat(t.x," ").concat(t.y," ").concat(t.width," ").concat(t.height)},()=>{this.props.onFit&&this.props.onFit(this.state.viewBox)})}render(){const t=this.props,e=t.children,a=t.textStyle,s=t.svgStyle,l=t.textClassName,c=t.svgClassName,i=t.font,r=Object(o.a)({},a);return i&&(r.fontFamily=i),n.a.createElement("svg",{className:c,style:s,viewBox:this.state.viewBox},n.a.createElement("text",{x:0,y:0,style:r,className:l,ref:this.textEl},e))}}h.propTypes={children:r.a.node,textStyle:r.a.Object,svgStyle:r.a.Object,textClassName:r.a.Object,svgClassName:r.a.Object,font:r.a.string,onFit:r.a.func},h.defaultProps={children:null,textStyle:{},svgStyle:{},textClassName:null,svgClassName:null,font:null,onFit:null};var x=h;class p extends n.a.Component{constructor(t){super(t),this.handleTextChange=({target:t})=>{this.setState({text:t.value})},this.state={text:"Hello there!"}}render(){const t=this.state.text;return n.a.createElement("div",{style:{fontFamily:"sans-serif"}},n.a.createElement("div",null,"This text will scale too container width"),n.a.createElement(x,{font:"Times New Roman, serif"},t),n.a.createElement("div",null,"Change Text"),n.a.createElement("input",{type:"text",onChange:this.handleTextChange,value:t}))}}var u=p;c.a.render(n.a.createElement(u,null),document.getElementById("root"))},5:function(t,e,a){t.exports=a(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.42502c20.chunk.js.map