(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{3:function(A,z){},"3bhQ":function(A,z,i){A.exports={miniChart:"miniChart___2Yuk_",chartContent:"chartContent___awm1X",chartLoading:"chartLoading___1ozjV"}},"8Css":function(A,z,i){A.exports={waterWave:"waterWave___1u9JF",text:"text___1hizQ",waterWaveCanvasWrapper:"waterWaveCanvasWrapper___3aCQs"}},"9K0G":function(A,z,i){A.exports={mapChart:"mapChart___3r4YD",pieCard:"pieCard___2sKUr"}},Btuk:function(A,z,i){A.exports={tagCloud:"tagCloud___2citH"}},Byy7:function(A,z,i){A.exports={activeChart:"activeChart___2Da-0",activeChartGrid:"activeChartGrid___22vIL",activeChartLegend:"activeChartLegend___WPeXM",dashedLine:"dashedLine___1G82Z",line:"line___2D8Zt"}},SPoe:function(A,z,i){A.exports={pie:"pie___2RkIw",chart:"chart___24B3n",hasLegend:"hasLegend___3AukS",legend:"legend___2X5LB",dot:"dot___3FTzl",line:"line___1NGf0",legendTitle:"legendTitle___3RIPp",percent:"percent___1FT0j",value:"value___23cmA",title:"title___2AWCT",total:"total___1LRVI",legendBlock:"legendBlock___iozAC"}},TnIb:function(A,z,i){"use strict";i.r(z);var pt=i("IzEo"),V=i("bx4M"),gt=i("14J3"),ne=i("BMrR"),yt=i("jCWc"),M=i("kPKH"),k=i("fWQN"),H=i("mtLc"),I=i("yKVA"),U=i("879j"),Et=i("aHsQ"),q=i("sGsY"),y=i("9kvl"),F=i("q1tI"),t=i.n(F),Ne=i("FRQA"),we=i("ZhIB"),fe=i.n(we),f=i("yP6+"),ue=i("0Owb");function pe(h){var l=h.style;l.height="100%";var s=parseInt("".concat(getComputedStyle(h).height),10),e=parseInt("".concat(getComputedStyle(h).paddingTop),10)+parseInt("".concat(getComputedStyle(h).paddingBottom),10);return s-e}function ge(h){if(!h)return 0;var l=h,s=pe(l),e=l.parentNode;return e&&(s=pe(e)),s}function Pe(){return function(h){var l=function(s){Object(I.a)(a,s);var e=Object(U.a)(a);function a(){var r;Object(k.a)(this,a);for(var n=arguments.length,c=new Array(n),d=0;d<n;d++)c[d]=arguments[d];return r=e.call.apply(e,[this].concat(c)),r.state={computedHeight:0},r.root=null,r.handleRoot=function(u){r.root=u},r}return Object(H.a)(a,[{key:"componentDidMount",value:function(){var n=this.props.height;if(!n&&this.root){var c=ge(this.root);this.setState({computedHeight:c}),c<1&&(c=ge(this.root),this.setState({computedHeight:c}))}}},{key:"render",value:function(){var n=this.props.height,c=this.state.computedHeight,d=n||c;return t.a.createElement("div",{ref:this.handleRoot},d>0&&t.a.createElement(h,Object(ue.a)({},this.props,{height:d})))}}]),a}(t.a.Component);return l}}var _=Pe,ye=f.Guide.Arc,Re=f.Guide.Html,me=f.Guide.Line,Be=function(l){switch(l){case"2":return"\u5DEE";case"4":return"\u4E2D";case"6":return"\u826F";case"8":return"\u4F18";default:return""}};f.Shape.registerShape&&f.Shape.registerShape("point","pointer",{drawShape:function(l,s){var e=l.points[0];e=this.parsePoint(e);var a=this.parsePoint({x:0,y:0});return s.addShape("line",{attrs:{x1:a.x,y1:a.y,x2:e.x,y2:e.y,stroke:l.color,lineWidth:2,lineCap:"round"}}),s.addShape("circle",{attrs:{x:a.x,y:a.y,r:6,stroke:l.color,lineWidth:3,fill:"#fff"}})}});var Ge=function(l){var s=l.title,e=l.height,a=e===void 0?1:e,r=l.percent,n=l.forceFit,c=n===void 0?!0:n,d=l.formatter,u=d===void 0?Be:d,m=l.color,v=m===void 0?"#2F9CFF":m,o=l.bgColor,x=o===void 0?"#F0F2F5":o,S={value:{type:"linear",min:0,max:10,tickCount:6,nice:!0}},p=[{value:r/10}],E=function(){return`
  <div style="width: 300px;text-align: center;font-size: 12px!important;">
    <div style="font-size: 14px; color: rgba(0,0,0,0.43);margin: 0;">`.concat(s,`</div>
    <div style="font-size: 24px;color: rgba(0,0,0,0.85);margin: 0;">
      `).concat((p[0].value*10).toFixed(2),`%
    </div>
  </div>`)},D={fontSize:12,fill:"rgba(0, 0, 0, 0.65)",textAlign:"center"};return t.a.createElement(f.Chart,{height:a,data:p,scale:S,padding:[-16,0,16,0],forceFit:c},t.a.createElement(f.Coord,{type:"polar",startAngle:-1.25*Math.PI,endAngle:.25*Math.PI,radius:.8}),t.a.createElement(f.Axis,{name:"1",line:void 0}),t.a.createElement(f.Axis,{line:void 0,tickLine:void 0,subTickLine:void 0,name:"value",zIndex:2,label:{offset:-12,formatter:u,textStyle:D}}),t.a.createElement(f.Guide,null,t.a.createElement(me,{start:[3,.905],end:[3,.85],lineStyle:{stroke:v,lineDash:void 0,lineWidth:2}}),t.a.createElement(me,{start:[5,.905],end:[5,.85],lineStyle:{stroke:v,lineDash:void 0,lineWidth:3}}),t.a.createElement(me,{start:[7,.905],end:[7,.85],lineStyle:{stroke:v,lineDash:void 0,lineWidth:3}}),t.a.createElement(ye,{start:[0,.965],end:[10,.965],style:{stroke:x,lineWidth:10}}),t.a.createElement(ye,{start:[0,.965],end:[p[0].value,.965],style:{stroke:v,lineWidth:10}}),t.a.createElement(Re,{position:["50%","95%"],html:E()})),t.a.createElement(f.Geom,{line:!1,type:"point",position:"value*1",shape:"pointer",color:v,active:!1}))},Ee=_()(Ge),K=i("k1fw"),ke=i("3bhQ"),Ce=i.n(ke),He=function(l){var s=l.height,e=s===void 0?1:s,a=l.data,r=a===void 0?[]:a,n=l.forceFit,c=n===void 0?!0:n,d=l.color,u=d===void 0?"rgba(24, 144, 255, 0.2)":d,m=l.borderColor,v=m===void 0?"#1089ff":m,o=l.scale,x=o===void 0?{x:{},y:{}}:o,S=l.borderWidth,p=S===void 0?2:S,E=l.line,D=l.xAxis,g=l.yAxis,L=l.animate,C=L===void 0?!0:L,b=[36,5,30,5],W={x:Object(K.a)({type:"cat",range:[0,1]},x.x),y:Object(K.a)({min:0},x.y)},Y=["x*y",function(J,N){return{name:J,value:N}}],$=e+54;return t.a.createElement("div",{className:Ce.a.miniChart,style:{height:e}},t.a.createElement("div",{className:Ce.a.chartContent},e>0&&t.a.createElement(f.Chart,{animate:C,scale:W,height:$,forceFit:c,data:r,padding:b},t.a.createElement(f.Axis,Object(ue.a)({key:"axis-x",name:"x",label:null,line:null,tickLine:null,grid:null},D)),t.a.createElement(f.Axis,Object(ue.a)({key:"axis-y",name:"y",label:null,line:null,tickLine:null,grid:null},g)),t.a.createElement(f.Tooltip,{showTitle:!1,crosshairs:!1}),t.a.createElement(f.Geom,{type:"area",position:"x*y",color:u,tooltip:Y,shape:"smooth",style:{fillOpacity:1}}),E?t.a.createElement(f.Geom,{type:"line",position:"x*y",shape:"smooth",color:v,size:p,tooltip:!1}):t.a.createElement("span",{style:{display:"none"}}))))},xe=_()(He),Ct=i("/zsF"),Ie=i("PArb"),be=i("jrin"),Ae=i("cQSq"),Ue=i.n(Ae),Qe=i("9/5/"),Se=i.n(Qe),Je=i("Jssm"),Ve=i.n(Je),Ke=i("TSYQ"),Me=i.n(Ke),Ye=i("SPoe"),O=i.n(Ye),Ze=function(h){Object(I.a)(s,h);var l=Object(U.a)(s);function s(){var e;Object(k.a)(this,s);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return e=l.call.apply(l,[this].concat(r)),e.state={legendData:[],legendBlock:!1},e.chart=void 0,e.root=void 0,e.requestRef=0,e.resize=Se()(function(){var c=e.props.hasLegend,d=e.state.legendBlock;if(!c||!e.root){window.removeEventListener("resize",e.resize);return}e.root&&e.root.parentNode&&e.root.parentNode.clientWidth<=380?d||e.setState({legendBlock:!0}):d&&e.setState({legendBlock:!1})},300),e.getG2Instance=function(c){e.chart=c,requestAnimationFrame(function(){e.getLegendData(),e.resize()})},e.getLegendData=function(){if(!!e.chart){var c=e.chart.getAllGeoms()[0];if(!!c){var d=c.get("dataArray")||[],u=d.map(function(m){var v=m[0]._origin;return v.color=m[0].color,v.checked=!0,v});e.setState({legendData:u})}}},e.handleRoot=function(c){e.root=c},e.handleLegendClick=function(c,d){var u=c;u.checked=!u.checked;var m=e.state.legendData;m[d]=u;var v=m.filter(function(o){return o.checked}).map(function(o){return o.x});e.chart&&e.chart.filter("x",function(o){return v.indexOf("".concat(o))>-1}),e.setState({legendData:m})},e}return Object(H.a)(s,[{key:"componentDidMount",value:function(){var a=this;window.addEventListener("resize",function(){a.requestRef=requestAnimationFrame(function(){return a.resize()})},{passive:!0})}},{key:"componentDidUpdate",value:function(a){var r=this.props.data;r!==a.data&&this.getLegendData()}},{key:"componentWillUnmount",value:function(){this.requestRef&&window.cancelAnimationFrame(this.requestRef),window.removeEventListener("resize",this.resize),this.resize&&this.resize.cancel()}},{key:"render",value:function(){var a,r=this,n=this.props,c=n.valueFormat,d=n.subTitle,u=n.total,m=n.hasLegend,v=m===void 0?!1:m,o=n.className,x=n.style,S=n.height,p=S===void 0?0:S,E=n.forceFit,D=E===void 0?!0:E,g=n.percent,L=n.color,C=n.inner,b=C===void 0?.75:C,W=n.animate,Y=W===void 0?!0:W,$=n.colors,J=n.lineWidth,N=J===void 0?1:J,Z=this.state,ie=Z.legendData,le=Z.legendBlock,X=Me()(O.a.pie,o,(a={},Object(be.a)(a,O.a.hasLegend,!!v),Object(be.a)(a,O.a.legendBlock,le),a)),w=this.props,ve=w.data,se=w.selected,ce=se===void 0?!0:se,P=w.tooltip,R=P===void 0?!0:P,B=ve||[],G=ce,T=R,de=$;B=B||[],G=G||!0,T=T||!0;var ee,te={x:{type:"cat",range:[0,1]},y:{min:0}};(g||g===0)&&(G=!1,T=!1,ee=function(ae){return ae==="\u5360\u6BD4"?L||"rgba(24, 144, 255, 0.85)":"#F0F2F5"},B=[{x:"\u5360\u6BD4",y:parseFloat("".concat(g))},{x:"\u53CD\u6BD4",y:100-parseFloat("".concat(g))}]);var vt=["x*percent",function(j,ae){return{name:j,value:"".concat((ae*100).toFixed(2),"%")}}],ft=[12,0,12,0],$e=new Ae.DataView;return $e.source(B).transform({type:"percent",field:"y",dimension:"x",as:"percent"}),t.a.createElement("div",{ref:this.handleRoot,className:X,style:x},t.a.createElement(Ve.a,{maxFontSize:25},t.a.createElement("div",{className:O.a.chart},t.a.createElement(f.Chart,{scale:te,height:p,forceFit:D,data:$e,padding:ft,animate:Y,onGetG2Instance:this.getG2Instance},!!T&&t.a.createElement(f.Tooltip,{showTitle:!1}),t.a.createElement(f.Coord,{type:"theta",innerRadius:b}),t.a.createElement(f.Geom,{style:{lineWidth:N,stroke:"#fff"},tooltip:T?vt:void 0,type:"intervalStack",position:"percent",color:["x",g||g===0?ee:de],selected:G})),(d||u)&&t.a.createElement("div",{className:O.a.total},d&&t.a.createElement("h4",{className:"pie-sub-title"},d),u&&t.a.createElement("div",{className:"pie-stat"},typeof u=="function"?u():u)))),v&&t.a.createElement("ul",{className:O.a.legend},ie.map(function(j,ae){return t.a.createElement("li",{key:j.x,onClick:function(){return r.handleLegendClick(j,ae)}},t.a.createElement("span",{className:O.a.dot,style:{backgroundColor:j.checked?j.color:"#aaa"}}),t.a.createElement("span",{className:O.a.legendTitle},j.x),t.a.createElement(Ie.a,{type:"vertical"}),t.a.createElement("span",{className:O.a.percent},"".concat((Number.isNaN(j.percent)?0:j.percent*100).toFixed(2),"%")),t.a.createElement("span",{className:O.a.value},c?c(j.y):j.y))})))}}]),s}(F.Component),re=_()(Ze),Fe=i("tJVT"),Xe=i("Btuk"),qe=i.n(Xe),_e="https://gw.alipayobjects.com/zos/rmsportal/gWyeGLCdFFRavBGIDzWk.png",et=function(h){Object(I.a)(s,h);var l=Object(U.a)(s);function s(){var e;Object(k.a)(this,s);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return e=l.call.apply(l,[this].concat(r)),e.state={dv:null,height:0,width:0},e.requestRef=0,e.isUnmount=!1,e.root=void 0,e.imageMask=void 0,e.resize=function(){e.requestRef=requestAnimationFrame(function(){e.renderChart(e.props)})},e.saveRootRef=function(c){e.root=c},e.initTagCloud=function(){function c(d){return Object(K.a)(Object(K.a)({},d.style),{},{fillOpacity:d.opacity,fontSize:d.origin._origin.size,rotate:d.origin._origin.rotate,text:d.origin._origin.text,textAlign:"center",fontFamily:d.origin._origin.font,fill:d.color,textBaseline:"Alphabetic"})}f.Shape.registerShape("point","cloud",{drawShape:function(u,m){var v=c(u);return m.addShape("text",{attrs:Object(K.a)(Object(K.a)({},v),{},{x:u.x,y:u.y})})}})},e.renderChart=Se()(function(c){var d=c||e.props,u=d.data,m=d.height;if(!(u.length<1||!e.root)){var v=m,o=e.root.offsetWidth,x=function(){var p=new Ue.a.View().source(u),E=p.range("value"),D=Object(Fe.a)(E,2),g=D[0],L=D[1];p.transform({type:"tag-cloud",fields:["name","value"],imageMask:e.imageMask,font:"Verdana",size:[o,v],padding:0,timeInterval:5e3,rotate:function(){return 0},fontSize:function(b){var W=Math.pow((b.value-g)/(L-g),2);return W*(17.5-5)+5}}),!e.isUnmount&&e.setState({dv:p,width:o,height:v})};e.imageMask?x():(e.imageMask=new Image,e.imageMask.crossOrigin="",e.imageMask.src=_e,e.imageMask.onload=x)}},200),e}return Object(H.a)(s,[{key:"componentDidMount",value:function(){var a=this;requestAnimationFrame(function(){a.initTagCloud(),a.renderChart(a.props)}),window.addEventListener("resize",this.resize,{passive:!0})}},{key:"componentDidUpdate",value:function(a){var r=this.props.data;a&&JSON.stringify(a.data)!==JSON.stringify(r)&&this.renderChart(this.props)}},{key:"componentWillUnmount",value:function(){this.isUnmount=!0,window.cancelAnimationFrame(this.requestRef),window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var a=this.props,r=a.className,n=a.height,c=this.state,d=c.dv,u=c.width,m=c.height;return t.a.createElement("div",{className:Me()(qe.a.tagCloud,r),style:{width:"100%",height:n},ref:this.saveRootRef},d&&t.a.createElement(f.Chart,{width:u,height:m,data:d,padding:0,scale:{x:{nice:!1},y:{nice:!1}}},t.a.createElement(f.Tooltip,{showTitle:!1}),t.a.createElement(f.Coord,{reflect:"y"}),t.a.createElement(f.Geom,{type:"point",position:"x*y",color:"text",shape:"cloud",tooltip:["text*value",function(o,x){return{name:o,value:x}}]})))}}]),s}(F.Component),We=_()(et),tt=i("8Css"),he=i.n(tt),at=function(h){Object(I.a)(s,h);var l=Object(U.a)(s);function s(){var e;Object(k.a)(this,s);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return e=l.call.apply(l,[this].concat(r)),e.state={radio:1},e.timer=0,e.root=null,e.node=null,e.resize=function(){if(e.root){var c=e.props.height,d=c===void 0?1:c,u=e.root.parentNode,m=u.offsetWidth;e.setState({radio:m<d?m/d:1})}},e}return Object(H.a)(s,[{key:"componentDidMount",value:function(){var a=this;this.renderChart(),this.resize(),window.addEventListener("resize",function(){requestAnimationFrame(function(){return a.resize()})},{passive:!0})}},{key:"componentDidUpdate",value:function(a){var r=this.props.percent;a.percent!==r&&this.renderChart("update")}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.timer),this.node&&(this.node.innerHTML=""),window.removeEventListener("resize",this.resize)}},{key:"renderChart",value:function(a){var r=this,n=this.props,c=n.percent,d=n.color,u=d===void 0?"#1890FF":d,m=c/100;if(cancelAnimationFrame(this.timer),!(!this.node||m!==0&&!m)){var v=this.node,o=v.getContext("2d");if(!!o){var x=v.width,S=v.height,p=x/2,E=2,D=p-E;o.beginPath(),o.lineWidth=E*2;for(var g=x-E,L=g/8,C=.2,b=C,W=E,Y=0,$=0,J=.005,N=[],Z=p-E,ie=-(Math.PI/2),le=!0,X=ie;X<ie+2*Math.PI;X+=1/(8*Math.PI))N.push([p+Z*Math.cos(X),p+Z*Math.sin(X)]);var w=N.shift();o.strokeStyle=u,o.moveTo(w[0],w[1]);var ve=function(){if(!!o){o.beginPath(),o.save();for(var P=[],R=W;R<=W+g;R+=20/g){var B=Y+(W+R)/L,G=Math.sin(B)*b,T=R,de=2*D*(1-$)+(p-D)-L*G;o.lineTo(T,de),P.push([T,de])}var ee=P.shift();o.lineTo(W+g,S),o.lineTo(W,S),o.lineTo(ee[0],ee[1]);var te=o.createLinearGradient(0,0,0,S);te.addColorStop(0,"#ffffff"),te.addColorStop(1,u),o.fillStyle=te,o.fill(),o.restore()}},se=function ce(){if(!!o){if(o.clearRect(0,0,x,S),le&&a!=="update")if(N.length){var P=N.shift();o.lineTo(P[0],P[1]),o.stroke()}else le=!1,o.lineTo(w[0],w[1]),o.stroke(),N=[],o.globalCompositeOperation="destination-over",o.beginPath(),o.lineWidth=E,o.arc(p,p,Z,0,2*Math.PI,!0),o.beginPath(),o.save(),o.arc(p,p,p-3*E,0,2*Math.PI,!0),o.restore(),o.clip(),o.fillStyle=u;else{if(m>=.85){if(b>C/4){var R=C*.01;b-=R}}else if(m<=.1){if(b<C*1.5){var B=C*.01;b+=B}}else{if(b<=C){var G=C*.01;b+=G}if(b>=C){var T=C*.01;b-=T}}m-$>0&&($+=J),m-$<0&&($-=J),Y+=.07,ve()}r.timer=requestAnimationFrame(ce)}};se()}}}},{key:"render",value:function(){var a=this,r=this.state.radio,n=this.props,c=n.percent,d=n.title,u=n.height,m=u===void 0?1:u;return t.a.createElement("div",{className:he.a.waterWave,ref:function(o){return a.root=o},style:{transform:"scale(".concat(r,")")}},t.a.createElement("div",{style:{width:m,height:m,overflow:"hidden"}},t.a.createElement("canvas",{className:he.a.waterWaveCanvasWrapper,ref:function(o){return a.node=o},width:m*2,height:m*2})),t.a.createElement("div",{className:he.a.text,style:{width:m}},d&&t.a.createElement("span",null,d),t.a.createElement("h4",null,c,"%")))}}]),s}(F.Component),je=_()(at),nt=i("9og8"),rt=i("WmNS"),De=i.n(rt),oe=i("68d/"),ot=i("95SA"),it=["#eff3ff","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],Oe=function(h){Object(I.a)(s,h);var l=Object(U.a)(s);function s(){var e;Object(k.a)(this,s);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return e=l.call.apply(l,[this].concat(r)),e.state={data:null,grid:null,loading:!1},e}return Object(H.a)(s,[{key:"componentDidMount",value:function(){var e=Object(nt.a)(De.a.mark(function r(){var n,c,d,u;return De.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.all([fetch("https://gw.alipayobjects.com/os/bmw-prod/c5dba875-b6ea-4e88-b778-66a862906c93.json").then(function(o){return o.json()}),fetch("https://gw.alipayobjects.com/os/bmw-prod/8990e8b4-c58e-419b-afb9-8ea3daff2dd1.json").then(function(o){return o.json()})]);case 2:n=v.sent,c=Object(Fe.a)(n,2),d=c[0],u=c[1],this.setState({data:d,grid:u,loading:!0});case 7:case"end":return v.stop()}},r,this)}));function a(){return e.apply(this,arguments)}return a}()},{key:"render",value:function(){var a=this.state,r=a.data,n=a.grid,c=a.loading;return c===!1?F.createElement(ot.a,null):F.createElement(oe.b,{map:{center:[110.19382669582967,50.258134],pitch:0,style:"blank",zoom:1},style:{position:"relative",width:"100%",height:"452px"}},n&&F.createElement(oe.a,{key:"1",source:{data:n,transforms:[{type:"hexagon",size:8e5,field:"capacity",method:"sum"}]},color:{values:"#ddd"},shape:{values:"hexagon"},style:{coverage:.7,opacity:.8}}),r&&[F.createElement(oe.c,{key:"2",options:{autoFit:!0},source:{data:r},scale:{values:{color:{field:"cum_conf",type:"quantile"},size:{field:"cum_conf",type:"log"}}},color:{field:"cum_conf",values:it},shape:{values:"circle"},active:{option:{color:"#0c2c84"}},size:{field:"cum_conf",values:[0,30]},style:{opacity:.8}}),F.createElement(oe.c,{key:"5",source:{data:r},color:{values:"#fff"},shape:{field:"Short_Name_ZH",values:"text"},filter:{field:"cum_conf",values:function(u){return u>2e3}},size:{values:12},style:{opacity:1,strokeOpacity:1,strokeWidth:0}})])}}]),s}(F.Component),xt={Pie:re,WaterWave:je,Gauge:Ee,MiniArea:xe,TagCloud:We,Map:Oe},Te=i("oBTY"),lt=i("Byy7"),Q=i.n(lt);function st(h){return h*1<10?"0".concat(h):h}function ze(){for(var h=[],l=0;l<24;l+=1)h.push({x:"".concat(st(l),":00"),y:Math.floor(Math.random()*200)+l*50});return h}var ct=function(h){Object(I.a)(s,h);var l=Object(U.a)(s);function s(){var e;Object(k.a)(this,s);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return e=l.call.apply(l,[this].concat(r)),e.state={activeData:ze()},e.timer=void 0,e.requestRef=void 0,e.loopData=function(){e.requestRef=requestAnimationFrame(function(){e.timer=window.setTimeout(function(){e.setState({activeData:ze()},function(){e.loopData()})},1e3)})},e}return Object(H.a)(s,[{key:"componentDidMount",value:function(){this.loopData()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer),this.requestRef&&cancelAnimationFrame(this.requestRef)}},{key:"render",value:function(){var a=this.state.activeData,r=a===void 0?[]:a;return t.a.createElement("div",{className:Q.a.activeChart},t.a.createElement(q.a,{title:"\u76EE\u6807\u8BC4\u4F30",value:"\u6709\u671B\u8FBE\u5230\u9884\u671F"}),t.a.createElement("div",{style:{marginTop:32}},t.a.createElement(xe,{animate:!1,line:!0,borderWidth:2,height:84,scale:{y:{tickCount:3}},yAxis:{tickLine:void 0,label:void 0,title:void 0,line:void 0},data:r})),r&&t.a.createElement("div",null,t.a.createElement("div",{className:Q.a.activeChartGrid},t.a.createElement("p",null,Object(Te.a)(r).sort()[r.length-1].y+200," \u4EBF\u5143"),t.a.createElement("p",null,Object(Te.a)(r).sort()[Math.floor(r.length/2)].y," \u4EBF\u5143")),t.a.createElement("div",{className:Q.a.dashedLine},t.a.createElement("div",{className:Q.a.line})),t.a.createElement("div",{className:Q.a.dashedLine},t.a.createElement("div",{className:Q.a.line}))),r&&t.a.createElement("div",{className:Q.a.activeChartLegend},t.a.createElement("span",null,"00:00"),t.a.createElement("span",null,r[Math.floor(r.length/2)].x),t.a.createElement("span",null,r[r.length-1].x)))}}]),s}(F.Component),dt=i("9K0G"),Le=i.n(dt),ut=q.a.Countdown,mt=Date.now()+1e3*60*60*24*2+1e3*30,ht=function(h){Object(I.a)(s,h);var l=Object(U.a)(s);function s(){return Object(k.a)(this,s),l.apply(this,arguments)}return Object(H.a)(s,[{key:"componentDidMount",value:function(){var a=this.props.dispatch;a({type:"dashboardAndmonitor/fetchTags"})}},{key:"render",value:function(){var a=this.props,r=a.dashboardAndmonitor,n=a.loading,c=r.tags;return t.a.createElement(Ne.a,null,t.a.createElement(t.a.Fragment,null,t.a.createElement(ne.a,{gutter:24},t.a.createElement(M.a,{xl:18,lg:24,md:24,sm:24,xs:24,style:{marginBottom:24}},t.a.createElement(V.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.trading-activity",defaultMessage:"Real-Time Trading Activity"}),bordered:!1},t.a.createElement(ne.a,null,t.a.createElement(M.a,{md:6,sm:12,xs:24},t.a.createElement(q.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.total-transactions",defaultMessage:"Total transactions today"}),suffix:"\u5143",value:fe()(124543233).format("0,0")})),t.a.createElement(M.a,{md:6,sm:12,xs:24},t.a.createElement(q.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.sales-target",defaultMessage:"Sales target completion rate"}),value:"92%"})),t.a.createElement(M.a,{md:6,sm:12,xs:24},t.a.createElement(ut,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.remaining-time",defaultMessage:"Remaining time of activity"}),value:mt,format:"HH:mm:ss:SSS"})),t.a.createElement(M.a,{md:6,sm:12,xs:24},t.a.createElement(q.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.total-transactions-per-second",defaultMessage:"Total transactions per second"}),suffix:"\u5143",value:fe()(234).format("0,0")}))),t.a.createElement("div",{className:Le.a.mapChart},t.a.createElement(Oe,null)))),t.a.createElement(M.a,{xl:6,lg:24,md:24,sm:24,xs:24},t.a.createElement(V.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.activity-forecast",defaultMessage:"Activity forecast"}),style:{marginBottom:24},bordered:!1},t.a.createElement(ct,null)),t.a.createElement(V.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.efficiency",defaultMessage:"Efficiency"}),style:{marginBottom:24},bodyStyle:{textAlign:"center"},bordered:!1},t.a.createElement(Ee,{title:Object(y.d)({id:"dashboardandmonitor.monitor.ratio",defaultMessage:"Ratio"}),height:180,percent:87})))),t.a.createElement(ne.a,{gutter:24},t.a.createElement(M.a,{xl:12,lg:24,sm:24,xs:24,style:{marginBottom:24}},t.a.createElement(V.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.proportion-per-category",defaultMessage:"Proportion Per Category"}),bordered:!1,className:Le.a.pieCard},t.a.createElement(ne.a,{style:{padding:"16px 0"}},t.a.createElement(M.a,{span:8},t.a.createElement(re,{animate:!1,percent:28,title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.fast-food",defaultMessage:"Fast food"}),total:"28%",height:128,lineWidth:2})),t.a.createElement(M.a,{span:8},t.a.createElement(re,{animate:!1,color:"#5DDECF",percent:22,title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.western-food",defaultMessage:"Western food"}),total:"22%",height:128,lineWidth:2})),t.a.createElement(M.a,{span:8},t.a.createElement(re,{animate:!1,color:"#2FC25B",percent:32,title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.hot-pot",defaultMessage:"Hot pot"}),total:"32%",height:128,lineWidth:2}))))),t.a.createElement(M.a,{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24}},t.a.createElement(V.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.popular-searches",defaultMessage:"Popular Searches"}),loading:n,bordered:!1,bodyStyle:{overflow:"hidden"}},t.a.createElement(We,{data:c||[],height:161}))),t.a.createElement(M.a,{xl:6,lg:12,sm:24,xs:24,style:{marginBottom:24}},t.a.createElement(V.a,{title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.resource-surplus",defaultMessage:"Resource Surplus"}),bodyStyle:{textAlign:"center",fontSize:0},bordered:!1},t.a.createElement(je,{height:161,title:t.a.createElement(y.a,{id:"dashboardandmonitor.monitor.fund-surplus",defaultMessage:"Fund Surplus"}),percent:34}))))))}}]),s}(F.Component),bt=z.default=Object(y.c)(function(h){var l=h.dashboardAndmonitor,s=h.loading;return{dashboardAndmonitor:l,loading:s.models.dashboardAndmonitor}})(ht)}}]);