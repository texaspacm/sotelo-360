/* krpanoJS 1.0.8.14 combobox plugin (build 2012-03-16) */
var krpanoplugin=function(){function ca(a){for(;y.length>0;){if(a-y[0].time<=100)break;y.shift()}}function oa(a){window.addEventListener(g._isrealdesktop?"mouseup":"touchend",da,true);window.addEventListener(g._isrealdesktop?"mousemove":"touchmove",ea,true);y=[];var c=a.changedTouches&&a.changedTouches.length>0?a.changedTouches[0].pageY:a.pageY;G=false;S=c;W=m;a.preventDefault();a.stopPropagation();setTimeout(function(){if(G==false)if(a.target){var d=a.target._krpcbitemindex;if(d!==undefined){fa();
if(d>=0&&d<q.count)if((d=q.getItem(d))&&d._htmlid){var h=document.getElementById(d._htmlid);if(h){H=d;I=h;h.style.color="#FFFFFF";h.style.backgroundImage="-webkit-gradient(linear, 0% 5%, 0% 80%, from(rgba(68,137,246,1.0)), to(rgba(27,82,225,1.0)))"}}}}},100);return false}function fa(){if(I){I.style.color="#000000";I.style.backgroundImage=""}I=H=null}function ea(a){var c=a.changedTouches&&a.changedTouches.length>0?a.changedTouches[0].pageY:a.pageY;if(G==false)if(Math.abs(c-S)>5){if(J!=null){clearInterval(J);
J=null}G=true;fa();S=c;W=m}if(G){var d=a.timeStamp;ca(d);y.push({time:d,y:c});m=W+(c-S);c=-(X-(l-85));m-=(m>0?m:m<c?m-c:0)/2;n.style.webkitTransform="translate3d(0px, "+(m-2)+"px, 0px)"}a.preventDefault();a.stopPropagation();return false}function da(a){window.removeEventListener(g._isrealdesktop?"mouseup":"touchend",da,true);window.removeEventListener(g._isrealdesktop?"mousemove":"touchmove",ea,true);if(G){ca(a.timeStamp);if(y.length>1){a=y[0];var c=y[y.length-1];z=(c.y-a.y)/((c.time-a.time)/15)}else z=
0;J=setInterval(pa,1E3/60)}else setTimeout(function(){if(H){K=H.index;var d=H.onclick;T();A();d!==undefined&&setTimeout(function(){g.call(d,e)},100)}},200)}function pa(){m+=z;z*=0.95;var a=0,c=-(X-(l-85));if(m<c)a=m-c;else if(m>0)a=m;if(a!=0){a*=-1;if(a*z<=0)z+=a*0.08;else z=a*0.15}if(a==0&&Math.abs(z)<0.05){z=0;clearInterval(J);J=null}n.style.webkitTransform="translate3d(0px, "+(m-2)+"px, 0px)"}function qa(){ga()}function ga(){if(L==1)A();else{g._opencombobox_singleton_cb!=undefined&&g._opencombobox_singleton_cb();
g._opencombobox_singleton_cb=A;var a,c;L=1;P();I=H=null;a=Q(0,0);var d=Q(e.pixelwidth*g.stagescale,e.pixelheight*g.stagescale);U=g.stageheight*g.stagescale-d.y>a.y?0:1;o=document.createElement("div");o.style.position="absolute";o.style.zIndex=1E3;g.control.layer.appendChild(o);B=document.createElement("canvas");B.style.position="absolute";B.onselectstart=function(){return false};ha=B.getContext("2d");o.appendChild(B);o.style.opacity=0;w=ia()*g.stagescale+33+33+16;if(w<192)w=192;F=(a.x+d.x)/2-w/2;
if(F<-20)F=-20;if(F+w-20>g.stagewidth*g.stagescale)w=g.stagewidth*g.stagescale-F+20;n=document.createElement("div");n.style.webkitTransformStyle="preserve-3d";n.style.webkitTransform="translate3d(0px, "+(m-2)+"px, 0px)";n.style.position="absolute";n.style.left="0px";n.style.top="0px";n.style.width=w-33-33-16+"px";var h,f=(Math.random()*99999).toFixed(0),b="font-family:"+Y+";font-size:"+M+"px;color:#000000;padding:"+N+"px;";if(V.indexOf("bold")>=0)b+="font-weight:bold;";if(V.indexOf("italic")>=0)b+=
"font-style:italic;";h="";c=q.count;for(a=0;a<c;a++){var i=q.getItem(a);if(i&&i.caption){var v=i.caption,r="_krpcbx_"+f+"_"+e.name+"_item"+a,ra=K==a?"color:rgba(27,82,225,1.0);text-shadow:0px 0px 1px rgba(68,137,246,0.7);":"";i._htmlid=r;h+="<div id='"+r+"' style='width:100%;border-bottom:1px solid lightgray;"+(a==0?"border-top:1px solid lightgray;":"")+b+ra+"'>"+v+"</div>"}}h+="";n.innerHTML=h;n.style.visibility="hidden";o.appendChild(n);l=40+n.offsetHeight+45;if(l<85){l=40+50*q.count+45;if(l<85)l=
85}if(l<120)l=120;X=l-85;o.removeChild(n);n.style.visibility="visible";if(U==0){D=d.y-14;if(D+l-20>g.stageheight*g.stagescale)l=g.stageheight*g.stagescale-D+20}else{D=d.y-11-l;if(D<-25){l+=D+25;D=-25}}B.width=w;B.height=l;B.style.left="0px";B.style.top="0px";o.style.left=F+"px";o.style.top=D+"px";s=document.createElement("div");s.style.position="absolute";s.style.left="33px";s.style.top="40px";s.style.width=w-33-33+"px";s.style.height=l-40-50+"px";s.style.overflow="hidden";s.style.color="#000";s.style.webkitTransformStyle=
"preserve-3d";s.addEventListener(g._isrealdesktop?"mousedown":"touchstart",oa,true);if(O)top.addEventListener(g._isrealdesktop?"mousedown":"touchstart",A,false);o.appendChild(s);s.appendChild(n);c=q.count;for(a=0;a<c;a++)if((i=q.getItem(a))&&i.caption)if(d=document.getElementById(i._htmlid)){d._krpcbitemindex=a;if(d.childNodes.length>0){d.childNodes[0].id=i._htmlid+"_text";d.childNodes[0]._krpcbitemindex=a}}sa();ja(o,1,0.1);g.control.layer.addEventListener(g._isrealdesktop?"mousedown":"touchstart",
A,false)}}function A(){if(L==1){L=0;P();if(O)top.removeEventListener(g._isrealdesktop?"mousedown":"touchstart",A,false);g.control.layer.removeEventListener(g._isrealdesktop?"mousedown":"touchstart",A,false);ja(o,0,0.1,function(){g.control.layer.removeChild(o)})}}function ja(a,c,d,h){d*=1E3;var f=0,b=a.style.opacity,i=false,v=setInterval(function(){f+=1E3/60;if(f>d){f=d;i=true}var r=f/d;if(r<0)r=0;else if(r>1)r=1;a.style.opacity=b*(1-r)+c*r;if(i){clearInterval(v);h!==undefined&&h()}},1E3/60)}function Q(a,
c){var d=new WebKitPoint;d.x=a;d.y=c;d=window.webkitConvertPointFromNodeToPage(e.sprite,d);d=window.webkitConvertPointFromPageToNode(g.control.layer,d);return{x:d.x,y:d.y}}function sa(){var a=ha,c=Math.floor(w),d=Math.floor(l);a.drawImage(j,0,138,42,58,0,0,42,58);a.drawImage(j,42,138,8,58,42,0,c-42-42,58);a.drawImage(j,151,138,42,58,c-42,0,42,58);a.drawImage(j,0,196,42,8,0,58,42,d-58-58);a.drawImage(j,42,196,109,8,42,58,c-42-42,d-58-58);a.drawImage(j,151,196,42,8,c-42,58,42,d-58-58);a.drawImage(j,
0,209,58,58,0,d-58,58,58);a.drawImage(j,58,209,8,58,58,d-58,c-58-58,58);a.drawImage(j,135,209,58,58,c-58,d-58,58,58);var h=Q(e.pixelwidth*g.stagescale*0.5,0).x-F;h=Math.floor(h-38);var f=U==0?35:58;if(h<f)h=f;else if(h>c-f-76)h=c-f-76;if(U==0){a.clearRect(h,0,76,42);a.drawImage(j,58,138,76,42,h,0,76,42)}else{a.clearRect(h,d-58,76,58);a.drawImage(j,58,209,76,58,h,d-58,76,58)}}function P(){t?ka():T()}function ta(){var a=new Image;a.addEventListener("load",function(){j=a;T()},false);a.src=ua}function ia(){var a=
Z,c=0,d=q.count,h;if(d==0)return 0;for(h=0;h<d;h++){var f=q.getItem(h);if(f&&f.caption){f=f.caption;var b=""+C*k+"px "+R;if(E.indexOf("italic")>=0)b="Italic "+b;if(E.indexOf("bold")>=0)b="Bold "+b;a.font=b;f=a.measureText(f).width;if(f>c)c=f}}return c=p*k+c+p*k/2+37*k}function x(a){if(!(t||u==null)){var c=0,d=(p+C+p)*k;if(e.width==null){$=true;c=ia();if(a==true){e.registercontentsize(c,null);e.updatepluginpos();e.width=null;var h=Q(0,0);h.x/=g.stagescale;h.y/=g.stagescale;var f=Q(c*g.stagescale,d*
g.stagescale);f.x/=g.stagescale;f.y/=g.stagescale;if(h.x<10)c-=10-h.x;if(f.x>g.stagewidth-10)c-=f.x-(g.stagewidth-10)}if(c<=0)return}else c=e.pixelwidth;c=Math.floor(c);d=Math.floor(d);la=c;ma=d;u.width=c;u.height=d;u.style.width="100%";u.style.height="100%";e.registercontentsize(c,a?d:null);a==true&&e.updatepluginpos();T()}}function T(){if(j&&j.complete){var a=Z,c=la,d=ma,h="";if(q.count>0){var f=q.getItem(K);if(f&&f.caption)h=f.caption}f=""+C*k+"px "+R;if(E.indexOf("italic")>=0)f="Italic "+f;if(E.indexOf("bold")>=
0)f="Bold "+f;var b=0.5*k,i=L*69,v=c*g.stagescale<80;if(k<=1||aa==false)v=false;if(v){f=""+C*k/2+"px "+R;if(E.indexOf("italic")>=0)f="Italic "+f;if(E.indexOf("bold")>=0)f="Bold "+f}a.clearRect(0,0,c,d);if(v==false){a.drawImage(j,0,0+i,20,20,0,0,20*b,20*b);a.drawImage(j,20,0+i,210,20,20*b,0,c-94*b,20*b);a.drawImage(j,231,0+i,74,20,c-74*b,0,74*b,20*b);a.drawImage(j,0,20+i,20,28,0,20*b,20*b,d-40*b);a.drawImage(j,20,20+i,210,28,20*b,20*b,c-94*b,d-40*b);a.drawImage(j,231,20+i,16,28,c-74*b,20*b,16*b,d-
40*b);a.drawImage(j,247,20+i,58,28,c-58*b,20*b,58*b,d-40*b);a.drawImage(j,0,48+i,20,20,0,d-20*b,20*b,20*b);a.drawImage(j,20,48+i,210,20,20*b,d-20*b,c-94*b,20*b);a.drawImage(j,231,48+i,74,20,c-74*b,d-20*b,74*b,20*b)}else{a.drawImage(j,0,0+i,20,20,0,0,20*b,20*b);a.drawImage(j,20,0+i,210,20,20*b,0,c-56*b,20*b);a.drawImage(j,231,0+i,16,20,c-36*b,0,16*b,20*b);a.drawImage(j,285,0+i,20,20,c-20*b,0,20*b,20*b);a.drawImage(j,0,20+i,20,28,0,20*b,20*b,d-40*b);a.drawImage(j,20,20+i,210,28,20*b,20*b,c-56*b,d-40*
b);a.drawImage(j,231,20+i,16,28,c-36*b,20*b,16*b,d-40*b);a.drawImage(j,285,20+i,20,28,c-20*b,20*b,20*b,d-40*b);a.drawImage(j,0,48+i,20,20,0,d-20*b,20*b,20*b);a.drawImage(j,20,48+i,210,20,20*b,d-20*b,c-56*b,20*b);a.drawImage(j,231,48+i,16,20,c-36*b,d-20*b,16*b,20*b);a.drawImage(j,285,48+i,20,20,c-20*b,d-20*b,20*b,20*b)}a.font=f;a.fillStyle="#000";a.strokeStyle="#FFF";a.textAlign="left";a.textBaseline="middle";a.save();a.beginPath();a.rect(p*k/2,p*k/2,c-(v?36:74)*b-p*k,d-p*k/2);a.clip();a.scale(e.scale,
1);a.fillText(h,p*k,d/2+1);a.restore()}}function ka(){var a=e.name+"_cb"+g.timertick,c="",d;if(e.hasOwnProperty("item")){d=e.item;if(d.hasOwnProperty("getArray")){var h=d.getArray();d=h.length;var f="";if(g.isdesktop||g._isrealdesktop)f="background: -webkit-gradient(linear, 0% 5%, 0% 80%, from(rgba(250,250,250,1.0)), to(rgba(220,220,220,0.9))); border-radius:4px; border:1px solid rgba(100,100,100,1.0);";if(e.html5style)f+=e.html5style;c+="<select name='"+a+" size='1' style='margin:0;padding:0;"+f+
"'>";for(a=0;a<d;a++){f=h[a];c+="<option name='"+f.name+"'>"+f.caption+"</option>"}c+="</select>";e.sprite.innerHTML=c;setTimeout(function(){var b,i,v=e.sprite.childNodes[0];v.onchange=function(){var r=e.item.getItem(this.selectedIndex);r&&g.call(r.onclick,e)};b=e.sprite.childNodes[0].offsetWidth;i=e.sprite.childNodes[0].offsetHeight;b/=g.stagescale;i/=g.stagescale;if(e.pixelwidth>0){b=e.pixelwidth;v.style.width=b+"px"}e.registercontentsize(b,i);e.updatepluginpos()},0)}}}function va(a,c){ba(null,
a,c)}function ba(a,c,d){if(a==null||a==""){a=Number(g.get(e.getfullpath()+".item.count"));a=isNaN(a)?"item1":"item"+(a+1)}g.set(e.getfullpath()+".item["+a+"].caption",c);g.set(e.getfullpath()+".item["+a+"].onclick",d);if($)e._width=null;if(q.count==1){K=0;x(true)}else x();t&&ka()}function wa(){g.set(e.getfullpath()+".item.count",0);x()}function xa(a){a=String(a).toLowerCase();var c=Number(g.get(e.getfullpath()+".item.count"));if(!isNaN(c)){var d=e.item.getArray(),h;for(h=0;h<c;h++)if(String(d[h].caption).toLowerCase()==
a)if(t){var f=e.sprite.childNodes[0];if(f)f.selectedIndex=h}else{K=h;P()}}}function na(a){a=String(a).toLowerCase();var c=Number(g.get(e.getfullpath()+".item.count"));if(!isNaN(c)){var d=e.item.getArray(),h;for(h=0;h<c;h++)if(d[h].name==a)if(t){var f=e.sprite.childNodes[0];if(f)f.selectedIndex=h}else{K=h;P()}}}function ya(){t==false&&L==0&&ga()}function za(){t==false&&A()}var g=null,e=null,t=false,u=null,Z=null,la=0,ma=0,j=null,K=0,q=null,L=0,U=0,$=false,o=null,B=null,ha=null,w=0,l=0,F=0,D=0,s=null,
n=null,X=0,R="Arial",C=0,E="normal",p=0,k=0,aa=true,Y="Arial",M=16,V="normal",N=10,O=false;this.registerplugin=function(a,c,d){g=a;e=d;if(g.version<"1.0.8.14"||g.build<"2011-05-19"){g.trace(3,"combobox plugin - too old krpano version (min. version 1.0.8.14 / build 2011-05-19)");e=g=null}else{O=g._have_top_access;if(O===undefined){O=false;try{if(top&&top.document)O=true}catch(h){}}e.registerattribute("native","auto");e.registerattribute("cbfont","auto",function(f){R=String(f).toLowerCase()=="auto"?
"Arial":f;x()},function(){return R});e.registerattribute("cbfontsize","auto",function(f){C=parseInt(f);if(isNaN(C)||C<=0)C=g.isphone?16:14;x()},function(){return C});e.registerattribute("cbfontstyle","normal",function(f){E=String(f).toLowerCase()},function(){return E});e.registerattribute("cbpadding","auto",function(f){p=parseInt(f);if(isNaN(p)||p<=0)p=8;x()},function(){return p});e.registerattribute("cbdesignscale","auto",function(f){k=parseInt(f);if(isNaN(k)||k<=0)k=g.isphone?2:1;x()},function(){return k});
e.registerattribute("cbtoosmallfix",true,function(f){aa=String(f).toLowerCase()=="true"},function(){return aa});e.registerattribute("itemfont","Arial",function(f){Y=String(f).toLowerCase()=="auto"?"Arial":f},function(){return Y});e.registerattribute("itemfontsize",16,function(f){M=parseInt(f);if(isNaN(M)||M<=0)M=16},function(){return M});e.registerattribute("itemfontstyle","normal",function(f){V=String(f).toLowerCase()},function(){return V});e.registerattribute("itempadding",10,function(f){N=parseInt(f);
if(isNaN(N)||N<0)N=10},function(){return N});q=e.createarray("item");e.additem=va;e.addiditem=ba;e.addnameditem=ba;e.removeall=wa;e.selectitem=xa;e.selectiditem=na;e.selectnameditem=na;e.openlist=ya;e.closelist=za;a=String(e["native"]).toLowerCase();t=a=="auto"?g.isdesktop:a=="true";if(t==false){ta();u=document.createElement("canvas");u.onselectstart=function(){return false};u.addEventListener(g._isrealdesktop?"mousedown":"touchstart",qa,true);Z=u.getContext("2d");e.sprite.appendChild(u);x(true)}else P();
g.set("events[_combobox_"+e.name+"].onresize",function(){if(t==false){A();if($){e._width=null;x(true)}}})}};var G=false,S=0,m=0,W=0,J=null,y=[],z=0,H=null,I=null;this.unloadplugin=function(){if(g&&e){t&&u&&e.sprite.removeChild(u);g.set("events[_combobox_"+e.name+"].name",null);g=e=null}};this.onresize=function(a){if(t){if(e.sprite&&e.sprite.childNodes&&e.sprite.childNodes.length>=1){var c=e.sprite.childNodes[0];if(c)c.style.width=a+"px";e.registercontentsize(a,null)}}else x();return false};var ua=
"data:image/png;base64,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"};