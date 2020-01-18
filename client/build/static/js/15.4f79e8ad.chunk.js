(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{102:function(e,t,a){"use strict";var r=a(18),s=a(19),l=a(21),_=a(20),n=a(22),c=a(0),o=a.n(c);t.a=function(e,t){return function(a){function c(){var e,t;Object(r.a)(this,c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(t=Object(l.a)(this,(e=Object(_.a)(c)).call.apply(e,[this].concat(s)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(n.a)(c,a),Object(s.a)(c,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){if(e.setState({error:null}),"http://book-a-meal-rest-api.herokuapp.com/api/v1/"===t.baseURL&&!t.headers.Authorization){var a=t.headers["X-Req"]?localStorage.getItem("c_token"):localStorage.getItem("token");a&&(t.headers.Authorization=a)}return t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return o.a.createElement(e,this.props)}}]),c}(c.Component)}},116:function(e,t,a){e.exports={Table:"Table_Table__WbckG",Table__head:"Table_Table__head__2lWVY",Table__row:"Table_Table__row__rNsSZ",Table__foot:"Table_Table__foot__2PKEA",Table__head__list:"Table_Table__head__list__3BO49",Table__row__list:"Table_Table__row__list__1Swr2",Table__foot__list:"Table_Table__foot__list__QeOP1",Table__head__list__item:"Table_Table__head__list__item__13D6e",Table__row__list__item:"Table_Table__row__list__item__3D7rH",Table__foot__list__item:"Table_Table__foot__list__item__10wdh",Order__summary__list:"Table_Order__summary__list__3h_6e",Order__summary__list__item:"Table_Order__summary__list__item__1elsG",Dash:"Table_Dash__OiJKK"}},117:function(e,t,a){"use strict";var r=a(0),s=a.n(r),l=a(116),_=a.n(l),n=function(e){return s.a.createElement("li",{className:e.classes.Table__head__list__item},e.text)},c=function(e){var t=e.rows.map(function(t){return s.a.createElement(n,{key:t,classes:e.classes,text:t})});return s.a.createElement("div",{className:e.classes.Table__head},s.a.createElement("ul",{className:e.classes.Table__head__list},t))},o=function(e){var t=e.order.meals.map(function(t){return s.a.createElement(s.a.Fragment,{key:t.id},s.a.createElement("li",{className:e.classes.Order__summary__list__item},s.a.createElement("p",null,t.name),s.a.createElement("span",{className:e.classes.Dash},"-"),s.a.createElement("p",null,t.quantity)))});return s.a.createElement("div",{className:e.classes.Table__row},s.a.createElement("ul",{className:e.classes.Table__row__list},s.a.createElement("li",{className:e.classes.Table__row__list__item},e.order.id),s.a.createElement("li",{className:e.classes.Table__row__list__item},e.order.user||e.order.caterer),s.a.createElement("li",{className:e.classes.Table__row__list__item},s.a.createElement("ul",{className:e.classes.Order__summary__list},t)),s.a.createElement("li",{className:e.classes.Table__row__list__item},e.order.date),s.a.createElement("li",{className:e.classes.Table__row__list__item},"$",e.order.total.toFixed(2))))},i=function(e){var t=e.orders.map(function(t){return s.a.createElement(o,{classes:e.classes,order:t,key:t.id})});return s.a.createElement("div",null,t)},m=function(e){var t=s.a.createElement("li",{className:e.classes.Table__foot__list__item},e.text);return"object"===typeof e.text&&(t=s.a.createElement("li",{className:e.classes.Table__foot__list__item},"$",e.text.total.toFixed(2))),t},u=function(e){var t=e.rows.map(function(t){return s.a.createElement(m,{key:t,classes:e.classes,text:t})});return s.a.createElement("div",{className:e.classes.Table__foot},s.a.createElement("ul",{className:e.classes.Table__foot__list},t))};t.a=function(e){var t=["#ID","Caterer","Order Summary","Order Date","Order Total"],a=["Total",{total:e.orders.reduce(function(e,t){return e+t.total},0)}];return e.todaysOrders&&t.splice(3,1),e.caterer&&(t[1]="Customer Name"),s.a.createElement("section",{className:["page-section",_.a.Table].join(" ")},s.a.createElement(c,{classes:_.a,rows:t}),s.a.createElement(i,{classes:_.a,orders:e.orders}),e.todaysOrders?s.a.createElement(u,{classes:_.a,rows:a}):null)}},124:function(e,t,a){"use strict";a.r(t);var r=a(18),s=a(19),l=a(21),_=a(20),n=a(22),c=a(0),o=a.n(c),i=a(42),m=a(41),u=a(117),d=a(5),b=a(102),T=function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(n)))).state={orders:[{id:1,user:"John Doe",meals:[{id:1,name:"Jollof Rice",quantity:1},{id:2,name:"Bread & Beans",quantity:2}],date:"24th Feb 2019",price:1500},{id:2,user:"James Smith",meals:[{id:1,name:"Jollof Rice",quantity:1},{id:2,name:"Bread & Beans",quantity:1}],date:"28th Feb 2019",price:1e3}]},a}return Object(n.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{bannerText:"Your Order History",authenticated:!0}),o.a.createElement("main",null,o.a.createElement(u.a,{orders:this.state.orders})),o.a.createElement(m.a,null))}}]),t}(c.Component);t.default=Object(b.a)(T,d.a)}}]);
//# sourceMappingURL=15.4f79e8ad.chunk.js.map