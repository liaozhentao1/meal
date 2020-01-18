(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,a){e.exports={Form_wrapper:"Form_Form_wrapper__QqSsD",Form_page:"Form_Form_page__7wk-h",Page_form:"Form_Page_form__4SeNr",Form_group:"Form_Form_group__1phnD",Form_field:"Form_Form_field__3UJZr",Invalid:"Form_Invalid__2diAN",Page_link:"Form_Page_link__1y_3j"}},102:function(e,t,a){"use strict";var n=a(18),l=a(19),r=a(21),o=a(20),i=a(22),c=a(0),s=a.n(c);t.a=function(e,t){return function(a){function c(){var e,t;Object(n.a)(this,c);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(t=Object(r.a)(this,(e=Object(o.a)(c)).call.apply(e,[this].concat(l)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(i.a)(c,a),Object(l.a)(c,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){if(e.setState({error:null}),"http://book-a-meal-rest-api.herokuapp.com/api/v1/"===t.baseURL&&!t.headers.Authorization){var a=t.headers["X-Req"]?localStorage.getItem("c_token"):localStorage.getItem("token");a&&(t.headers.Authorization=a)}return t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return s.a.createElement(e,this.props)}}]),c}(c.Component)}},103:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(101),o=a.n(r);t.a=function(e){var t=null,a=[o.a.Form_field];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(o.a.Invalid),e.elementType){case"input":t=l.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=l.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=l.a.createElement("select",{className:a.join(" "),onChange:e.changed},e.elementConfig.options.map(function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=l.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return l.a.createElement("div",{className:o.a.Form_group},t)}},104:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(105),o=a.n(r),i=a(106),c=a.n(i);t.a=function(e){var t="Empty "+e.text,a=l.a.createElement("span",{className:"Red"},e.text);return l.a.createElement("div",{className:o.a.Empty},l.a.createElement("img",{src:c.a,alt:t}),l.a.createElement("p",{className:o.a.EmptyText},"Empty ",a))}},105:function(e,t,a){e.exports={Empty:"Empty_Empty__3FLfD",EmptyText:"Empty_EmptyText__U9qLT"}},106:function(e,t,a){e.exports=a.p+"static/media/empty.093f05ea.svg"},107:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",function(){return n})},108:function(e,t,a){e.exports={Menu:"Menu_Menu__1Ul2_",Menu__label:"Menu_Menu__label__1rxRj",Menu__food:"Menu_Menu__food__1N5xH",Right__Btn__lg:"Menu_Right__Btn__lg__2AJxY"}},109:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(110),o=a.n(r);t.a=function(e){var t="meal",a="mealdetails",n="mealname",r="mealprice",i="mealquantity",c={menu:l.a.createElement("div",{className:o.a.Menu__food__item__details,role:a},l.a.createElement("div",{className:o.a.Meal__info},l.a.createElement("p",{role:n},e.meal.name),l.a.createElement("p",{role:r},"$",e.meal.price.toFixed(2))),l.a.createElement("div",null,l.a.createElement("button",{className:o.a.Card__btn,onClick:function(){return e.order(e.meal.id)}},"Order"))),orders:l.a.createElement("div",{className:o.a.Menu__food__item__details,role:a},l.a.createElement("div",{className:o.a.Meal__info},l.a.createElement("p",{role:n},e.meal.name),l.a.createElement("p",{role:r},"$",e.meal.price.toFixed(2)),l.a.createElement("p",null,l.a.createElement("button",{className:o.a.Tiny__btn,onClick:function(){return e.decreaseQuantity(e.meal.orderId)}},"-")," ",e.meal.quantity," ",l.a.createElement("button",{className:o.a.Tiny__btn,onClick:function(){return e.increaseQuantity(e.meal.orderId)}},"+"))),l.a.createElement("div",{className:o.a.Meal__btn},l.a.createElement("button",{className:o.a.Card__btn,onClick:function(){return e.deleteOrder(e.meal.orderId)}},"Delete"))),menuMeals:l.a.createElement("div",{className:o.a.Menu__food__item__details,role:a},l.a.createElement("div",{className:o.a.Meal__info},l.a.createElement("p",{role:n},e.meal.name),l.a.createElement("p",{role:r},"$",e.meal.price.toFixed(2)),l.a.createElement("p",{role:i},"Quantity: ",e.meal.quantity))),mealOptions:l.a.createElement("div",{className:o.a.Menu__food__item__details,role:a},l.a.createElement("div",{className:o.a.Meal__info},l.a.createElement("p",{role:n},e.meal.name),l.a.createElement("p",{role:r},"$",e.meal.price.toFixed(2))),l.a.createElement("div",{className:o.a.Meal__btn},l.a.createElement("button",{className:o.a.Card__btn,onClick:function(){return e.showEditMealModal(e.meal)}},"Edit")),l.a.createElement("div",{className:o.a.Meal__btn},l.a.createElement("button",{className:o.a.Card__btn,onClick:function(){return e.removeMeal(e.meal.id)}},"Delete"))),manageMenu:l.a.createElement("div",{className:o.a.Menu__food__item__details,role:a},l.a.createElement("div",{className:o.a.Meal__info},l.a.createElement("p",{role:n},e.meal.name),l.a.createElement("p",{role:r},"$",e.meal.price.toFixed(2)),l.a.createElement("p",null,l.a.createElement("button",{className:o.a.Tiny__btn,onClick:function(){return e.decrease(e.meal.id)}},"-")," ",e.meal.quantity||0," ",l.a.createElement("button",{className:o.a.Tiny__btn,onClick:function(){return e.increase(e.meal.id)}},"+"))))},s="".concat("http://book-a-meal-rest-api.herokuapp.com").concat(e.meal.imageUrl);return l.a.createElement("article",{className:o.a.Menu__food__item,role:t},e.meal.quantity>0&&"manageMenu"===e.type?l.a.createElement("div",{className:"ribbon ribbon-top-left"},l.a.createElement("span",null,"Selected")):null,l.a.createElement("div",{className:o.a.Menu__food__item__img},l.a.createElement("img",{src:s,alt:"Meal"})),c[e.type])}},110:function(e,t,a){e.exports={Menu__food__item:"Meal_Menu__food__item__2OJ21",Menu__food__item__img:"Meal_Menu__food__item__img__1Yo1D",Menu__food__item__details:"Meal_Menu__food__item__details__2pvx9",Meal__info:"Meal_Meal__info__2jhlT",Card__btn:"Meal_Card__btn__2rLEQ",Tiny__btn:"Meal_Tiny__btn__2poCu",Cart__container:"Meal_Cart__container__2_1QQ",Meal__btn:"Meal_Meal__btn__nk-Jf"}},113:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(13),o=a(108),i=a.n(o),c=a(109);t.a=function(e){var t=e.meals.map(function(t){return l.a.createElement(c.a,Object.assign({key:t.id,meal:t},e))}),a=["page-section"],n=null,o=null;switch(e.type){case"orders":a.push(i.a.Cart__container),o=l.a.createElement("button",{className:i.a.Right__Btn__lg,onClick:e.checkout},"Make Order");break;case"manageMenu":o=l.a.createElement("button",{className:["Btn",i.a.Right__Btn__lg].join(" "),onClick:e.saveMenu},"Save");break;case"menuMeals":n=l.a.createElement(r.b,{to:"/admin/menu",className:["Btn",i.a.Right__Btn__lg].join(" ")},"Manage Menu");break;case"mealOptions":n=l.a.createElement("button",{className:["Btn",i.a.Right__Btn__lg].join(" "),onClick:e.toggleMealModal},"Add Meal Option")}return l.a.createElement("section",{className:a.join(" "),role:"meallist"},n,l.a.createElement("div",{className:i.a.Menu__food},t),o)}},115:function(e,t,a){e.exports={Modal:"Modal_Modal__2Pcs3",Modal__header:"Modal_Modal__header__2JRRy",Modal__title:"Modal_Modal__title__2vyE-",Close:"Modal_Close__zmcgb",Modal__body:"Modal_Modal__body__1CQOc",Modal__content:"Modal_Modal__content__11UpQ",Modal__footer:"Modal_Modal__footer__2Gwm3",Hidden:"Modal_Hidden__340aA",Meal__Details__img:"Modal_Meal__Details__img__24T8R"}},118:function(e,t,a){"use strict";var n=a(107),l=a(18),r=a(19),o=a(21),i=a(20),c=a(22),s=a(0),m=a.n(s),u=a(115),d=a.n(u),_=function(e){var t=e.classes;return m.a.createElement("h3",{className:t.Modal__title},m.a.createElement("span",{className:"Red"},"B"),"ook ",m.a.createElement("span",{className:"Red"},"A")," Mea",m.a.createElement("span",{className:"Red"},"l")," ",e.title)},p=a(43),h=a(2),f=a(103),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={quantityControls:{quantity:{elementType:"input",elementConfig:{type:"number",name:"quantity",placeholder:"Quantity",min:0,max:a.props.meal?a.props.meal.quantity:0},value:"",validation:{required:!0},valid:!1,touched:!1},mealId:{elementType:"input",elementConfig:{type:"hidden",name:"mealId"},value:a.props.meal?a.props.meal.id:"",validation:{},valid:!0,touched:!0}},checkoutControls:{billingAddress:{elementType:"input",elementConfig:{type:"text",name:"billing-address",placeholder:"Billing Address"},value:"",validation:{required:!0},valid:!1,touched:!1},city:{elementType:"input",elementConfig:{type:"text",name:"city",placeholder:"City"},value:"",validation:{required:!0},valid:!1,touched:!1}},mealControls:{name:{elementType:"input",elementConfig:{type:"text",name:"name",placeholder:"Meal Name"},value:a.props.edittingMeal?a.props.edittingMeal.name:"",validation:{required:!0},valid:!1,touched:!1},price:{elementType:"input",elementConfig:{type:"number",name:"price",placeholder:"Meal Price",min:10},value:a.props.edittingMeal?a.props.edittingMeal.price:"",validation:{required:!0,isNumeric:!0},valid:!1,touched:!1},image:{elementType:"input",elementConfig:{type:"file",name:"image",placeholder:"Meal Image"},value:"",files:[],validation:{required:!a.props.edittingMeal},valid:!1,touched:!1}},formIsValid:!1},a.inputChangeHandler=function(e,t,l){var r,o={checkout:"checkoutControls",quantity:"quantityControls",meal:"mealControls"}[l],i=Object(h.b)(a.state[o][t],{value:e.target.value,valid:Object(h.a)(e.target.value,a.state[o][t].validation),touched:!0});i.files&&(i.files=Object(n.a)(e.target.files));var c=Object(h.b)(a.state[o],Object(p.a)({},t,i)),s=!0;for(var m in c)s=c[m].valid&&s;a.setState((r={},Object(p.a)(r,o,c),Object(p.a)(r,"formIsValid",s),r))},a.addToOrders=function(e){e.preventDefault();var t={};for(var n in a.state.quantityControls)t[n]=a.state.quantityControls[n].value,"number"===a.state.quantityControls[n].elementConfig.type&&(t[n]=Number(a.state.quantityControls[n].value));a.props.addMealToOrders(t)},a.handleMealForm=function(e){e.preventDefault();var t=new FormData;for(var n in a.state.mealControls){var l=null;switch(a.state.mealControls[n].elementConfig.type){case"text":l=a.state.mealControls[n].value;break;case"number":l=Number(a.state.mealControls[n].value);break;case"file":l=a.state.mealControls[n].files[0]?a.state.mealControls[n].files[0]:"";break;default:l=a.state.mealControls[n].value}t.append(n,l),"image"===n&&""===l&&t.delete(n)}a.props.edittingMeal?a.props.editMeal(a.props.edittingMeal.id,t):a.props.addMeal(t)},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.state.quantityControls).map(function(t){return{id:t,config:e.state.quantityControls[t]}}),a=Object.keys(this.state.checkoutControls).map(function(t){return{id:t,config:e.state.checkoutControls[t]}}),n=Object.keys(this.state.mealControls).map(function(t){return{id:t,config:e.state.mealControls[t]}}),l=this.props.classes,r=m.a.createElement("form",{action:"#",method:"post",id:"checkoutForm"},m.a.createElement("div",{className:l.Modal__body},a.map(function(t){return m.a.createElement(f.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,touched:t.config.touched,shouldValidate:t.config.validation,changed:function(a){return e.inputChangeHandler(a,t.id,"checkout")}})})),m.a.createElement("div",{className:l.Modal__footer},m.a.createElement("button",{type:"button","data-dismiss":"modal",onClick:this.props.closeModal},"Close"),m.a.createElement("button",{type:"submit"},"Checkout"))),o=this.props.meal?"".concat("http://book-a-meal-rest-api.herokuapp.com").concat(this.props.meal.imageUrl):null;return{quantity:this.props.meal?m.a.createElement("form",{method:"post",id:"addToOrders",onSubmit:this.addToOrders},m.a.createElement("div",{className:l.Modal__body},m.a.createElement("div",null,m.a.createElement("div",{className:l.Meal__Details__img},m.a.createElement("img",{src:o,alt:"Meal"})),m.a.createElement("div",null,m.a.createElement("p",null,this.props.meal.name),m.a.createElement("p",null,"$",this.props.meal.price))),t.map(function(t){return m.a.createElement(f.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,touched:t.config.touched,shouldValidate:t.config.validation,changed:function(a){return e.inputChangeHandler(a,t.id,"quantity")}})})),m.a.createElement("div",{className:l.Modal__footer},m.a.createElement("button",{type:"button","data-dismiss":"modal",onClick:this.props.closeModal},"Close"),m.a.createElement("button",{type:"submit"},"Add"))):null,checkout:r,meal:m.a.createElement("form",{action:"#",method:"post",id:"mealForm",onSubmit:this.handleMealForm},m.a.createElement("div",{className:l.Modal__body},n.map(function(t){return m.a.createElement(f.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,touched:t.config.touched,shouldValidate:t.config.validation,changed:function(a){return e.inputChangeHandler(a,t.id,"meal")}})})),m.a.createElement("div",{className:l.Modal__footer},m.a.createElement("button",{type:"button","data-dismiss":"modal",onClick:this.props.closeModal},"Close"),m.a.createElement("button",{type:"submit"},this.props.edittingMeal?"Edit":"Add")))}[this.props.type]}}]),t}(s.Component),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={modal:[d.a.Modal,d.a.Hidden]},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.show!==this.props.show}},{key:"render",value:function(){var e=null,t=Object(n.a)(this.state.modal);return this.props.show&&(t.pop(),e=m.a.createElement("div",{className:t.join(" "),role:"dialog"},m.a.createElement("div",{className:d.a.Modal__content},m.a.createElement("div",{className:d.a.Modal__header},m.a.createElement(_,{title:{quantity:"Order",checkout:"Checkout",meal:"Meal Option"}[this.props.type],classes:d.a}),m.a.createElement("button",{type:"button",className:["Btn",d.a.Close].join(" "),"data-dismiss":"modal",onClick:this.props.close},"\xd7")),m.a.createElement(g,{classes:d.a,type:this.props.type,closeModal:this.props.close,meal:!!this.props.meal&&this.props.meal,edittingMeal:!!this.props.edittingMeal&&this.props.edittingMeal,editMeal:this.props.editMeal,addMeal:this.props.addMeal,addMealToOrders:this.props.orderMeal})))),e}}]),t}(s.Component);t.a=v},125:function(e,t,a){"use strict";a.r(t);var n=a(18),l=a(19),r=a(21),o=a(20),i=a(22),c=a(0),s=a.n(c),m=a(14),u=a(114),d=a(33),_=a(42),p=a(41),h=a(113),f=a(118),g=a(28),v=a(5),M=a(102),b=a(104),y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).handleOrderDelete=function(e){a.props.onOrderDelete(e)},a.handleOrderIncrement=function(e){a.props.onOrderIncrement(e)},a.handleOrderDecrement=function(e){a.props.onOrderDecrement(e)},a.showCheckoutModal=function(){a.setState({checkingOut:!0})},a.hideCheckoutModal=function(){a.setState({checkingOut:!1})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchOrders()}},{key:"shouldComponentUpdate",value:function(e){return!Object(u.isEqual)(e.orderMeals,this.props.orderMeals)}},{key:"render",value:function(){var e=s.a.createElement(h.a,{type:"orders",meals:this.props.orderMeals,increaseQuantity:this.handleOrderIncrement,decreaseQuantity:this.handleOrderDecrement,deleteOrder:this.handleOrderDelete,checkout:this.showCheckoutModal});return this.props.loading&&(e=s.a.createElement(g.a,null)),this.props.loading||0!==this.props.orderMeals.length||(e=s.a.createElement(b.a,{text:"Orders"})),s.a.createElement(s.a.Fragment,null,s.a.createElement(_.a,{bannerText:"Your Order Summary",authenticated:!0,overlay:this.props.checkingOut}),s.a.createElement("main",null,e),s.a.createElement(p.a,null),s.a.createElement(f.a,{type:"checkout",show:this.props.checkingOut,close:this.hideCheckoutModal}))}}]),t}(c.Component);t.default=Object(m.b)(function(e){return{orderMeals:e.orders.userOrderMeals,checkingOut:e.orders.checkingOut,loading:e.orders.loading}},function(e){return{onFetchOrders:function(){return e(d.s())},onOrderIncrement:function(t){return e(d.t(t))},onOrderDecrement:function(t){return e(d.p(t))},onOrderDelete:function(t){return e(d.q(t))}}})(Object(M.a)(y,v.a))}}]);
//# sourceMappingURL=5.89c447e8.chunk.js.map