(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[47],{2335:function(e,a,t){e.exports=t.p+"static/media/register.23d1bae7.jpg"},2563:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(14),s=t(16),l=t(15),c=t(0),o=t.n(c),i=t(1145),u=t(1146),p=t(1147),m=t(1148),d=t(1149),f=t(804),b=t(781),h=t(1150),g=t(806),v=t(807),E=t(795),y=t(805),j=t(793),N=t(792),O=t(172),T=t(810),w=t(258),x=t(26),C=t(46),k=t(27),P=(t(571),t(572),t(41)),R=t.n(P),M=t(201);C.apps.length||C.initializeApp(M.a);var z=C.auth(),I=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={email:"",password:"",name:"",confirmPass:""},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithFirebase(e.state.email,e.state.password,e.state.name)},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(E.a,{onSubmit:this.handleRegister},o.a.createElement(y.a,{className:"form-label-group"},o.a.createElement(j.a,{type:"text",placeholder:"Name",required:!0,value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})}}),o.a.createElement(N.a,null,"Name")),o.a.createElement(y.a,{className:"form-label-group"},o.a.createElement(j.a,{type:"text",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),o.a.createElement(N.a,null,"Email")),o.a.createElement(y.a,{className:"form-label-group"},o.a.createElement(j.a,{type:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),o.a.createElement(N.a,null,"Password")),o.a.createElement(y.a,{className:"form-label-group"},o.a.createElement(j.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}),o.a.createElement(N.a,null,"Confirm Password")),o.a.createElement(y.a,null,o.a.createElement(T.a,{color:"primary",icon:o.a.createElement(w.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement(O.a.Ripple,{onClick:function(){return k.a.push("/pages/login")},color:"primary",outline:!0},"Login"),o.a.createElement(O.a.Ripple,{color:"primary",type:"submit"},"Register")))}}]),t}(o.a.Component),S=Object(x.b)((function(e){return{values:e.auth.register}}),{signupWithFirebase:function(e,a,t){return function(n){var r=null;z.createUserWithEmailAndPassword(e,a).then((function(e){z.onAuthStateChanged((function(a){e.user.updateProfile({displayName:t}),a&&(r=a.email,n({type:"SIGNUP_WITH_EMAIL",payload:{email:r,name:t,isSignedIn:!0}}),n({type:"LOGIN_WITH_EMAIL",payload:{email:r,name:t}}))})),k.a.push("/")})).catch((function(e){console.log(e.message)}))}}})(I),W=t(84),A=function(e){var a=Object(W.b)(),t=a.isAuthenticated,n=a.loginWithRedirect;return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{className:"pt-1 pb-3"},o.a.createElement(O.a.Ripple,{color:"primary",className:"mt-1",onClick:function(e){e.preventDefault(),t?console.log("Already Logged In"):n()}},"Register With Auth0")))},q=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={email:"",password:"",name:"",confirmPass:""},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithJWT(e.state.email,e.state.password,e.state.name)},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(E.a,{action:"/",onSubmit:this.handleRegister},o.a.createElement(y.a,{className:"form-label-group"},o.a.createElement(j.a,{type:"text",placeholder:"Name",required:!0,value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})}}),o.a.createElement(N.a,null,"Name")),o.a.createElement(y.a,{className:"form-label-group"},o.a.createElement(j.a,{type:"email",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),o.a.createElement(N.a,null,"Email")),o.a.createElement(y.a,{className:"form-label-group"},o.a.createElement(j.a,{type:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),o.a.createElement(N.a,null,"Password")),o.a.createElement(y.a,{className:"form-label-group"},o.a.createElement(j.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}),o.a.createElement(N.a,null,"Confirm Password")),o.a.createElement(y.a,null,o.a.createElement(T.a,{color:"primary",icon:o.a.createElement(w.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement(O.a.Ripple,{color:"primary",outline:!0,onClick:function(){k.a.push("/pages/login")}},"Login"),o.a.createElement(O.a.Ripple,{color:"primary",type:"submit"},"Register")))}}]),t}(o.a.Component),L=Object(x.b)((function(e){return{values:e.auth.register}}),{signupWithJWT:function(e,a,t){return function(n){R.a.post("/api/authenticate/register/user",{email:e,password:a,name:t}).then((function(e){var a;e.data&&(a=e.data.user,localStorage.setItem("token",e.data.token),n({type:"LOGIN_WITH_JWT",payload:{loggedInUser:a,loggedInWith:"jwt"}}),k.a.push("/"))})).catch((function(e){return console.log(e)}))}}})(q),F=t(2335),_=t.n(F),D=(t(882),function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(e=a.call.apply(a,[this].concat(s))).state={activeTab:"1"},e.toggle=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(i.a,{className:"m-0 justify-content-center"},o.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},o.a.createElement(p.a,{className:"bg-authentication rounded-0 mb-0 w-100"},o.a.createElement(i.a,{className:"m-0"},o.a.createElement(u.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-1 py-0"},o.a.createElement("img",{className:"mr-1",src:_.a,alt:"registerImg"})),o.a.createElement(u.a,{lg:"6",md:"12",className:"p-0"},o.a.createElement(p.a,{className:"rounded-0 mb-0 p-2"},o.a.createElement(m.a,{className:"pb-1 pt-50"},o.a.createElement(d.a,null,o.a.createElement("h4",{className:"mb-0"},"Create Account"))),o.a.createElement("p",{className:"px-2 auth-title mb-0"},"Fill the below form to create a new TRUPEE account."),o.a.createElement(f.a,{tabs:!0,className:"px-2"},o.a.createElement(b.a,null),o.a.createElement(b.a,null),o.a.createElement(b.a,null)),o.a.createElement(h.a,{className:"pt-1 pb-50"},o.a.createElement(g.a,{activeTab:this.state.activeTab},o.a.createElement(v.a,{tabId:"1"},o.a.createElement(L,null)),o.a.createElement(v.a,{tabId:"2"},o.a.createElement(S,null)),o.a.createElement(v.a,{tabId:"3"},o.a.createElement(A,null))))))))))}}]),t}(o.a.Component));a.default=D},791:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0),r=t.n(n).a.createContext({})},792:function(e,a,t){"use strict";var n=t(5),r=t(9),s=t(0),l=t.n(s),c=t(1),o=t.n(c),i=t(4),u=t.n(i),p=t(3),m=["className","cssModule","hidden","widths","tag","check","size","for"],d=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:d,order:d,offset:d})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:p.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,s=e.hidden,c=e.widths,o=e.tag,i=e.check,d=e.size,f=e.for,b=Object(r.a)(e,m),h=[];c.forEach((function(a,n){var r=e[a];if(delete b[a],r||""===r){var s,l=!n;if(Object(p.isObject)(r)){var c,o=l?"-":"-"+a+"-";s=g(l,a,r.size),h.push(Object(p.mapToCssModules)(u()(((c={})[s]=r.size||""===r.size,c["order"+o+r.order]=r.order||0===r.order,c["offset"+o+r.offset]=r.offset||0===r.offset,c))),t)}else s=g(l,a,r),h.push(s)}}));var v=Object(p.mapToCssModules)(u()(a,!!s&&"sr-only",!!i&&"form-check-label",!!d&&"col-form-label-"+d,h,!!h.length&&"col-form-label"),t);return l.a.createElement(o,Object(n.a)({htmlFor:f},b,{className:v}))};v.propTypes=b,v.defaultProps=h,a.a=v},793:function(e,a,t){"use strict";var n=t(5),r=t(9),s=t(11),l=t(12),c=t(0),o=t.n(c),i=t(1),u=t.n(i),p=t(4),m=t.n(p),d=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,l=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,p=e.addon,b=e.plaintext,h=e.innerRef,g=Object(r.a)(e,f),v=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),y=u||("select"===s||"textarea"===s?s:"input"),j="form-control";b?(j+="-plaintext",y=u||"input"):"file"===s?j+="-file":"range"===s?j+="-range":v&&(j=p?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var N=Object(d.mapToCssModules)(m()(a,i&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,j),t);return("input"===y||u&&"function"===typeof u)&&(g.type=s),g.children&&!b&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(d.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(y,Object(n.a)({},g,{ref:h,className:N,"aria-invalid":i}))},a}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},795:function(e,a,t){"use strict";var n=t(5),r=t(9),s=t(11),l=t(12),c=t(0),o=t.n(c),i=t(1),u=t.n(i),p=t(4),m=t.n(p),d=t(3),f=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,l=e.tag,c=e.innerRef,i=Object(r.a)(e,f),u=Object(d.mapToCssModules)(m()(a,!!s&&"form-inline"),t);return o.a.createElement(l,Object(n.a)({},i,{ref:c,className:u}))},a}(c.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h},804:function(e,a,t){"use strict";var n=t(5),r=t(9),s=t(0),l=t.n(s),c=t(1),o=t.n(c),i=t(4),u=t.n(i),p=t(3),m=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],d={tabs:o.a.bool,pills:o.a.bool,vertical:o.a.oneOfType([o.a.bool,o.a.string]),horizontal:o.a.string,justified:o.a.bool,fill:o.a.bool,navbar:o.a.bool,card:o.a.bool,tag:p.tagPropType,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,s=e.tabs,c=e.pills,o=e.vertical,i=e.horizontal,d=e.justified,f=e.fill,b=e.navbar,h=e.card,g=e.tag,v=Object(r.a)(e,m),E=Object(p.mapToCssModules)(u()(a,b?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":s,"card-header-tabs":h&&s,"nav-pills":c,"card-header-pills":h&&c,"nav-justified":d,"nav-fill":f}),t);return l.a.createElement(g,Object(n.a)({},v,{className:E}))};f.propTypes=d,f.defaultProps={tag:"ul",vertical:!1},a.a=f},805:function(e,a,t){"use strict";var n=t(5),r=t(9),s=t(0),l=t.n(s),c=t(1),o=t.n(c),i=t(4),u=t.n(i),p=t(3),m=["className","cssModule","row","disabled","check","inline","tag"],d={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:p.tagPropType,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,s=e.row,c=e.disabled,o=e.check,i=e.inline,d=e.tag,f=Object(r.a)(e,m),b=Object(p.mapToCssModules)(u()(a,!!s&&"row",o?"form-check":"form-group",!(!o||!i)&&"form-check-inline",!(!o||!c)&&"disabled"),t);return"fieldset"===d&&(f.disabled=c),l.a.createElement(d,Object(n.a)({},f,{className:b}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},806:function(e,a,t){"use strict";var n=t(5),r=t(12),s=t(0),l=t.n(s),c=t(1),o=t.n(c),i=t(4),u=t.n(i),p=t(791),m=t(3),d={tag:m.tagPropType,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(r.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.tag,s=Object(m.omit)(this.props,Object.keys(d)),c=Object(m.mapToCssModules)(u()("tab-content",a),t);return l.a.createElement(p.a.Provider,{value:{activeTabId:this.state.activeTab}},l.a.createElement(r,Object(n.a)({},s,{className:c})))},a}(s.Component);a.a=f,f.propTypes=d,f.defaultProps={tag:"div"}},807:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(5),r=t(9),s=t(0),l=t.n(s),c=t(1),o=t.n(c),i=t(4),u=t.n(i),p=t(791),m=t(3),d=["className","cssModule","tabId","tag"],f={tag:m.tagPropType,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function b(e){var a=e.className,t=e.cssModule,s=e.tabId,c=e.tag,o=Object(r.a)(e,d),i=function(e){return Object(m.mapToCssModules)(u()("tab-pane",a,{active:s===e}),t)};return l.a.createElement(p.a.Consumer,null,(function(e){var a=e.activeTabId;return l.a.createElement(c,Object(n.a)({},o,{className:i(a)}))}))}b.propTypes=f,b.defaultProps={tag:"div"}},810:function(e,a,t){"use strict";var n=t(13),r=t(14),s=t(16),l=t(15),c=t(0),o=t.n(c),i=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},o.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),o.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},o.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),o.a.createElement("span",null,this.props.label))}}]),t}(o.a.Component);a.a=i},882:function(e,a,t){}}]);
//# sourceMappingURL=47.5cc0faaf.chunk.js.map