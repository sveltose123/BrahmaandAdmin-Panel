(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[142],{2367:function(e,a,t){"use strict";t.r(a);var l=t(13),n=t(14),s=t(16),c=t(15),r=t(0),i=t.n(r),m=t(1145),o=t(1146),d=t(1143),u=t(1144),f=t(1147),v=t(172),E=t(1150),b=t(861),h=(t(27),t(874),t(562),t(169)),g=t(56),p=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={data:{}},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;h.a.get("/admin/getone_reslist/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e,a,t,l,n;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(o.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(d.a,{listTag:"div"},i.a.createElement(u.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(u.a,{href:"/app/brahmaand/resource/resourceList",tag:"a"},"Resource List"),i.a.createElement(u.a,{active:!0}," View ResourceList"))))),i.a.createElement(f.a,{className:"overflow-hidden app-ecommerce-details"},i.a.createElement(m.a,{className:"m-2"},i.a.createElement(o.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View ResourceList")),i.a.createElement(o.a,null,i.a.createElement(g.b,{render:function(e){var a=e.history;return i.a.createElement(v.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/brahmaand/resource/resourceList")}},"Back")}}))),i.a.createElement(E.a,{className:"pb-0"},i.a.createElement(m.a,{className:"mb-5 mt-2"},i.a.createElement(o.a,{md:"12",sm:"12",className:"mb-2"},i.a.createElement("div",{className:"users-page-view-table"},i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Creator Name :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.creatorName))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Link :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.link))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Category :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,null===(e=this.state.data.category)||void 0===e?void 0:e.title))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"SubCategory :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,null===(a=this.state.data.sub_category)||void 0===a?void 0:a.title))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Type :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.type))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Format :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.format))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Language :"),i.a.createElement("div",{className:"text-truncate"},null===(t=this.state.data.language)||void 0===t?void 0:t.map((function(e){return i.a.createElement("span",{key:e._id},null===e||void 0===e?void 0:e.language)})))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Image :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.img)),i.a.createElement(b.a,{className:"mt-md-1 mt-0",left:!0},null===(l=this.state.data)||void 0===l||null===(n=l.profileImg)||void 0===n?void 0:n.map((function(e){return i.a.createElement("img",{className:"border-black m-0",src:e,alt:"user avatar",height:"400"})})))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Topic :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.topics))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Status :"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.status))))))))))}}]),t}(i.a.Component);a.default=p},861:function(e,a,t){"use strict";var l=t(5),n=t(9),s=t(0),c=t.n(s),r=t(1),i=t.n(r),m=t(4),o=t.n(m),d=t(3),u=["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"],f={body:i.a.bool,bottom:i.a.bool,children:i.a.node,className:i.a.string,cssModule:i.a.object,heading:i.a.bool,left:i.a.bool,list:i.a.bool,middle:i.a.bool,object:i.a.bool,right:i.a.bool,tag:d.tagPropType,top:i.a.bool},v=function(e){var a,t=e.body,s=e.bottom,r=e.className,i=e.cssModule,m=e.heading,f=e.left,v=e.list,E=e.middle,b=e.object,h=e.right,g=e.tag,p=e.top,N=Object(n.a)(e,u);a=m?"h4":N.href?"a":N.src||b?"img":v?"ul":"div";var x=g||a,y=Object(d.mapToCssModules)(o()(r,{"media-body":t,"media-heading":m,"media-left":f,"media-right":h,"media-top":p,"media-bottom":s,"media-middle":E,"media-object":b,"media-list":v,media:!t&&!m&&!f&&!h&&!p&&!s&&!E&&!b&&!v}),i);return c.a.createElement(x,Object(l.a)({},N,{className:y}))};v.propTypes=f,a.a=v},874:function(e,a,t){}}]);
//# sourceMappingURL=142.95888a3a.chunk.js.map