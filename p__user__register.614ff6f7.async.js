(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"14J3":function(T,j,e){"use strict";var m=e("cIOH"),v=e.n(m),g=e("1GLa")},"5rEg":function(T,j,e){"use strict";var m=e("mh/l"),v=e("rePB"),g=e("q1tI"),B=e("TSYQ"),F=e.n(B),Q=e("H84U"),ge=function(_){return g.createElement(Q.a,null,function(M){var f,x=M.getPrefixCls,q=M.direction,$=_.prefixCls,Y=_.className,ne=Y===void 0?"":Y,I=x("input-group",$),w=F()(I,(f={},Object(v.a)(f,"".concat(I,"-lg"),_.size==="large"),Object(v.a)(f,"".concat(I,"-sm"),_.size==="small"),Object(v.a)(f,"".concat(I,"-compact"),_.compact),Object(v.a)(f,"".concat(I,"-rtl"),q==="rtl"),f),ne);return g.createElement("span",{className:w,style:_.style,onMouseEnter:_.onMouseEnter,onMouseLeave:_.onMouseLeave,onFocus:_.onFocus,onBlur:_.onBlur},_.children)})},d=ge,k=e("wx14"),S=e("c+Xe"),ae=e("l+S1"),ie=e("2/Rp"),A=e("3Nzz"),N=e("0n0R"),Ee=function(u,_){var M={};for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&_.indexOf(f)<0&&(M[f]=u[f]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,f=Object.getOwnPropertySymbols(u);x<f.length;x++)_.indexOf(f[x])<0&&Object.prototype.propertyIsEnumerable.call(u,f[x])&&(M[f[x]]=u[f[x]]);return M},H=g.forwardRef(function(u,_){var M,f=u.prefixCls,x=u.inputPrefixCls,q=u.className,$=u.size,Y=u.suffix,ne=u.enterButton,I=ne===void 0?!1:ne,w=u.addonAfter,z=u.loading,ee=u.disabled,J=u.onSearch,le=u.onChange,X=Ee(u,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange"]),V=g.useContext(Q.b),se=V.getPrefixCls,me=V.direction,Z=g.useContext(A.b),te=$||Z,ue=g.useRef(null),he=function(h){h&&h.target&&h.type==="click"&&J&&J(h.target.value,h),le&&le(h)},s=function(h){var E;document.activeElement===((E=ue.current)===null||E===void 0?void 0:E.input)&&h.preventDefault()},t=function(h){var E;J&&J((E=ue.current)===null||E===void 0?void 0:E.input.value,h)},n=se("input-search",f),r=se("input",x),a=typeof I=="boolean"||typeof I=="undefined"?g.createElement(ae.a,null):null,i="".concat(n,"-button"),o,c=I||{},P=c.type&&c.type.__ANT_BUTTON===!0;P||c.type==="button"?o=Object(N.a)(c,Object(k.a)({onMouseDown:s,onClick:t,key:"enterButton"},P?{className:i,size:te}:{})):o=g.createElement(ie.a,{className:i,type:I?"primary":void 0,size:te,disabled:ee,key:"enterButton",onMouseDown:s,onClick:t,loading:z,icon:a},I),w&&(o=[o,Object(N.a)(w,{key:"addonAfter"})]);var O=F()(n,(M={},Object(v.a)(M,"".concat(n,"-rtl"),me==="rtl"),Object(v.a)(M,"".concat(n,"-").concat(te),!!te),Object(v.a)(M,"".concat(n,"-with-button"),!!I),M),q);return g.createElement(m.a,Object(k.a)({ref:Object(S.a)(ue,_),onPressEnter:t},X,{size:te,prefixCls:r,addonAfter:o,suffix:Y,onChange:he,className:O,disabled:ee}))});H.displayName="Search";var pe=H,ve=e("whJP"),fe=e("ODXe"),U=e("bT9E"),K=e("9BLJ"),l=e("fHMl"),b=function(u,_){var M={};for(var f in u)Object.prototype.hasOwnProperty.call(u,f)&&_.indexOf(f)<0&&(M[f]=u[f]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,f=Object.getOwnPropertySymbols(u);x<f.length;x++)_.indexOf(f[x])<0&&Object.prototype.propertyIsEnumerable.call(u,f[x])&&(M[f[x]]=u[f[x]]);return M},_e={click:"onClick",hover:"onMouseOver"},Pe=g.forwardRef(function(u,_){var M=Object(g.useState)(!1),f=Object(fe.a)(M,2),x=f[0],q=f[1],$=function(){var w=u.disabled;w||q(!x)},Y=function(w){var z,ee=u.action,J=u.iconRender,le=J===void 0?function(){return null}:J,X=_e[ee]||"",V=le(x),se=(z={},Object(v.a)(z,X,$),Object(v.a)(z,"className","".concat(w,"-icon")),Object(v.a)(z,"key","passwordIcon"),Object(v.a)(z,"onMouseDown",function(Z){Z.preventDefault()}),Object(v.a)(z,"onMouseUp",function(Z){Z.preventDefault()}),z);return g.cloneElement(g.isValidElement(V)?V:g.createElement("span",null,V),se)},ne=function(w){var z=w.getPrefixCls,ee=u.className,J=u.prefixCls,le=u.inputPrefixCls,X=u.size,V=u.visibilityToggle,se=b(u,["className","prefixCls","inputPrefixCls","size","visibilityToggle"]),me=z("input",le),Z=z("input-password",J),te=V&&Y(Z),ue=F()(Z,ee,Object(v.a)({},"".concat(Z,"-").concat(X),!!X)),he=Object(k.a)(Object(k.a)({},Object(U.a)(se,["suffix","iconRender"])),{type:x?"text":"password",className:ue,prefixCls:me,suffix:te});return X&&(he.size=X),g.createElement(m.a,Object(k.a)({ref:_},he))};return g.createElement(Q.a,null,ne)});Pe.defaultProps={action:"click",visibilityToggle:!0,iconRender:function(_){return _?g.createElement(K.a,null):g.createElement(l.a,null)}},Pe.displayName="Password";var G=Pe;m.a.Group=d,m.a.Search=pe,m.a.TextArea=ve.a,m.a.Password=G;var ce=j.a=m.a},"9BLJ":function(T,j,e){"use strict";var m=e("q1tI"),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},g=v,B=e("6VBw"),F=function(d,k){return m.createElement(B.a,Object.assign({},d,{ref:k,icon:g}))};F.displayName="EyeOutlined";var Q=j.a=m.forwardRef(F)},BMrR:function(T,j,e){"use strict";var m=e("qrJ5");j.a=m.a},CFYs:function(T,j,e){"use strict";var m=e("rePB"),v=e("wx14"),g=e("1OyB"),B=e("vuIU"),F=e("JX7q"),Q=e("Ji7U"),ge=e("LK+K"),d=e("q1tI"),k=e("TSYQ"),S=e.n(k),ae=e("bT9E"),ie=e("4i/N"),A=e("bRQS"),N=e("jO45"),Ee=e("jN4g"),H=e("H84U"),pe=e("CWQg"),ve=e("uaoM"),fe=e("AJpP");function U(s){return!s||s<0?0:s>100?100:s}function K(s){var t=s.success,n=s.successPercent,r=n;return t&&"progress"in t&&(Object(ve.a)(!1,"Progress","`success.progress` is deprecated. Please use `success.percent` instead."),r=t.progress),t&&"percent"in t&&(r=t.percent),r}var l=function(s,t){var n={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&t.indexOf(r)<0&&(n[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(s);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(s,r[a])&&(n[r[a]]=s[r[a]]);return n},b=function(t){var n=[];return Object.keys(t).forEach(function(r){var a=parseFloat(r.replace(/%/g,""));isNaN(a)||n.push({key:a,value:t[r]})}),n=n.sort(function(r,a){return r.key-a.key}),n.map(function(r){var a=r.key,i=r.value;return"".concat(i," ").concat(a,"%")}).join(", ")},_e=function(t,n){var r=t.from,a=r===void 0?fe.presetPrimaryColors.blue:r,i=t.to,o=i===void 0?fe.presetPrimaryColors.blue:i,c=t.direction,P=c===void 0?n==="rtl"?"to left":"to right":c,O=l(t,["from","to","direction"]);if(Object.keys(O).length!==0){var y=b(O);return{backgroundImage:"linear-gradient(".concat(P,", ").concat(y,")")}}return{backgroundImage:"linear-gradient(".concat(P,", ").concat(a,", ").concat(o,")")}},Pe=function(t){var n=t.prefixCls,r=t.direction,a=t.percent,i=t.strokeWidth,o=t.size,c=t.strokeColor,P=t.strokeLinecap,O=t.children,y=t.trailColor,h=t.success,E=c&&typeof c!="string"?_e(c,r):{background:c},L=y?{backgroundColor:y}:void 0,W=Object(v.a)({width:"".concat(U(a),"%"),height:i||(o==="small"?6:8),borderRadius:P==="square"?0:""},E),C=K(t),p={width:"".concat(U(C),"%"),height:i||(o==="small"?6:8),borderRadius:P==="square"?0:"",backgroundColor:h==null?void 0:h.strokeColor},R=C!==void 0?d.createElement("div",{className:"".concat(n,"-success-bg"),style:p}):null;return d.createElement(d.Fragment,null,d.createElement("div",{className:"".concat(n,"-outer")},d.createElement("div",{className:"".concat(n,"-inner"),style:L},d.createElement("div",{className:"".concat(n,"-bg"),style:W}),R)),O)},G=Pe,ce=e("ODXe"),u=e("Ff2n"),_={className:"",percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,style:{},trailColor:"#D9D9D9",trailWidth:1},M=function(t){var n=t.map(function(){return Object(d.useRef)()}),r=Object(d.useRef)(null);return Object(d.useEffect)(function(){var a=Date.now(),i=!1;Object.keys(n).forEach(function(o){var c=n[o].current;if(!!c){i=!0;var P=c.style;P.transitionDuration=".3s, .3s, .3s, .06s",r.current&&a-r.current<100&&(P.transitionDuration="0s, 0s")}}),i&&(r.current=Date.now())}),[n]},f=function(t){var n=t.className,r=t.percent,a=t.prefixCls,i=t.strokeColor,o=t.strokeLinecap,c=t.strokeWidth,P=t.style,O=t.trailColor,y=t.trailWidth,h=t.transition,E=Object(u.a)(t,["className","percent","prefixCls","strokeColor","strokeLinecap","strokeWidth","style","trailColor","trailWidth","transition"]);delete E.gapPosition;var L=Array.isArray(r)?r:[r],W=Array.isArray(i)?i:[i],C=M(L),p=Object(ce.a)(C,1),R=p[0],D=c/2,oe=100-c/2,de="M ".concat(o==="round"?D:0,",").concat(D,`
         L `).concat(o==="round"?oe:100,",").concat(D),ye="0 0 100 ".concat(c),Ce=0;return d.createElement("svg",Object(v.a)({className:S()("".concat(a,"-line"),n),viewBox:ye,preserveAspectRatio:"none",style:P},E),d.createElement("path",{className:"".concat(a,"-line-trail"),d:de,strokeLinecap:o,stroke:O,strokeWidth:y||c,fillOpacity:"0"}),L.map(function(je,be){var re=1;switch(o){case"round":re=1-c/100;break;case"square":re=1-c/2/100;break;default:re=1;break}var Oe={strokeDasharray:"".concat(je*re,"px, 100px"),strokeDashoffset:"-".concat(Ce,"px"),transition:h||"stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear"},De=W[be]||W[W.length-1];return Ce+=je,d.createElement("path",{key:be,className:"".concat(a,"-line-path"),d:de,strokeLinecap:o,stroke:De,strokeWidth:c,fillOpacity:"0",ref:R[be],style:Oe})}))};f.defaultProps=_,f.displayName="Line";var x=f,q=0;function $(s){return+s.replace("%","")}function Y(s){return Array.isArray(s)?s:[s]}function ne(s,t,n,r){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,i=arguments.length>5?arguments[5]:void 0,o=50-r/2,c=0,P=-o,O=0,y=-2*o;switch(i){case"left":c=-o,P=0,O=2*o,y=0;break;case"right":c=o,P=0,O=-2*o,y=0;break;case"bottom":P=o,y=2*o;break;default:}var h="M 50,50 m ".concat(c,",").concat(P,`
   a `).concat(o,",").concat(o," 0 1 1 ").concat(O,",").concat(-y,`
   a `).concat(o,",").concat(o," 0 1 1 ").concat(-O,",").concat(y),E=Math.PI*2*o,L={stroke:typeof n=="string"?n:void 0,strokeDasharray:"".concat(t/100*(E-a),"px ").concat(E,"px"),strokeDashoffset:"-".concat(a/2+s/100*(E-a),"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"};return{pathString:h,pathStyle:L}}var I=function(t){var n=t.prefixCls,r=t.strokeWidth,a=t.trailWidth,i=t.gapDegree,o=t.gapPosition,c=t.trailColor,P=t.strokeLinecap,O=t.style,y=t.className,h=t.strokeColor,E=t.percent,L=Object(u.a)(t,["prefixCls","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"]),W=d.useMemo(function(){return q+=1,q},[]),C=ne(0,100,c,r,i,o),p=C.pathString,R=C.pathStyle,D=Y(E),oe=Y(h),de=oe.find(function(re){return Object.prototype.toString.call(re)==="[object Object]"}),ye=M(D),Ce=Object(ce.a)(ye,1),je=Ce[0],be=function(){var Oe=0;return D.map(function(De,xe){var Me=oe[xe]||oe[oe.length-1],Le=Object.prototype.toString.call(Me)==="[object Object]"?"url(#".concat(n,"-gradient-").concat(W,")"):"",Ie=ne(Oe,De,Me,r,i,o);return Oe+=De,d.createElement("path",{key:xe,className:"".concat(n,"-circle-path"),d:Ie.pathString,stroke:Le,strokeLinecap:P,strokeWidth:r,opacity:De===0?0:1,fillOpacity:"0",style:Ie.pathStyle,ref:je[xe]})})};return d.createElement("svg",Object(v.a)({className:S()("".concat(n,"-circle"),y),viewBox:"0 0 100 100",style:O},L),de&&d.createElement("defs",null,d.createElement("linearGradient",{id:"".concat(n,"-gradient-").concat(W),x1:"100%",y1:"0%",x2:"0%",y2:"0%"},Object.keys(de).sort(function(re,Oe){return $(re)-$(Oe)}).map(function(re,Oe){return d.createElement("stop",{key:Oe,offset:re,stopColor:de[re]})}))),d.createElement("path",{className:"".concat(n,"-circle-trail"),d:p,stroke:c,strokeLinecap:P,strokeWidth:a||r,fillOpacity:"0",style:R}),be().reverse())};I.defaultProps=_,I.displayName="Circle";var w=I,z={Line:x,Circle:w};function ee(s){var t=s.percent,n=s.success,r=s.successPercent,a=U(t),i=K({success:n,successPercent:r});return i?[U(i),U(a-U(i))]:a}function J(s){var t=s.success,n=s.strokeColor,r=s.successPercent,a=n||null,i=K({success:t,successPercent:r});return i?[fe.presetPrimaryColors.green,a]:a}var le=function(t){var n=t.prefixCls,r=t.width,a=t.strokeWidth,i=t.trailColor,o=t.strokeLinecap,c=t.gapPosition,P=t.gapDegree,O=t.type,y=t.children,h=r||120,E={width:h,height:h,fontSize:h*.15+6},L=a||6,W=c||O==="dashboard"&&"bottom"||"top",C=function(){if(P||P===0)return P;if(O==="dashboard")return 75},p=J(t),R=Object.prototype.toString.call(p)==="[object Object]",D=S()("".concat(n,"-inner"),Object(m.a)({},"".concat(n,"-circle-gradient"),R));return d.createElement("div",{className:D,style:E},d.createElement(w,{percent:ee(t),strokeWidth:L,trailWidth:L,strokeColor:p,strokeLinecap:o,trailColor:i,prefixCls:n,gapDegree:C(),gapPosition:W}),y)},X=le,V=function(t){for(var n=t.size,r=t.steps,a=t.percent,i=a===void 0?0:a,o=t.strokeWidth,c=o===void 0?8:o,P=t.strokeColor,O=t.trailColor,y=t.prefixCls,h=t.children,E=Math.round(r*(i/100)),L=n==="small"?2:14,W=[],C=0;C<r;C+=1)W.push(d.createElement("div",{key:C,className:S()("".concat(y,"-steps-item"),Object(m.a)({},"".concat(y,"-steps-item-active"),C<=E-1)),style:{backgroundColor:C<=E-1?P:O,width:L,height:c}}));return d.createElement("div",{className:"".concat(y,"-steps-outer")},W,h)},se=V,me=function(s,t){var n={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&t.indexOf(r)<0&&(n[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(s);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(s,r[a])&&(n[r[a]]=s[r[a]]);return n},Z=Object(pe.a)("line","circle","dashboard"),te=Object(pe.a)("normal","exception","active","success"),ue=function(s){Object(Q.a)(n,s);var t=Object(ge.a)(n);function n(){var r;return Object(g.a)(this,n),r=t.apply(this,arguments),r.renderProgress=function(a){var i,o=a.getPrefixCls,c=a.direction,P=Object(F.a)(r),O=P.props,y=O.prefixCls,h=O.className,E=O.size,L=O.type,W=O.steps,C=O.showInfo,p=O.strokeColor,R=me(O,["prefixCls","className","size","type","steps","showInfo","strokeColor"]),D=o("progress",y),oe=r.getProgressStatus(),de=r.renderProcessInfo(D,oe);Object(ve.a)(!("successPercent"in O),"Progress","`successPercent` is deprecated. Please use `success.percent` instead.");var ye;L==="line"?ye=W?d.createElement(se,Object(v.a)({},r.props,{strokeColor:typeof p=="string"?p:void 0,prefixCls:D,steps:W}),de):d.createElement(G,Object(v.a)({},r.props,{prefixCls:D,direction:c}),de):(L==="circle"||L==="dashboard")&&(ye=d.createElement(X,Object(v.a)({},r.props,{prefixCls:D,progressStatus:oe}),de));var Ce=S()(D,(i={},Object(m.a)(i,"".concat(D,"-").concat(L==="dashboard"&&"circle"||W&&"steps"||L),!0),Object(m.a)(i,"".concat(D,"-status-").concat(oe),!0),Object(m.a)(i,"".concat(D,"-show-info"),C),Object(m.a)(i,"".concat(D,"-").concat(E),E),Object(m.a)(i,"".concat(D,"-rtl"),c==="rtl"),i),h);return d.createElement("div",Object(v.a)({},Object(ae.a)(R,["status","format","trailColor","strokeWidth","width","gapDegree","gapPosition","strokeLinecap","percent","success","successPercent"]),{className:Ce}),ye)},r}return Object(B.a)(n,[{key:"getPercentNumber",value:function(){var a=this.props.percent,i=a===void 0?0:a,o=K(this.props);return parseInt(o!==void 0?o.toString():i.toString(),10)}},{key:"getProgressStatus",value:function(){var a=this.props.status;return te.indexOf(a)<0&&this.getPercentNumber()>=100?"success":a||"normal"}},{key:"renderProcessInfo",value:function(a,i){var o=this.props,c=o.showInfo,P=o.format,O=o.type,y=o.percent,h=K(this.props);if(!c)return null;var E,L=P||function(C){return"".concat(C,"%")},W=O==="line";return P||i!=="exception"&&i!=="success"?E=L(U(y),U(h)):i==="exception"?E=W?d.createElement(Ee.a,null):d.createElement(ie.a,null):i==="success"&&(E=W?d.createElement(N.a,null):d.createElement(A.a,null)),d.createElement("span",{className:"".concat(a,"-text"),title:typeof E=="string"?E:void 0},E)}},{key:"render",value:function(){return d.createElement(H.a,null,this.renderProgress)}}]),n}(d.Component);ue.defaultProps={type:"line",percent:0,showInfo:!0,trailColor:null,size:"default",gapDegree:void 0,strokeLinecap:"round"};var he=j.a=ue},Kvyg:function(T,j,e){},MXD1:function(T,j,e){"use strict";var m=e("cIOH"),v=e.n(m),g=e("Kvyg"),B=e.n(g)},Q9mQ:function(T,j,e){"use strict";var m=e("cIOH"),v=e.n(m),g=e("UADf"),B=e.n(g)},UADf:function(T,j,e){},a3w7:function(T,j,e){"use strict";e.r(j);var m=e("14J3"),v=e("BMrR"),g=e("+L6B"),B=e("2/Rp"),F=e("jCWc"),Q=e("kPKH"),ge=e("Q9mQ"),d=e("diRs"),k=e("MXD1"),S=e("CFYs"),ae=e("k1fw"),ie=e("miYZ"),A=e("tsqr"),N=e("tJVT"),Ee=e("5NDa"),H=e("5rEg"),pe=e("OaEy"),ve=e("2fM7"),fe=e("y8nQ"),U=e("Vl3Y"),K=e("q1tI"),l=e.n(K),b=e("9kvl"),_e=e("uYtH"),Pe=e("sYde"),G=e.n(Pe),ce=U.a.Item,u=ve.a.Option,_=H.a.Group,M={ok:l.a.createElement("div",{className:G.a.success},l.a.createElement(b.a,{id:"userandregister.strength.strong"})),pass:l.a.createElement("div",{className:G.a.warning},l.a.createElement(b.a,{id:"userandregister.strength.medium"})),poor:l.a.createElement("div",{className:G.a.error},l.a.createElement(b.a,{id:"userandregister.strength.short"}))},f={ok:"success",pass:"normal",poor:"exception"},x=function($){var Y=$.submitting,ne=$.dispatch,I=$.userAndregister,w=Object(K.useState)(0),z=Object(N.a)(w,2),ee=z[0],J=z[1],le=Object(K.useState)(!1),X=Object(N.a)(le,2),V=X[0],se=X[1],me=Object(K.useState)("86"),Z=Object(N.a)(me,2),te=Z[0],ue=Z[1],he=Object(K.useState)(!1),s=Object(N.a)(he,2),t=s[0],n=s[1],r=!1,a,i=U.a.useForm(),o=Object(N.a)(i,1),c=o[0];Object(K.useEffect)(function(){if(!!I){var C=c.getFieldValue("mail");I.status==="ok"&&(A.default.success("\u6CE8\u518C\u6210\u529F\uFF01"),b.e.push({pathname:"/user/register-result",state:{account:C}}))}},[I]),Object(K.useEffect)(function(){return function(){clearInterval(a)}},[]);var P=function(){var p=59;J(p),a=window.setInterval(function(){p-=1,J(p),p===0&&clearInterval(a)},1e3)},O=function(){var p=c.getFieldValue("password");return p&&p.length>9?"ok":p&&p.length>5?"pass":"poor"},y=function(p){ne({type:"userAndregister/submit",payload:Object(ae.a)(Object(ae.a)({},p),{},{prefix:te})})},h=function(p,R){var D=Promise;return R&&R!==c.getFieldValue("password")?D.reject(Object(b.d)({id:"userandregister.password.twice"})):D.resolve()},E=function(p,R){var D=Promise;return R?(V||se(!!R),n(!t),R.length<6?D.reject(""):(R&&r&&c.validateFields(["confirm"]),D.resolve())):(se(!!R),D.reject(Object(b.d)({id:"userandregister.password.required"})))},L=function(p){ue(p)},W=function(){var p=c.getFieldValue("password"),R=O();return p&&p.length?l.a.createElement("div",{className:G.a["progress-".concat(R)]},l.a.createElement(S.a,{status:f[R],className:G.a.progress,strokeWidth:6,percent:p.length*10>100?100:p.length*10,showInfo:!1})):null};return l.a.createElement("div",{className:G.a.main},l.a.createElement("h3",null,l.a.createElement(b.a,{id:"userandregister.register.register"})),l.a.createElement(U.a,{form:c,name:"UserRegister",onFinish:y},l.a.createElement(ce,{name:"mail",rules:[{required:!0,message:Object(b.d)({id:"userandregister.email.required"})},{type:"email",message:Object(b.d)({id:"userandregister.email.wrong-format"})}]},l.a.createElement(H.a,{size:"large",placeholder:Object(b.d)({id:"userandregister.email.placeholder"})})),l.a.createElement(d.a,{getPopupContainer:function(p){return p&&p.parentNode?p.parentNode:p},content:V&&l.a.createElement("div",{style:{padding:"4px 0"}},M[O()],W(),l.a.createElement("div",{style:{marginTop:10}},l.a.createElement(b.a,{id:"userandregister.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:V},l.a.createElement(ce,{name:"password",className:c.getFieldValue("password")&&c.getFieldValue("password").length>0&&G.a.password,rules:[{validator:E}]},l.a.createElement(H.a,{size:"large",type:"password",placeholder:Object(b.d)({id:"userandregister.password.placeholder"})}))),l.a.createElement(ce,{name:"confirm",rules:[{required:!0,message:Object(b.d)({id:"userandregister.confirm-password.required"})},{validator:h}]},l.a.createElement(H.a,{size:"large",type:"password",placeholder:Object(b.d)({id:"userandregister.confirm-password.placeholder"})})),l.a.createElement(_,{compact:!0},l.a.createElement(ve.a,{size:"large",value:te,onChange:L,style:{width:"20%"}},l.a.createElement(u,{value:"86"},"+86"),l.a.createElement(u,{value:"87"},"+87")),l.a.createElement(ce,{style:{width:"80%"},name:"mobile",rules:[{required:!0,message:Object(b.d)({id:"userandregister.phone-number.required"})},{pattern:/^\d{11}$/,message:Object(b.d)({id:"userandregister.phone-number.wrong-format"})}]},l.a.createElement(H.a,{size:"large",placeholder:Object(b.d)({id:"userandregister.phone-number.placeholder"})}))),l.a.createElement(v.a,{gutter:8},l.a.createElement(Q.a,{span:16},l.a.createElement(ce,{name:"captcha",rules:[{required:!0,message:Object(b.d)({id:"userandregister.verification-code.required"})}]},l.a.createElement(H.a,{size:"large",placeholder:Object(b.d)({id:"userandregister.verification-code.placeholder"})}))),l.a.createElement(Q.a,{span:8},l.a.createElement(B.a,{size:"large",disabled:!!ee,className:G.a.getCaptcha,onClick:P},ee?"".concat(ee," s"):Object(b.d)({id:"userandregister.register.get-verification-code"})))),l.a.createElement(ce,null,l.a.createElement(B.a,{size:"large",loading:Y,className:G.a.submit,type:"primary",htmlType:"submit"},l.a.createElement(b.a,{id:"userandregister.register.register"})),l.a.createElement(_e.a,{className:G.a.login,to:"/user/login"},l.a.createElement(b.a,{id:"userandregister.register.sign-in"})))))};j.default=Object(b.c)(function(q){var $=q.userAndregister,Y=q.loading;return{userAndregister:$,submitting:Y.effects["userAndregister/submit"]}})(x)},bogI:function(T,j,e){"use strict";e.d(j,"a",function(){return m});var m=function(g){if(!g)return null;var B=typeof g=="function";return B?g():g}},diRs:function(T,j,e){"use strict";var m=e("wx14"),v=e("q1tI"),g=e.n(v),B=e("3S7+"),F=e("H84U"),Q=e("bogI"),ge=e("EXcs"),d=function(S,ae){var ie={};for(var A in S)Object.prototype.hasOwnProperty.call(S,A)&&ae.indexOf(A)<0&&(ie[A]=S[A]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function")for(var N=0,A=Object.getOwnPropertySymbols(S);N<A.length;N++)ae.indexOf(A[N])<0&&Object.prototype.propertyIsEnumerable.call(S,A[N])&&(ie[A[N]]=S[A[N]]);return ie},k=v.forwardRef(function(S,ae){var ie=S.prefixCls,A=S.title,N=S.content,Ee=d(S,["prefixCls","title","content"]),H=v.useContext(F.b),pe=H.getPrefixCls,ve=function(l){return v.createElement(v.Fragment,null,A&&v.createElement("div",{className:"".concat(l,"-title")},Object(Q.a)(A)),v.createElement("div",{className:"".concat(l,"-inner-content")},Object(Q.a)(N)))},fe=pe("popover",ie),U=pe();return v.createElement(B.a,Object(m.a)({},Ee,{prefixCls:fe,ref:ae,overlay:ve(fe),transitionName:Object(ge.b)(U,"zoom-big",Ee.transitionName)}))});k.displayName="Popover",k.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}},j.a=k},fHMl:function(T,j,e){"use strict";var m=e("q1tI"),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},g=v,B=e("6VBw"),F=function(d,k){return m.createElement(B.a,Object.assign({},d,{ref:k,icon:g}))};F.displayName="EyeInvisibleOutlined";var Q=j.a=m.forwardRef(F)},jCWc:function(T,j,e){"use strict";var m=e("cIOH"),v=e.n(m),g=e("1GLa")},kPKH:function(T,j,e){"use strict";var m=e("/kpp");j.a=m.a},sYde:function(T,j,e){T.exports={main:"main___2kx2N",password:"password___2JDrd",getCaptcha:"getCaptcha___1oboe",submit:"submit___34wM2",login:"login___1qBuj",success:"success___3hl98",warning:"warning___2i2r2",error:"error___3JfQo","progress-pass":"progress-pass___BM1Xu",progress:"progress___2s68u"}}}]);