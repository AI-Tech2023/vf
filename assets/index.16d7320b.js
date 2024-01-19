import{r as s,j as _}from"./jsx-runtime.80eafe50.js";import{a as O,c as I}from"./functional.432cc2b3.js";import{s as j}from"./animation.e67bfb17.js";function B(n,e){if(n==null)return{};var r={},t=Object.keys(n),o,i;for(i=0;i<t.length;i++)o=t[i],!(e.indexOf(o)>=0)&&(r[o]=n[o]);return r}var N=s.exports.useLayoutEffect,M=function(e){var r=s.exports.useRef(e);return N(function(){r.current=e}),r},R=function(e,r){if(typeof e=="function"){e(r);return}e.current=r},V=function(e,r){var t=s.exports.useRef();return s.exports.useCallback(function(o){e.current=o,t.current&&R(t.current,null),t.current=r,r&&R(r,o)},[r])},w={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},Y=function(e){Object.keys(w).forEach(function(r){e.style.setProperty(r,w[r],"important")})},T=Y,a=null,L=function(e,r){var t=e.scrollHeight;return r.sizingStyle.boxSizing==="border-box"?t+r.borderSize:t-r.paddingSize};function K(n,e,r,t){r===void 0&&(r=1),t===void 0&&(t=1/0),a||(a=document.createElement("textarea"),a.setAttribute("tabindex","-1"),a.setAttribute("aria-hidden","true"),T(a)),a.parentNode===null&&document.body.appendChild(a);var o=n.paddingSize,i=n.borderSize,d=n.sizingStyle,p=d.boxSizing;Object.keys(d).forEach(function(x){var v=x;a.style[v]=d[v]}),T(a),a.value=e;var u=L(a,n);a.value=e,u=L(a,n),a.value="x";var h=a.scrollHeight-o,l=h*r;p==="border-box"&&(l=l+o+i),u=Math.max(l,u);var f=h*t;return p==="border-box"&&(f=f+o+i),u=Math.min(f,u),[u,h]}var H=function(){},P=function(e,r){return e.reduce(function(t,o){return t[o]=r[o],t},{})},q=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],G=!!document.documentElement.currentStyle,U=function(e){var r=window.getComputedStyle(e);if(r===null)return null;var t=P(q,r),o=t.boxSizing;if(o==="")return null;G&&o==="border-box"&&(t.width=parseFloat(t.width)+parseFloat(t.borderRightWidth)+parseFloat(t.borderLeftWidth)+parseFloat(t.paddingRight)+parseFloat(t.paddingLeft)+"px");var i=parseFloat(t.paddingBottom)+parseFloat(t.paddingTop),d=parseFloat(t.borderBottomWidth)+parseFloat(t.borderTopWidth);return{sizingStyle:t,paddingSize:i,borderSize:d}},X=U;function $(n,e,r){var t=M(r);s.exports.useLayoutEffect(function(){var o=function(d){return t.current(d)};if(!!n)return n.addEventListener(e,o),function(){return n.removeEventListener(e,o)}},[])}var Z=function(e){$(window,"resize",e)},D=function(e){$(document.fonts,"loadingdone",e)},J=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],Q=function(e,r){var t=e.cacheMeasurements,o=e.maxRows,i=e.minRows,d=e.onChange,p=d===void 0?H:d,u=e.onHeightChange,h=u===void 0?H:u,l=B(e,J),f=l.value!==void 0,x=s.exports.useRef(null),v=V(x,r),z=s.exports.useRef(0),m=s.exports.useRef(),b=function(){var c=x.current,y=t&&m.current?m.current:X(c);if(!!y){m.current=y;var C=K(y,c.value||c.placeholder||"x",i,o),S=C[0],A=C[1];z.current!==S&&(z.current=S,c.style.setProperty("height",S+"px","important"),h(S,{rowHeight:A}))}},W=function(c){f||b(),p(c)};return s.exports.useLayoutEffect(b),Z(b),D(b),_("textarea",{...l,onChange:W,ref:v})},ee=s.exports.forwardRef(Q);const E={width:"calc(100% - 42px)",borderRadius:"$1 0 0 $1",height:"42px",borderRightWidth:0,fontFamily:"$default",fontSize:"$2"},te={boxSizing:"border-box",border:"1px solid rgba(115,115,118,0.3)",backgroundColor:"$white",boxShadow:"0 1px 12px $shadow2",trans:["border-color"],resize:"none"},re={border:"1px solid rgba(115,115,118,0.5)"},F=j(ee,{...te,...E,padding:"9px $4 10px",color:"$black","&:focus":{...re,...E,outline:"none"},"&::placeholder":{color:"$darkGrey"}}),g=s.exports.forwardRef(({onValueChange:n,onChange:e,rows:r=1,...t},o)=>{const i=I(e,d=>n(d.target.value));return _(F,{ref:o,...t,onChange:i,minRows:1,maxRows:5,style:{height:42}})}),ie=Object.assign(g,{Controlled:O(g,{defaultValue:""}),Container:F});try{g.displayName="Textarea",g.__docgenInfo={description:"A textarea form control.",displayName:"Textarea",props:{onValueChange:{defaultValue:null,description:"A callback that will be called with new values when the control is updated.",name:"onValueChange",required:!0,type:{name:"(value: string) => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Textarea/index.tsx#Textarea"]={docgenInfo:g.__docgenInfo,name:"Textarea",path:"src/components/Textarea/index.tsx#Textarea"})}catch{}export{ie as T,re as a,te as t};
//# sourceMappingURL=index.16d7320b.js.map
