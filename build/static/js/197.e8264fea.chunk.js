(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[197],{2323:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return H}));var n=t(51),l=t(13),r=t(14),c=t(16),m=t(15),s=t(0),i=t.n(s),o=t(1138),p=t(1139),u=t(1136),d=t(1137),E=t(1140),h=t(172),g=t(1143),y=t(795),b=t(794),f=t(792),x=t(169),v=t(56),_=t(796),S=t.n(_),N=t(1586),C=t(1587),H=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=r.props.match.params.id;x.a.post("/editScript/".concat(a),r.state,{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(e){console.log(e),S()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/brahmaand/resource/resourceList")})).catch((function(e){console.log(e)}))},r.state={script_type:"",script_name:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;x.a.get("/getone_script/".concat(a),{headers:{"auth-adtoken":localStorage.getItem("auth-adtoken")}}).then((function(a){console.log(a),e.setState({script_type:a.data.data.script_type,script_name:a.data.data.script_name})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement(p.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(u.a,{listTag:"div"},i.a.createElement(d.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(d.a,{href:"/app/brahmaand/resource/resourceList",tag:"a"},"Resource List"),i.a.createElement(d.a,{active:!0},"Edit  Resource"))))),i.a.createElement(E.a,null,i.a.createElement(o.a,{className:"m-2"},i.a.createElement(p.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Resource")),i.a.createElement(p.a,null,i.a.createElement(v.b,{render:function(e){var a=e.history;return i.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/brahmaand/resource/resourceList")}},"Back")}}))),i.a.createElement(g.a,null,i.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(o.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a,null,"Link"),i.a.createElement(f.a,{required:!0,type:"text",name:"script_name",placeholder:"Enter name",value:this.state.script_name,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(b.a,{for:"exampleSelect"},"Type"),i.a.createElement(f.a,{id:"exampleSelect",name:"script_type",type:"select",value:this.state.script_type,onChange:this.changeHandler},i.a.createElement("optgroup",{label:"Free"},i.a.createElement("option",null,"No Register Required"),i.a.createElement("option",null,"Register Required")),i.a.createElement("optgroup",{label:"Paid"},i.a.createElement("option",null,"Paid")))),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(b.a,{for:"exampleSelect"},"Format"),i.a.createElement(f.a,{id:"exampleSelect",name:"script_type",type:"select",value:this.state.script_type,onChange:this.changeHandler},i.a.createElement("option",null,"Video"),i.a.createElement("option",null,"Text"),i.a.createElement("option",null,"Video and Text"))),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(b.a,{for:"exampleSelect"},"Level"),i.a.createElement(f.a,{id:"exampleSelect",name:"script_type",type:"select",value:this.state.script_type,onChange:this.changeHandler},i.a.createElement("option",null,"Beginner"),i.a.createElement("option",null,"Advanced"))),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(b.a,{for:"exampleSelect"},"Language"),i.a.createElement(f.a,{id:"exampleSelect",name:"script_type",type:"select",value:this.state.script_type,onChange:this.changeHandler},i.a.createElement("option",null,"1"),i.a.createElement("option",null,"2"),i.a.createElement("option",null,"3"))),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a,null,"Topic"),i.a.createElement(f.a,{required:!0,type:"text",name:"script_name",placeholder:"",value:this.state.script_name,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a,null,"Descripition"),i.a.createElement(f.a,{required:!0,type:"text",name:"script_name",placeholder:"",value:this.state.script_name,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",className:"d-flex justify-content"},i.a.createElement(b.a,null,"Optional"),i.a.createElement(N.a,{defaultActiveKey:"0"},i.a.createElement(N.a.Item,{eventKey:"0"},i.a.createElement(p.a,{lg:"12",className:"d-flex justify-content-end align-items-end"},i.a.createElement(N.a.Button,{style:{paddingLeft:"490px",paddingRight:"40px",marginLeft:"-70px",marginTop:"22px",height:"36px",backgroundColor:"white",borderRadius:"0.5rem",border:"1px solid #d9d9d9"}},i.a.createElement(C.a,null))),i.a.createElement(N.a.Body,null,i.a.createElement(y.a,{style:{marginLeft:"-55px",marginRight:"16px"}}," ",i.a.createElement(b.a,null,"Title"),i.a.createElement(f.a,{type:"text",name:"Title",placeholder:"Enter Title"}),i.a.createElement(b.a,null,"Creator Name"),i.a.createElement(f.a,{type:"text"}),i.a.createElement(b.a,null,"Release Year"),i.a.createElement(f.a,{id:"exampleSelect",name:"script_type",type:"select",value:this.state.script_type,onChange:this.changeHandler},i.a.createElement("option",null,"1"),i.a.createElement("option",null,"2"),i.a.createElement("option",null,"3")),i.a.createElement(b.a,null,"Descripition"),i.a.createElement(f.a,{type:"text"}),i.a.createElement(b.a,null,"Comments"),i.a.createElement(f.a,{type:"text"}))))))),i.a.createElement(o.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(s.Component)}}]);
//# sourceMappingURL=197.e8264fea.chunk.js.map