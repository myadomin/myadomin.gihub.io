(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{JeqK:function(e,t,a){"use strict";var i=a("VY4n"),n=a("0ZgE");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("zPQC");var s=n(a("fhRk"));a("9sL4");var o=n(a("dja9")),r=n(a("TFzq")),d=n(a("DEU0")),c=n(a("+hkI")),f=n(a("54rf")),l=n(a("oHNe")),u=i(a("PQfD")),p=a("zccq"),g=function(e){function t(){var e,a;(0,r.default)(this,t);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return a=(0,c.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(n))),a.getData=function(){var e=u.default.createElement(o.default,{checkedChildren:(0,p.formatMessage)({id:"app.settings.open"}),unCheckedChildren:(0,p.formatMessage)({id:"app.settings.close"}),defaultChecked:!0});return[{title:(0,p.formatMessage)({id:"app.settings.notification.password"},{}),description:(0,p.formatMessage)({id:"app.settings.notification.password-description"},{}),actions:[e]},{title:(0,p.formatMessage)({id:"app.settings.notification.messages"},{}),description:(0,p.formatMessage)({id:"app.settings.notification.messages-description"},{}),actions:[e]},{title:(0,p.formatMessage)({id:"app.settings.notification.todo"},{}),description:(0,p.formatMessage)({id:"app.settings.notification.todo-description"},{}),actions:[e]}]},a}return(0,l.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){return u.default.createElement(u.Fragment,null,u.default.createElement(s.default,{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(e){return u.default.createElement(s.default.Item,{actions:e.actions},u.default.createElement(s.default.Item.Meta,{title:e.title,description:e.description}))}}))}}]),t}(u.Component),m=g;t.default=m}}]);