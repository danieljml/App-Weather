(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(5),i=a.n(s),r=(a(4),a(3)),o=a(0);var d=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)({}),i=Object(r.a)(s,2),d=i[0],l=i[1],h="4aa692caf0bf7cf7a224fe81a3ca4959",u="http://api.openweathermap.org/data/2.5/";return console.log(d.weather),Object(o.jsx)("div",{className:"undefined"!=typeof d.main&&d.main.temp>16?"body-app warm":"body-app",children:Object(o.jsx)("div",{className:"undefined"!=typeof d.main&&d.main.temp>16?"app warm":"app",children:Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:"search-box",children:Object(o.jsx)("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){c(e.target.value)},value:a,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(u,"weather?q=").concat(a,"&units=metric&APPID=").concat(h)).then((function(e){return e.json()})).then((function(e){l(e),c(""),console.log(e)}))}})}),"undefined"!=typeof d.main?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"location-box",children:[Object(o.jsxs)("div",{className:"location",children:[d.name,", ",d.sys.country]}),Object(o.jsx)("div",{className:"date",children:function(e){var t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][e.getDay()],a=e.getDate(),n=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][e.getMonth()],c=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n," ").concat(c)}(new Date)})]}),Object(o.jsxs)("div",{className:"weather-box",children:[Object(o.jsxs)("div",{className:"temp",children:[Math.round(d.main.temp)," \xb0c"]}),Object(o.jsx)("div",{className:"weather",children:d.weather[0].main})]})]}):""]})})})},l=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),l()},4:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.c880cce3.chunk.js.map