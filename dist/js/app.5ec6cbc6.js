(function(t){function e(e){for(var r,i,o=e[0],l=e[1],u=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/JanGviO/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0581":function(t,e,a){},1195:function(t,e,a){t.exports=a.p+"img/avatar.17b08a8e.png"},1771:function(t,e,a){var r={"./Male-Avatar.png":"b082","./add.svg":"eef4","./avatar.png":"1195","./black.svg":"2eef","./card.jpg":"243f","./explore.svg":"6fb7","./following.svg":"7ab2","./logo.png":"cf05","./premium.svg":"2832","./search.svg":"51f2"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=s,t.exports=n,n.id="1771"},"243f":function(t,e,a){t.exports=a.p+"img/card.4e0a6f64.jpg"},2832:function(t,e,a){t.exports=a.p+"img/premium.0af00831.svg"},"2d65":function(t,e,a){"use strict";var r=a("a1e4"),n=a.n(r);n.a},"2eef":function(t,e,a){t.exports=a.p+"img/black.8311a06b.svg"},"3be9":function(t,e,a){},"4b8e":function(t,e,a){},"51f2":function(t,e,a){t.exports=a.p+"img/search.d144783b.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-light",attrs:{id:"app"}},[a("NavBar"),a("router-view")],1)},s=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"navbar navbar-expand-lg navbar-light bg-white ml-5 fixed-top",attrs:{id:"main-nav"}},[t._m(0),r("div",{staticClass:"main-links ml-auto pl-5 bg-white"},t._l(t.mainLinks,(function(e,n){return r("div",{key:n,staticClass:"avatar bg-white"},[r("img",{staticClass:"avatar bg-white",class:{invisible:e.invisible},attrs:{src:a("1771")("./"+e.src),width:"30",height:"30",alt:"Profile Avatar",id:e.tooltip}}),r("b-tooltip",{attrs:{target:e.tooltip,placement:"bottom",offset:"0",variant:"primary"}},[t._v(t._s(e.tooltip))])],1)})),0),r("div",{staticClass:"pl-2",attrs:{id:"addBtn"}},[r("addBtn")],1),r("div",{staticClass:"nav-buttons ml-auto bg-white"},[r("button",{directives:[{name:"b-modal",rawName:"v-b-modal.signInModal",modifiers:{signInModal:!0}}],staticClass:"btn btn-outline-primary btn-sm px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right",attrs:{type:"button"}},[t._v("Sign In")]),r("button",{directives:[{name:"b-modal",rawName:"v-b-modal.signUpModal",modifiers:{signUpModal:!0}}],staticClass:"btn btn-danger btn-sm px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right",attrs:{type:"button"}},[t._v("Sign Up")]),r("SignInModal"),r("SignUpModal")],1)]),r("header",{staticClass:"navbar navbar-light bg-white flex-column fixed-bottom h-100",attrs:{id:"aside"}},[t._m(1),r("div",{staticClass:"mb-auto bg-transparent mt-5"},t._l(t.sideLinks,(function(e,n){return r("div",{key:n,staticClass:"avatar mb-5"},[r("img",{staticClass:"avatar bg-white",attrs:{src:a("1195"),width:"30",height:"30",alt:"Profile Avatar",id:e.tooltip}}),r("b-tooltip",{staticClass:"tooltip-right",attrs:{target:e.tooltip,placement:"right",offset:"0",variant:"primary"}},[t._v(t._s(e.tooltip))])],1)})),0)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column align-items-left ml-5",attrs:{href:"#"}},[a("span",{staticClass:"bg-white h5 mb-0"},[t._v("JanGvio")]),a("small",{staticClass:"bg-white text-muted"},[t._v("Lorem Ipsem Maseep!")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"bg-white p-1 mb-5",attrs:{href:"#"}},[r("img",{staticClass:"bg-white",attrs:{src:a("cf05"),width:"35",height:"35",alt:"JanGvio Logo"}})])}],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container wrap"},[r("ul",{staticClass:"bg-white rounded-full",attrs:{id:"menu"}},[r("a",{staticClass:"menu-button d-flex justify-content-center",attrs:{href:t.triggerHREF,title:t.triggerStatus},on:{click:t.toggleState}},[r("img",{staticClass:"target bg-transparent",attrs:{src:a("eef4"),width:"26",alt:"Add Button Icon SVG"}})]),t._m(0),t._m(1),t._m(2),t._m(3)])])])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"#menu"}},[a("span",{staticClass:"fas fa-github"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"#menu"}},[a("span",{staticClass:"fas fa-linkedin"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"#menu"}},[a("span",{staticClass:"fas fa-instagram"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"#menu"}},[a("span",{staticClass:"fas fa-twitter"})])])}],c={data:function(){return{triggerHREF:"#0",triggerStatus:"Show Navigation"}},methods:{toggleState:function(){var t=document.querySelector(".target");"#menu"===this.triggerHREF?(this.triggerHREF="#0",this.triggerStatus="Hide Navigation",t.classList.remove("rotate-forward"),t.classList.add("rotate-back")):(this.triggerHREF="#menu",this.triggerStatus="Show Navigation",t.classList.add("rotate-forward"),t.classList.remove("rotate-back"))}}},d=c,p=(a("8b12"),a("2877")),m=Object(p["a"])(d,l,u,!1,null,"ff9d4b30",null),f=m.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{attrs:{id:"signInModal",size:"md",centered:"true","button-size":"sm","title-class":"h5 bg-transparent text-white",title:"Sign In","header-bg-variant":"primary","header-border-variant":"primary","header-close-variant":"white","header-class":"rounded-0","footer-class":"button border-0","modal-class":"my-class","content-class":"custom-shadow border-0","dialog-class":"bg-transparent","footer-bg-variant":"light","ok-title":"Sign In","ok-variant":"primary px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right","cancel-variant":"outline-primary px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"}},[a("div",{staticClass:"px-4 pt-3"},[a("SignInForm")],1)])],1)},g=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.show?a("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[a("b-form-group",{attrs:{id:"name-input-group-signin",label:"Your Name:","label-for":"nameInput"}},[a("b-form-input",{attrs:{id:"nameInput",required:"",placeholder:"Enter name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-form-group",{attrs:{id:"email-input-group-signin",label:"Email address:","label-for":"emailInput"}},[a("b-form-input",{attrs:{id:"emailInput",type:"email",required:"",placeholder:"Enter email","aria-describedby":""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("b-form-text",{attrs:{id:"email-help-block"}},[t._v("We'll never share your email with anyone else.")])],1),a("b-form-group",{attrs:{id:"password-input-group-signin",label:"Password:","label-for":"passwordInput"}},[a("b-input",{attrs:{type:"password",id:"passwordInput","aria-describedby":"password-help-block"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),a("b-form-text",{attrs:{id:"password-help-block"}},[t._v(" Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji. ")])],1)],1):t._e()],1)},h=[],w={data:function(){return{form:{email:"",name:"",password:""},show:!0}}},_=w,x=Object(p["a"])(_,v,h,!1,null,null,null),y=x.exports,C={components:{SignInForm:y}},k=C,S=(a("a2e3"),Object(p["a"])(k,b,g,!1,null,"2918faf5",null)),E=S.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{attrs:{id:"signUpModal",size:"md",centered:"true","button-size":"sm","title-class":"h5 bg-transparent text-white",title:"Sign Up","header-bg-variant":"primary","header-border-variant":"primary","header-close-variant":"white","header-class":"rounded-0","footer-class":"button border-0","modal-class":"my-class","content-class":"custom-shadow border-0","dialog-class":"bg-transparent","footer-bg-variant":"light","ok-title":"Sign Up","ok-variant":"primary px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right","cancel-variant":"outline-primary px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"}},[a("div",{staticClass:"px-4 pt-3"},[a("SignUpForm")],1)])],1)},j=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.show?a("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[a("b-form-group",{attrs:{id:"name-input-group-signup",label:"Your Name:","label-for":"nameInput"}},[a("b-form-input",{attrs:{id:"nameInput",required:"",placeholder:"Enter name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-form-group",{attrs:{id:"email-input-group-signup",label:"Email address:","label-for":"emailInput"}},[a("b-form-input",{attrs:{id:"emailInput",type:"email",required:"",placeholder:"Enter email","aria-describedby":""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("b-form-text",{attrs:{id:"email-help-block"}},[t._v("We'll never share your email with anyone else.")])],1),a("b-form-group",{attrs:{id:"password-input-group-signup",label:"Password:","label-for":"passwordInput"}},[a("b-input",{attrs:{type:"password",id:"passwordInput","aria-describedby":"password-help-block"}}),a("b-form-text",{attrs:{id:"password-help-block"}},[t._v(" Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji. ")])],1),a("b-form-group",{attrs:{id:"confirm-password-input-group-signup",label:"Confirm Password:","label-for":"confirmPasswordInput"}},[a("b-input",{attrs:{type:"password",id:"confirmPasswordInput"}})],1)],1):t._e()],1)},$=[],M={data:function(){return{form:{email:"",name:"",food:""},show:!0}}},P=M,U=Object(p["a"])(P,O,$,!1,null,null,null),L=U.exports,N={components:{SignUpForm:L}},F=N,H=(a("5996"),Object(p["a"])(F,I,j,!1,null,"3e5afbd2",null)),B=H.exports,R={components:{addBtn:f,SignInModal:E,SignUpModal:B},data:function(){return{mainLinks:[{tooltip:"Explore",invisible:!1,src:"explore.svg"},{tooltip:"Premium",invisible:!1,src:"premium.svg"},{tooltip:"Empty",invisible:!0,src:"avatar.png"},{tooltip:"Following",invisible:!1,src:"following.svg"},{tooltip:"Search",invisible:!1,src:"search.svg"}],sideLinks:[{tooltip:"One"}]}}},A=R,q=(a("a29c"),Object(p["a"])(A,i,o,!1,null,"504fd0fe",null)),J=q.exports,z={components:{NavBar:J}},G=z,Y=(a("5c0b"),Object(p["a"])(G,n,s,!1,null,null,null)),T=Y.exports,D=a("8c4f"),W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"card-group",attrs:{id:"post-wrap"}},t._l(12,(function(t,e){return a("CardPost",{key:e})})),1)])},V=[],K=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card bg-img shadow border-0 rounded-all",style:{backgroundImage:"url("+a("1771")("./"+t.image)+")"}},[r("div",{staticClass:"d-flex card-img-overlay bg-transparent"},[r("div",{staticClass:"card-title bg-light rounded-all card-profile shadow-lg",style:{backgroundImage:"url("+a("1771")("./"+t.profile)+")"}},[t._m(0)]),t._m(1)])])},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile-details mt-1"},[a("span",{staticClass:"h6"},[a("span",{staticClass:"text-dark font-weight-bold"},[t._v("@UserName")]),a("br"),a("span",{staticClass:"text-muted"},[t._v("6 days ago - 03/05/2020")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"feed align-self-end"},[a("div",{staticClass:"strip p-3 rounded-all shadow d-flex justify-content-around"},[a("span",[t._v("Like")]),a("span",[t._v("Share")]),a("span",[t._v("Coment")])])])}],X={data:function(){return{image:"card.jpg",profile:"Male-Avatar.png"}}},Z=X,tt=(a("7fa0"),Object(p["a"])(Z,K,Q,!1,null,"63fb4262",null)),et=tt.exports,at={name:"Home",components:{CardPost:et}},rt=at,nt=(a("2d65"),Object(p["a"])(rt,W,V,!1,null,"dfb3c936",null)),st=nt.exports;r["default"].use(D["a"]);var it=[{path:"/",name:"Home",component:st},{path:"/menu",name:"Home",component:st},{path:"/0",name:"Home",component:st}],ot=new D["a"]({routes:it,scrollBehavior:function(){return{x:0,y:0}}}),lt=ot,ut=a("2f62");r["default"].use(ut["a"]);var ct=new ut["a"].Store({state:{},mutations:{},actions:{},modules:{}}),dt=(a("4989"),a("ab8b"),a("3e48"),a("2dd8"),a("5f5b")),pt=a("b1e0");a("f9e3");r["default"].use(dt["a"]),r["default"].use(pt["a"]),new r["default"]({router:lt,store:ct,render:function(t){return t(T)}}).$mount("#app")},"578b":function(t,e,a){},5996:function(t,e,a){"use strict";var r=a("0581"),n=a.n(r);n.a},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"6fb7":function(t,e,a){t.exports=a.p+"img/explore.939d5235.svg"},"76f4":function(t,e,a){},"7ab2":function(t,e,a){t.exports=a.p+"img/following.7ae84624.svg"},"7fa0":function(t,e,a){"use strict";var r=a("76f4"),n=a.n(r);n.a},"8b12":function(t,e,a){"use strict";var r=a("4b8e"),n=a.n(r);n.a},"9c0c":function(t,e,a){},a1e4:function(t,e,a){},a29c:function(t,e,a){"use strict";var r=a("3be9"),n=a.n(r);n.a},a2e3:function(t,e,a){"use strict";var r=a("578b"),n=a.n(r);n.a},b082:function(t,e,a){t.exports=a.p+"img/Male-Avatar.54075a4d.png"},cf05:function(t,e,a){t.exports=a.p+"img/logo.9d297ddd.png"},eef4:function(t,e,a){t.exports=a.p+"img/add.2d19df0d.svg"}});
//# sourceMappingURL=app.5ec6cbc6.js.map