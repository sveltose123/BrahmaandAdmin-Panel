(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[65],{1822:function(e,a,t){},2384:function(e,a,t){"use strict";t.r(a);var n=t(809),s=t(51),r=t(13),l=t(14),o=t(16),c=t(15),i=t(0),m=t.n(i),d=t(1145),u=t(1146),p=t(1147),f=t(795),h=t(1149),b=t(792),g=t(793),v=t(172),y=(t(1822),t(811)),E=t(258),w=t(794),N=t(796),j=t.n(N),O=t(169),x=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler=function(e){l.setState(Object(s.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),console.log(l.state.data);var a=new FormData;a.append("name",l.state.name),a.append("email",l.state.email),a.append("password",l.state.password),a.append("cnfmPassword",l.state.cnfmPassword),null!==l.state.selectedFile&&a.append("adminimg",l.state.selectedFile,l.state.selectedName);var t,s=Object(n.a)(a.values());try{for(s.s();!(t=s.n()).done;){var r=t.value;console.log(r)}}catch(m){s.e(m)}finally{s.f()}var o,c=Object(n.a)(a.keys());try{for(c.s();!(o=c.n()).done;){var i=o.value;console.log(i)}}catch(m){c.e(m)}finally{c.f()}O.a.post("/admin/editMyProfile/6343ec888e7a479c70336029",a,{}).then((function(e){console.log(e.data.message),j()("Success!","Submitted SuccessFull!","success"),window.location.reload("/#/pages/profile")})).catch((function(e){j()("Error!","You clicked the button!","error"),console.log(e.response)}))},l.state={name:"",email:"",cnfmPassword:"",password:"",adminimg:"",selectedName:"",selectedFile:null,data:{}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;O.a.get("/admin/viewoneadmin/6343ec888e7a479c70336029").then((function(a){console.log(a),e.setState({data:a.data.data,name:a.data.data.name,email:a.data.data.email,password:a.data.data.password,cnfmPassword:a.data.data.cnfmPassword})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(w.a,{breadCrumbTitle:"Profile",breadCrumbParent:"Pages",breadCrumbActive:"Profile"}),m.a.createElement("div",{id:"user-profile"},m.a.createElement(d.a,{className:"m-0 justify-content-center"},m.a.createElement(u.a,{lg:"4",md:"4",xl:"4",sm:"12"},m.a.createElement(p.a,{className:"bg-authentication rounded-0 mb-0 w-100"},m.a.createElement("div",{className:"profile-img text-center st-1"},m.a.createElement("img",{src:this.state.data.adminimg,alt:"adminimg",className:"img-fluid img-border rounded-circle box-shadow-1",width:"150"}),m.a.createElement("ul",{className:"lst-1"},m.a.createElement("li",{className:"lst-2"},"Name:"," ",m.a.createElement("span",{className:"lst-3"},this.state.data.name)),m.a.createElement("li",{className:"lst-2"},"Email:"," ",m.a.createElement("span",{className:"lst-3"},this.state.data.email)))))),m.a.createElement(u.a,{sm:"12",xl:"8",lg:"8",md:"8",className:"d-flex justify-content-center"},m.a.createElement(p.a,{className:"bg-authentication rounded-0 mb-0 w-100"},m.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement("div",{className:"st-2"},m.a.createElement(h.a,null,m.a.createElement("h4",{className:"mb-3"},"Edit Profile"),m.a.createElement(u.a,null)),m.a.createElement(d.a,{className:"m-0"},m.a.createElement(u.a,{sm:"12",className:"p-0"},m.a.createElement(f.a,{action:"/"},m.a.createElement(b.a,null,"Name"),m.a.createElement(g.a,{type:"text",name:"name",placeholder:"Name",value:this.state.name,onChange:this.changeHandler}),m.a.createElement(b.a,null,"Email"),m.a.createElement(g.a,{type:"email",name:"email",placeholder:"email",value:this.state.email,onChange:this.changeHandler}),m.a.createElement(b.a,null,"Password"),m.a.createElement(g.a,{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.changeHandler}),m.a.createElement(b.a,null,"Confirm Password"),m.a.createElement(g.a,{type:"password",name:"cnfmPassword",placeholder:"Reset password",value:this.state.cnfmPassword,onChange:this.changeHandler}),m.a.createElement(b.a,null,"User Image"),m.a.createElement(g.a,{className:"form-control",type:"file",name:"adminimg",onChange:this.onChangeHandler}),m.a.createElement(y.a,{color:"primary",icon:m.a.createElement(E.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0}),m.a.createElement("div",{className:"d-flex justify-content-between"},m.a.createElement(v.a.Ripple,{color:"primary",type:"submit"},"Submit"))))))))))))}}]),t}(m.a.Component);a.default=x},792:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(0),l=t.n(r),o=t(1),c=t.n(o),i=t(4),m=t.n(i),d=t(3),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,c=e.tag,i=e.check,p=e.size,f=e.for,h=Object(s.a)(e,u),b=[];o.forEach((function(a,n){var s=e[a];if(delete h[a],s||""===s){var r,l=!n;if(Object(d.isObject)(s)){var o,c=l?"-":"-"+a+"-";r=g(l,a,s.size),b.push(Object(d.mapToCssModules)(m()(((o={})[r]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o))),t)}else r=g(l,a,s),b.push(r)}}));var v=Object(d.mapToCssModules)(m()(a,!!r&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,b,!!b.length&&"col-form-label"),t);return l.a.createElement(c,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=b,a.a=v},793:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(11),l=t(12),o=t(0),c=t.n(o),i=t(1),m=t.n(i),d=t(4),u=t.n(d),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,i=e.invalid,m=e.tag,d=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),E=m||("select"===r||"textarea"===r?r:"input"),w="form-control";h?(w+="-plaintext",E=m||"input"):"file"===r?w+="-file":"range"===r?w+="-range":v&&(w=d?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var N=Object(p.mapToCssModules)(u()(a,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,w),t);return("input"===E||m&&"function"===typeof m)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(E,Object(n.a)({},g,{ref:b,className:N,"aria-invalid":i}))},a}(c.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},795:function(e,a,t){"use strict";var n=t(5),s=t(9),r=t(11),l=t(12),o=t(0),c=t.n(o),i=t(1),m=t.n(i),d=t(4),u=t.n(d),p=t(3),f=["className","cssModule","inline","tag","innerRef"],h={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,o=e.innerRef,i=Object(s.a)(e,f),m=Object(p.mapToCssModules)(u()(a,!!r&&"form-inline"),t);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:m}))},a}(o.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b},809:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(90);function s(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r,l=!0,o=!1;return{s:function(){s=e[Symbol.iterator]()},n:function(){var e=s.next();return l=e.done,e},e:function(e){o=!0,r=e},f:function(){try{l||null==s.return||s.return()}finally{if(o)throw r}}}}},811:function(e,a,t){"use strict";var n=t(13),s=t(14),r=t(16),l=t(15),o=t(0),c=t.n(o),i=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},c.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),c.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},c.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),c.a.createElement("span",null,this.props.label))}}]),t}(c.a.Component);a.a=i}}]);
//# sourceMappingURL=65.cd528f29.chunk.js.map