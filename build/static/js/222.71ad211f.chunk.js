(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[222],{2393:function(e,t,a){"use strict";a.r(t);var n=a(36),l=a(41),r=a.n(l),c=a(0),u=a.n(c),m=a(1506),o=a(42),d=a(861);t.default=function(){var e=Object(c.useState)([]),t=Object(n.a)(e,2),a=t[0],l=t[1];Object(c.useEffect)((function(){E()}),[]);var E=function(){r.a.get("http://3.7.173.138:9000/user/user_planet_position").then((function(e){l(e.data.data)})).catch((function(e){return console.log(e)}))};return u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",{className:"d-flex justify-content-center"},"Update Points Counter Metors"),u.a.createElement("hr",null),u.a.createElement(d.a,{striped:!0,bordered:!0,hover:!0},u.a.createElement("thead",{"aria-colspan":1},u.a.createElement("tr",null,u.a.createElement("th",null,"No."),u.a.createElement("th",null,"Parameters"),u.a.createElement("th",null,"Current Point"),u.a.createElement("th",null,"Action"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"1"),u.a.createElement("td",null,"Submit a content"),u.a.createElement("td",null,"10 Points"),u.a.createElement("td",null,u.a.createElement("input",{type:"text"}),u.a.createElement("button",{type:"button"},"Update"))),u.a.createElement("tr",null,u.a.createElement("td",null,"2"),u.a.createElement("td",null,"Rating"),u.a.createElement("td",null,"2 Points"),u.a.createElement("td",null," ",u.a.createElement("input",{type:"text"}),u.a.createElement("button",{type:"button"},"Update"))),u.a.createElement("tr",null,u.a.createElement("td",null,"3"),u.a.createElement("td",null,"Review"),u.a.createElement("td",null,"5 Points"),u.a.createElement("td",null," ",u.a.createElement("input",{type:"text"}),u.a.createElement("button",{type:"button"},"Update"))),u.a.createElement("tr",null,u.a.createElement("td",null,"3"),u.a.createElement("td",null,"Reaching a level"),u.a.createElement("td",null,"50 Points"),u.a.createElement("td",null," ",u.a.createElement("input",{type:"text"}),u.a.createElement("button",{type:"button"},"Update"))))),u.a.createElement("hr",null),u.a.createElement("h3",{className:"d-flex justify-content-center mt-2"},"Update Planet Positions Metors"),u.a.createElement("hr",null),u.a.createElement(d.a,{striped:!0,bordered:!0,hover:!0},u.a.createElement("thead",{"aria-colspan":1},u.a.createElement("tr",null,u.a.createElement("th",null,"No."),u.a.createElement("th",null,"Planet Name"),u.a.createElement("th",null,"Meteors Range"),u.a.createElement("th",null,"Dollar"),u.a.createElement("th",null,"Action"))),u.a.createElement("tbody",null,""!==a?null===a||void 0===a?void 0:a.map((function(e,t){return u.a.createElement("tr",{key:e._id},u.a.createElement("td",null,t+1),u.a.createElement("td",null,u.a.createElement("img",{style:{width:"70px"},src:null===e||void 0===e?void 0:e.img})),u.a.createElement("td",null,null===e||void 0===e?void 0:e.planet_name),u.a.createElement("td",null,null===e||void 0===e?void 0:e.point_range),u.a.createElement("td",null,null===e||void 0===e?void 0:e.doller_rupees),u.a.createElement("td",null,u.a.createElement(o.b,{to:"/app/brahmaand/leaderboard/editplanet/".concat(e._id)},u.a.createElement(m.a,{className:"aifillediticon",size:30,style:{color:"green",border:"none"}}))))})):null)))}}}]);
//# sourceMappingURL=222.71ad211f.chunk.js.map