import{w as x,q as M}from"./iframe.cb632305.js";import"./es.map.constructor.ea4f1cd2.js";import{j as l,r as v}from"./jsx-runtime.80eafe50.js";import{r as y,R as P}from"./index.b6f92d63.js";function d(r){return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(r)}function D(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function E(r,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}function T(r,e,n){return e&&E(r.prototype,e),n&&E(r,n),Object.defineProperty(r,"prototype",{writable:!1}),r}function k(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&w(r,e)}function w(r,e){return w=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},w(r,e)}function A(r){var e=F();return function(){var t=h(r),o;if(e){var i=h(this).constructor;o=Reflect.construct(t,arguments,i)}else o=t.apply(this,arguments);return j(this,o)}}function j(r,e){if(e&&(d(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return N(r)}function N(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function F(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function h(r){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},h(r)}function O(r,e,n,t,o,i,a){try{var u=r[i](a),c=u.value}catch(f){n(f);return}u.done?e(c):Promise.resolve(c).then(t,o)}function g(r){return function(){var e=this,n=arguments;return new Promise(function(t,o){var i=r.apply(e,n);function a(c){O(i,t,o,a,u,"next",c)}function u(c){O(i,t,o,a,u,"throw",c)}a(void 0)})}}var s=x.FRAMEWORK_OPTIONS,m=new Map,V=function(e,n){var t=n.id,o=n.component;if(!o)throw new Error("Unable to render story ".concat(t," as the component annotation is missing from the default export"));return l(o,{...e})},I=function(){var r=g(regeneratorRuntime.mark(function e(n,t){var o;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,U(t);case 2:return o=a.sent,a.abrupt("return",new Promise(function(u){o?(o.render(n),setTimeout(function(){u(null)},0)):P.render(n,t,function(){return u(null)})}));case 4:case"end":return a.stop()}},e)}));return function(n,t){return r.apply(this,arguments)}}(),W=y.exports.version&&(y.exports.version.startsWith("18")||y.exports.version.startsWith("0.0.0")),B=(s==null?void 0:s.legacyRootApi)!==!0,S=B&&W,C=function(e){var n=m.get(e);n&&S?(n.unmount(),m.delete(e)):P.unmountComponentAtNode(e)},U=function(){var r=g(regeneratorRuntime.mark(function e(n){var t,o;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(S){a.next=2;break}return a.abrupt("return",null);case 2:if(t=m.get(n),t){a.next=9;break}return a.next=6,M(()=>import("./client.37e177c4.js").then(u=>u.c),["assets/client.37e177c4.js","assets/index.b6f92d63.js","assets/iframe.cb632305.js","assets/jsx-runtime.80eafe50.js"]);case 6:o=a.sent.default,t=o.createRoot(n),m.set(n,t);case 9:return a.abrupt("return",t);case 10:case"end":return a.stop()}},e)}));return function(n){return r.apply(this,arguments)}}(),$=function(r){k(n,r);var e=A(n);function n(){var t;D(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i)),t.state={hasError:!1},t}return T(n,[{key:"componentDidMount",value:function(){var o=this.state.hasError,i=this.props.showMain;o||i()}},{key:"componentDidCatch",value:function(o){var i=this.props.showException;i(o)}},{key:"render",value:function(){var o=this.state.hasError,i=this.props.children;return o?null:i}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),n}(v.exports.Component),_=s!=null&&s.strictMode?v.exports.StrictMode:v.exports.Fragment;function H(r,e){return R.apply(this,arguments)}function R(){return R=g(regeneratorRuntime.mark(function r(e,n){var t,o,i,a,u,c,f,b;return regeneratorRuntime.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return t=e.storyContext,o=e.unboundStoryFn,i=e.showMain,a=e.showException,u=e.forceRemount,c=o,f=l($,{showMain:i,showException:a,children:l(c,{...t})}),b=_?l(_,{children:f}):f,u&&C(n),p.next=7,I(b,n);case 7:case"end":return p.stop()}},r)})),R.apply(this,arguments)}var J={framework:"react"};export{J as parameters,V as render,H as renderToDOM};
//# sourceMappingURL=config.9254b2d0.js.map
