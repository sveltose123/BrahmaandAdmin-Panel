(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[175],{2386:function(e,a,t){"use strict";t.r(a);var l=t(13),n=t(14),s=t(16),c=t(15),r=t(0),i=t.n(r),m=t(1145),o=t(1146),d=t(1143),u=t(1144),E=t(1147),f=t(172),v=t(1150),h=(t(27),t(874),t(562),t(169)),N=(t(41),t(56)),p=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={data:{}},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;h.a.get("/getoneuser/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e,a;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(o.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(d.a,{listTag:"div"},i.a.createElement(u.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(u.a,{href:"/app/brahmaand/resource/resourceList",tag:"a"},"Resource List"),i.a.createElement(u.a,{active:!0}," View ResourceList"))))),i.a.createElement(E.a,{className:"overflow-hidden app-ecommerce-details"},i.a.createElement(m.a,{className:"m-2"},i.a.createElement(o.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View ResourceList")),i.a.createElement(o.a,null,i.a.createElement(N.b,{render:function(e){var a=e.history;return i.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/brahmaand/resource/resourceList")}},"Back")}}))),i.a.createElement(v.a,{className:"pb-0"},i.a.createElement(m.a,{className:"ml-4"},i.a.createElement(o.a,{sm:"9",md:"12",lg:"12"},i.a.createElement("div",{className:"users-page-view-table"},i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Creator Name :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.creatorName))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Link :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.link))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Category :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,null===(e=this.state.data.category)||void 0===e?void 0:e.title))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"SubCategory :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,null===(a=this.state.data.sub_category)||void 0===a?void 0:a.title))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Type :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.type))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Format :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.format))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Language :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.language))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Image :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.img))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Topic :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.topics))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Status :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.status))))))))))}}]),t}(i.a.Component);a.default=p},874:function(e,a,t){}}]);
//# sourceMappingURL=175.dc9f2c64.chunk.js.map