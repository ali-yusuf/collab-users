(function(t){function e(e){for(var n,l,r=e[0],i=e[1],u=e[2],b=0,d=[];b<r.length;b++)l=r[b],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);s&&s(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),c()}function c(){for(var t,e=0;e<o.length;e++){for(var c=o[e],n=!0,r=1;r<c.length;r++){var i=c[r];0!==a[i]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=c[0]))}return t}var n={},a={app:0},o=[];function l(e){if(n[e])return n[e].exports;var c=n[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=t,l.c=n,l.d=function(t,e,c){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(c,n,function(e){return t[e]}.bind(null,n));return c},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var s=i;o.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"01e2":function(t,e,c){"use strict";c("b34e")},"0208":function(t,e,c){"use strict";c("f94e")},"1d9b":function(t,e,c){},"1f7f":function(t,e,c){"use strict";c("21c5")},"216f":function(t,e,c){},"21c5":function(t,e,c){},"2e15":function(t,e,c){"use strict";c("9086")},"34db":function(t,e,c){},"517d":function(t,e,c){"use strict";c("1d9b")},"53b4":function(t,e,c){"use strict";c("d078")},5460:function(t,e,c){},"54e6":function(t,e,c){},"56d7":function(t,e,c){"use strict";c.r(e);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23"),a=(c("b0c0"),{id:"app"}),o=Object(n["g"])("h1",null,"Welocme to yor first page",-1),l={class:"green-text"};function r(t,e,c,r,i,u){var s=Object(n["w"])("navbar"),b=Object(n["w"])("tasks"),d=Object(n["w"])("router-view");return Object(n["p"])(),Object(n["d"])("div",a,[Object(n["g"])(s),o,Object(n["g"])("button",{onClick:e[1]||(e[1]=function(){return u.getData&&u.getData.apply(u,arguments)})},"check here"),(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(i.tasks,(function(t){return Object(n["p"])(),Object(n["d"])("div",{class:"text-bg",key:t.Id},[Object(n["g"])("h3",l,Object(n["z"])(t.name),1),Object(n["g"])("p",null,Object(n["z"])(t.email),1),Object(n["g"])("p",null,Object(n["z"])(t.password),1)])})),128)),(Object(n["p"])(),Object(n["d"])(Object(n["x"])(t.component))),Object(n["g"])(b),Object(n["g"])(d)])}var i=Object(n["G"])("data-v-45e3321f"),u=i((function(t,e,c,a,o,l){return Object(n["p"])(),Object(n["d"])("button",{onClick:e[1]||(e[1]=function(t){return l.onClick()}),style:{background:c.color},class:"btn"},Object(n["z"])(c.text),5)})),s={name:"Button",props:{text:String,color:String},methods:{onClick:function(){console.log("login"),this.$emit("open-subject")}}};c("ce43");s.render=u,s.__scopeId="data-v-45e3321f";var b=s,d=c("bc3a"),p=c.n(d);function j(t,e,c,a,o,l){var r=Object(n["w"])("Header");return Object(n["p"])(),Object(n["d"])("nav",null,[Object(n["g"])(r)])}var O=c("5c40"),f=Object(n["G"])("data-v-c1546270");Object(n["s"])("data-v-c1546270");var g={class:"dropdown"},h={class:"dropdown-content"};Object(n["q"])();var m=f((function(t,e,c,a,o,l){var r=Object(n["w"])("Button"),i=Object(n["w"])("PostCpmponent");return Object(n["p"])(),Object(n["d"])("header",null,[Object(n["g"])("ul",null,[Object(n["g"])("li",null,[Object(n["g"])(r,{id:"home",onClick:t.home,text:"Home",color:"green"},null,8,["onClick"])]),Object(n["g"])("li",null,[Object(n["g"])(r,{id:"subject",onClick:t.subject,text:"SUBJECTS",color:"green"},null,8,["onClick"])]),Object(n["g"])("li",null,[Object(n["g"])("div",g,[Object(n["g"])(r,{id:"test",onClick:t.test,text:"TEST",color:"green"},null,8,["onClick"]),Object(n["g"])("div",h,[Object(n["g"])(r,{id:"maths",onClick:t.maths,text:"Mathematics (Applied & Core)",color:"green"},null,8,["onClick"]),Object(n["g"])(r,{id:"computer",onClick:t.computer,text:"Computer Science/Informatics Practices",color:"green"},null,8,["onClick"]),Object(n["g"])(r,{id:"physics",onClick:t.physics,text:"Physics",color:"green"},null,8,["onClick"]),Object(n["g"])(r,{id:"chemistry",onClick:t.chemistry,text:"Chemistry",color:"green"},null,8,["onClick"])])])]),Object(n["g"])("li",null,[Object(n["g"])(r,{onClick:t.aboutus,text:"About Us",color:"green"},null,8,["onClick"])]),Object(n["g"])("li",null,[Object(n["g"])(r,{text:"Login",onClick:t.login,color:"green"},null,8,["onClick"])]),Object(n["g"])("li",null,[Object(n["g"])(r,{text:"Signup",onClick:t.signup,color:"green"},null,8,["onClick"])])]),(Object(n["p"])(),Object(n["d"])(Object(n["x"])(t.component))),Object(n["g"])(i,{onIsVisible:e[1]||(e[1]=function(e){return t.onclickChild(e)})})])})),v=Object(n["h"])({name:"Header",props:{title:String},components:{Button:b},data:function(){return{component:"",show:!0,sh:"hii"}},methods:{onclickChild:function(t){this.show=t,this.$forceUpdate||(this.sh="updated"),alert(this.show)},home:function(){this.$router.push({path:"/collab-users"})},signup:function(){this.$router.push({path:"/signup"})},subject:function(){this.$router.push({path:"/collab-users/subject"})},test:function(){this.$router.push({path:"/collab-users/test"})},aboutus:function(){this.$router.push({path:"/aboutus"})},login:function(){this.$router.push({path:"/login"})},maths:function(){this.$router.push({path:"/maths"})},computer:function(){this.$router.push({path:"/computer"})},physics:function(){this.$router.push({path:"/physics"})},chemistry:function(){this.$router.push({path:"/chemistry"})}}});c("517d");v.render=m,v.__scopeId="data-v-c1546270";var k=v,y=Object(O["k"])({components:{Header:k},name:"navbar"});y.render=j;var w=y,C=Object(n["G"])("data-v-cd797d76");Object(n["s"])("data-v-cd797d76");var B={id:"home"},U=Object(n["g"])("h1",null,"Welocome to Collab learn.",-1),D=Object(n["g"])("p",null,"your code will appear here",-1),L=Object(n["g"])("p",null,[Object(n["f"])(" For CUET syllabus "),Object(n["g"])("a",{href:"/assets/pdfs/IBCUETUG2023.pdf",target:"_blank"},"click here"),Object(n["f"])(". ")],-1),V={class:"row"},A={class:"col-md-4"},z={class:"col-md-4"},q={class:"col-md-4"};Object(n["q"])();var S=C((function(t,e,c,a,o,l){var r=Object(n["w"])("collab-card"),i=Object(n["w"])("collabCard");return Object(n["p"])(),Object(n["d"])("div",B,[U,D,L,Object(n["g"])("div",V,[Object(n["g"])("div",A,[Object(n["g"])(r)]),Object(n["g"])("div",z,[Object(n["g"])(i)]),Object(n["g"])("div",q,[Object(n["g"])(i)])])])})),_=Object(n["G"])("data-v-06bd52fe");Object(n["s"])("data-v-06bd52fe");var x={class:"collab-card"},E=Object(n["g"])("div",{class:"card"},[Object(n["g"])("h2",{class:"align-center"},"Target CUET 2024"),Object(n["g"])("div",{class:"container align-center mt-3"},[Object(n["g"])("h3",null,[Object(n["g"])("b",null,"1000+ topic")]),Object(n["g"])("h4",null,"10000+ questions"),Object(n["g"])("p",null,"Start your preperation with concept and practice")]),Object(n["g"])("div",null,[Object(n["g"])("p",null,[Object(n["f"])(" For CUET syllabus "),Object(n["g"])("a",{href:"/assets/pdfs/IBCUETUG2023.pdf",target:"_blank"},"click here"),Object(n["f"])(". ")])])],-1);Object(n["q"])();var I=_((function(t,e,c,a,o,l){return Object(n["p"])(),Object(n["d"])("div",x,[E])})),P={name:"collab-card",setup:function(){}};c("8f4f");P.render=I,P.__scopeId="data-v-06bd52fe";var G=P,T=Object(O["k"])({name:"Home",components:{collabCard:G}});c("d4ae");T.render=S,T.__scopeId="data-v-cd797d76";var M=T,$=Object(n["G"])("data-v-dac85348");Object(n["s"])("data-v-dac85348");var W={key:0};Object(n["q"])();var H=$((function(t,e,c,a,o,l){return Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(c.tasks,(function(c){return Object(n["p"])(),Object(n["d"])("div",{class:"user",key:c.id},[Object(n["g"])("h3",null,Object(n["z"])(c.id),1),Object(n["g"])("p",null,Object(n["z"])(c.email),1),Object(n["g"])("button",{onClick:e[1]||(e[1]=function(){return l.MessageMethod&&l.MessageMethod.apply(l,arguments)})},"login"),Object(n["g"])("button",{onClick:e[2]||(e[2]=function(){return l.test&&l.test.apply(l,arguments)})},"getMessage"),!0===t.check?(Object(n["p"])(),Object(n["d"])("div",W,[Object(n["g"])("p",null,Object(n["z"])(o.name),1),Object(n["g"])("p",null,Object(n["z"])(o.email),1)])):Object(n["e"])("",!0)])})),128)})),F=c("1da1"),J=(c("96cf"),{setup:function(){return Object(F["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("http://localhost:2000/test/");case 2:return e=t.sent,console.log(e),t.abrupt("return",{result:e});case 5:case"end":return t.stop()}}),t)})))()}}),R={test:function(){return J().get("/test")}},X={name:"Tasks",props:{tasks:Array},data:function(){return{name:String,email:String,cart:5}},methods:{MessageMethod:function(){this.cart=this.cart+1,this.cart>14&&alert("Stop counting value reaches to  "+this.cart)},test:function(){R.test({name:this.name,email:this.email}),alert(this.msg+"message"),this.check=!0}}};c("e3a6");X.render=H,X.__scopeId="data-v-dac85348";var N=X,K=Object(n["G"])("data-v-0d5ba554");Object(n["s"])("data-v-0d5ba554");var Q={class:"signup"},Y=Object(n["g"])("h2",null,"Post Data To Api into PostGreSql",-1),Z=Object(n["g"])("br",null,null,-1),tt=Object(n["g"])("br",null,null,-1),et=Object(n["g"])("br",null,null,-1),ct=Object(n["g"])("br",null,null,-1),nt=Object(n["g"])("br",null,null,-1),at=Object(n["g"])("br",null,null,-1),ot=Object(n["g"])("br",null,null,-1),lt=Object(n["g"])("br",null,null,-1);Object(n["q"])();var rt=K((function(t,e,c,a,o,l){var r=Object(n["w"])("Button");return Object(n["p"])(),Object(n["d"])("div",Q,[Object(n["g"])("span",null,[Y,Object(n["g"])(r,{id:"close",onClick:t.close,text:"X",color:"green"},null,8,["onClick"])]),Object(n["g"])("form",{onSubmit:e[5]||(e[5]=function(){return l.SignUp&&l.SignUp.apply(l,arguments)}),method:"post"},[Object(n["E"])(Object(n["g"])("input",{type:"number",name:"Id",placeholder:"Id","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.posts.Id=t})},null,512),[[n["C"],o.posts.Id]]),Z,tt,Object(n["E"])(Object(n["g"])("input",{type:"text",name:"name",placeholder:"name","onUpdate:modelValue":e[2]||(e[2]=function(t){return o.posts.name=t})},null,512),[[n["C"],o.posts.name]]),et,ct,Object(n["E"])(Object(n["g"])("input",{type:"text",name:"email",placeholder:"email","onUpdate:modelValue":e[3]||(e[3]=function(t){return o.posts.email=t})},null,512),[[n["C"],o.posts.email]]),nt,at,Object(n["E"])(Object(n["g"])("input",{type:"text",name:"password",placeholder:"password","onUpdate:modelValue":e[4]||(e[4]=function(t){return o.posts.password=t})},null,512),[[n["C"],o.posts.password]]),ot,lt,Object(n["g"])(r,{id:"signupbtn",type:"submit",text:"SignUp",color:"green"})],32)])})),it={name:"PostComponent",props:{isModalVisible:String},components:{Button:b},data:function(){return{posts:{Id:"",name:"",email:"",password:""},component:""}},methods:{SignUp:function(t){p.a.post("http://localhost:2000/register",this.posts).then(alert("Account created successfully... "+this.posts.name)).catch((function(t){return alert(t)})),t.preventDefault(),this.$router.push({path:"/"})}},close:function(){this.$router.push({path:"/login"})}};c("97d3");it.render=rt,it.__scopeId="data-v-0d5ba554";var ut=it,st=Object(n["G"])("data-v-203f57f4");Object(n["s"])("data-v-203f57f4");var bt={id:"test"},dt=Object(n["f"])(" Welocme to test page bro... "),pt=Object(n["g"])("br",null,null,-1),jt=Object(n["f"])(" you can get the test series from this page only.. Solve the following questions.. "),Ot={class:"questions"},ft={class:"content-block"},gt={for:"{{task.A}}"},ht={for:"{{task.B}}"},mt={for:"C"},vt={for:"{{task.D}}"},kt={key:0},yt={style:{color:"green"}};Object(n["q"])();var wt=st((function(t,e,c,a,o,l){return Object(n["p"])(),Object(n["d"])("div",bt,[dt,pt,jt,Object(n["g"])("div",Ot,[Object(n["g"])("ol",ft,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(t.mutableList,(function(e){return Object(n["p"])(),Object(n["d"])("li",{key:e.id},[Object(n["g"])("p",null,[Object(n["g"])("strong",null,Object(n["z"])(e.question),1)]),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.A}}",value:"A","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",gt,Object(n["z"])(e.A),1),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.B}}",value:"B","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",ht,Object(n["z"])(e.B),1),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.C}}",value:"C","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",mt,Object(n["z"])(e.C),1),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.D}}",value:"D","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",vt,Object(n["z"])(e.D),1),t.capital[e.id]?(Object(n["p"])(),Object(n["d"])("p",kt,[Object(n["f"])(" your answer: "+Object(n["z"])(t.capital[e.id])+" ",1),Object(n["g"])("span",yt,"correct answer: "+Object(n["z"])(e.answer),1)])):Object(n["e"])("",!0)])})),128))])])])})),Ct=Object(O["k"])({name:"Test",data:function(){return{mutableList:[{id:1,question:"Capital of India",A:"Lonow",B:"Lonow",C:"Lonow",D:"Delhi",answer:"D"},{id:2,question:"Capital of UP",A:"Lonow",B:"Lucknow",C:"Lonow",D:"Delhi",answer:"B"}],capital:[],count:0}},props:{users:Array},methods:{incrementCounter:function(){this.count+=1}}});c("01e2");Ct.render=wt,Ct.__scopeId="data-v-203f57f4";var Bt=Ct,Ut={name:"App",components:{navbar:w,Header:k,Home:M,Tasks:N,Button:b,PostComponent:ut,Test:Bt},data:function(){return{tasks:[],cart:0}},methods:{getData:function(){var t=this;p.a.get("http://localhost:2000/users").then((function(e){console.log("User got successfully:",e.data),t.tasks=e.data})).catch((function(t){console.error("Error getting user:",t)}))}}};c("1f7f");Ut.render=r;var Dt=Ut,Lt=c("6c02"),Vt=(c("ac1f"),c("841c"),Object(n["G"])("data-v-4caba05e"));Object(n["s"])("data-v-4caba05e");var At={id:"subject"},zt=Object(n["f"])(" Welocme to Subject page bro... "),qt=Object(n["g"])("br",null,null,-1),St=Object(n["f"])(" you can get the study material from this page only.. "),_t={class:"search"},xt=Object(n["f"])(" console.log(searchIten); ");Object(n["q"])();var Et=Vt((function(t,e,c,a,o,l){var r=Object(n["w"])("ComputerScience"),i=Object(n["w"])("Maths"),u=Object(n["w"])("Aptitude"),s=Object(n["w"])("testapi");return Object(n["p"])(),Object(n["d"])("div",At,[zt,qt,St,Object(n["g"])("div",_t,[Object(n["E"])(Object(n["g"])("input",{type:"text",id:"searchIten","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.search=t}),placeholder:"search subjects"},null,512),[[n["C"],o.search]])]),xt,Object(n["g"])("button",{class:"btn btn-primary btn-block w-75 my-4",onClick:e[2]||(e[2]=function(){return t.filterSubjects&&t.filterSubjects.apply(t,arguments)}),type:"submit"}," search "),Object(n["g"])(r),Object(n["g"])(i),Object(n["g"])(u),Object(n["g"])(s)])})),It=(c("4de4"),c("466d"),Object(n["G"])("data-v-1b327713"));Object(n["s"])("data-v-1b327713");var Pt={id:"computer"},Gt=Object(n["f"])(" Welocme to computer page bro... "),Tt=Object(n["g"])("br",null,null,-1),Mt=Object(n["f"])(" you can get the computer test series from this page only.. Solve the following questions.. "),$t={class:"content-block"},Wt={for:"{{task.A}}"},Ht={for:"{{task.B}}"},Ft={for:"C"},Jt={for:"{{task.D}}"},Rt={key:0},Xt={style:{color:"green"}};Object(n["q"])();var Nt=It((function(t,e,c,a,o,l){return Object(n["p"])(),Object(n["d"])("div",Pt,[Gt,Tt,Mt,Object(n["g"])("div",null,[Object(n["g"])("ol",$t,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(t.mutableList,(function(e){return Object(n["p"])(),Object(n["d"])("li",{key:e.id},[Object(n["g"])("p",null,[Object(n["g"])("strong",null,Object(n["z"])(e.question),1)]),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.A}}",value:"A","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",Wt,Object(n["z"])(e.A),1),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.B}}",value:"B","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",Ht,Object(n["z"])(e.B),1),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.C}}",value:"C","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",Ft,Object(n["z"])(e.C),1),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.D}}",value:"D","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",Jt,Object(n["z"])(e.D),1),t.capital[e.id]?(Object(n["p"])(),Object(n["d"])("p",Rt,[Object(n["f"])(" your answer: "+Object(n["z"])(t.capital[e.id])+" ",1),Object(n["g"])("span",Xt,"correct answer: "+Object(n["z"])(e.answer),1)])):Object(n["e"])("",!0)])})),128))])])])})),Kt=Object(O["k"])({name:"computerscience",data:function(){return{mutableList:[{id:1,question:"Capital of India",A:"Lonow",B:"Lonow",C:"Lonow",D:"Delhi",answer:"D"},{id:2,question:"Capital of UP",A:"Lonow",B:"Lucknow",C:"Lonow",D:"Delhi",answer:"B"}],capital:[],count:0}},props:{users:Array},methods:{incrementCounter:function(){this.count+=1}}});c("2e15");Kt.render=Nt,Kt.__scopeId="data-v-1b327713";var Qt=Kt,Yt=Object(n["G"])("data-v-fc35c36c");Object(n["s"])("data-v-fc35c36c");var Zt={id:"maths"},te=Object(n["f"])(" Welocme to maths page bro... "),ee=Object(n["g"])("br",null,null,-1),ce=Object(n["f"])(" you can get the naths test series from this page only.. Solve the following questions.. "),ne={class:"questions"},ae={class:"content-block"},oe={for:"{{task.A}}"},le={for:"{{task.B}}"},re={for:"C"},ie={for:"{{task.D}}"},ue={key:0},se={style:{color:"green"}};Object(n["q"])();var be=Yt((function(t,e,c,a,o,l){return Object(n["p"])(),Object(n["d"])("div",Zt,[te,ee,ce,Object(n["g"])("div",ne,[Object(n["g"])("ol",ae,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(t.mutableList,(function(e){return Object(n["p"])(),Object(n["d"])("li",{key:e.id},[Object(n["g"])("p",null,[Object(n["g"])("strong",null,Object(n["z"])(e.question),1)]),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.A}}",value:"A","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",oe,Object(n["z"])(e.A),1),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.B}}",value:"B","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",le,Object(n["z"])(e.B),1),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.C}}",value:"C","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",re,Object(n["z"])(e.C),1),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.D}}",value:"D","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",ie,Object(n["z"])(e.D),1),t.capital[e.id]?(Object(n["p"])(),Object(n["d"])("p",ue,[Object(n["f"])(" your answer: "+Object(n["z"])(t.capital[e.id])+" ",1),Object(n["g"])("span",se,"correct answer: "+Object(n["z"])(e.answer),1)])):Object(n["e"])("",!0)])})),128))])])])})),de=Object(O["k"])({name:"maths",data:function(){return{mutableList:[{id:1,question:"Capital of India",A:"Lonow",B:"Lonow",C:"Lonow",D:"Delhi",answer:"D"},{id:2,question:"Capital of UP",A:"Lonow",B:"Lucknow",C:"Lonow",D:"Delhi",answer:"B"}],capital:[],count:0}},props:{users:Array},methods:{incrementCounter:function(){this.count+=1}}});c("8ab1");de.render=be,de.__scopeId="data-v-fc35c36c";var pe=de,je=(c("a4d3"),c("e01a"),Object(n["G"])("data-v-53b3cf9c"));Object(n["s"])("data-v-53b3cf9c");var Oe={class:"container"},fe=Object(n["g"])("h1",null,"Learn Elementary mathematics",-1),ge={class:"user"},he=Object(n["g"])("br",null,null,-1),me=Object(n["g"])("br",null,null,-1);Object(n["q"])();var ve=je((function(t,e,c,a,o,l){var r=Object(n["w"])("Button");return Object(n["p"])(),Object(n["d"])("div",Oe,[fe,Object(n["g"])(r,{id:"fetch",onClick:l.fetchData,text:"Click Here",color:"green"},null,8,["onClick"]),Object(n["g"])("div",ge,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(o.mutableList,(function(t){return Object(n["p"])(),Object(n["d"])("ul",{key:t.id},[Object(n["g"])("h2",null,Object(n["z"])(t.title),1),Object(n["g"])("p",null,Object(n["z"])(t.description),1),he,me])})),128))])])})),ke=(c("d3b7"),{components:{Button:b},data:function(){return{mutableList:[]}},name:"Aptitude",props:{users:Array},methods:{fetchData:function(){var t=this;fetch("http://localhost:2000/computer").then((function(t){return t.json()})).then((function(e){t.mutableList=e})).catch((function(t){return console.log(t.meassage)})),alert("Not able to fetch data")}}});c("9a4f");ke.render=ve,ke.__scopeId="data-v-53b3cf9c";var ye=ke,we={components:{ComputerScience:Qt,Maths:pe,Aptitude:ye},name:"Subject",data:function(){return{components:[],search:""}},methods:{computed:{filterSubjects:function(){var t=this;return this.components.filter((function(e){return console.log("subject sorted"),e.match(t.search)}))}}}};c("8a5f");we.render=Et,we.__scopeId="data-v-4caba05e";var Ce=we,Be=Object(n["G"])("data-v-655f9ce0");Object(n["s"])("data-v-655f9ce0");var Ue={id:"aboutus"},De=Object(n["f"])(" Welocme to Collab learn Website bro... "),Le=Object(n["g"])("br",null,null,-1),Ve=Object(n["f"])(" you can get the study matarial, test series and video lectures from this website only.. ");Object(n["q"])();var Ae=Be((function(t,e,c,a,o,l){return Object(n["p"])(),Object(n["d"])("div",Ue,[De,Le,Ve])})),ze=Object(O["k"])({name:"Aboutus"});ze.render=Ae,ze.__scopeId="data-v-655f9ce0";var qe=ze,Se=Object(n["G"])("data-v-432cde0c");Object(n["s"])("data-v-432cde0c");var _e={class:"login"},xe=Object(n["g"])("h2",null,"Login Data To Api into PostGreSql",-1),Ee=Object(n["g"])("br",null,null,-1),Ie=Object(n["g"])("br",null,null,-1),Pe=Object(n["g"])("br",null,null,-1),Ge=Object(n["g"])("br",null,null,-1);Object(n["q"])();var Te=Se((function(t,e,c,a,o,l){var r=Object(n["w"])("Button");return Object(n["p"])(),Object(n["d"])("div",_e,[Object(n["g"])("span",null,[xe,(Object(n["p"])(),Object(n["d"])(Object(n["x"])(t.component))),Object(n["g"])(r,{id:"close",onClick:t.close,text:"X",color:"green"},null,8,["onClick"])]),Object(n["g"])("form",{onSubmit:e[3]||(e[3]=Object(n["F"])((function(){return l.login&&l.login.apply(l,arguments)}),["prevent"])),method:"post"},[Object(n["E"])(Object(n["g"])("input",{type:"text",name:"email",placeholder:"email","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.email=t})},null,512),[[n["C"],o.email]]),Ee,Ie,Object(n["E"])(Object(n["g"])("input",{type:"text",name:"password",placeholder:"password","onUpdate:modelValue":e[2]||(e[2]=function(t){return o.password=t})},null,512),[[n["C"],o.password]]),Pe,Ge,Object(n["g"])(r,{id:"loginbtn",type:"submit",text:"Login",color:"green"})],32)])})),Me={name:"login",props:{},components:{Button:b},data:function(){return{email:"",password:""}},methods:{login:function(){var t={email:this.email,password:this.password};p.a.post("http://localhost:2000/login",t).then((function(t){console.log("Login successful:",t.data)})).catch((function(t){console.error("Login failed:",t)}))}}};c("0208");Me.render=Te,Me.__scopeId="data-v-432cde0c";var $e=Me,We=Object(n["G"])("data-v-ff5eae7c");Object(n["s"])("data-v-ff5eae7c");var He={id:"physics"},Fe=Object(n["f"])(" Welocme to physics page bro... "),Je=Object(n["g"])("br",null,null,-1),Re=Object(n["f"])(" you can get the naths test series from this page only.. Solve the following questions.. "),Xe={class:"questions"},Ne={class:"content-block"},Ke={for:"{{task.A}}"},Qe={for:"{{task.B}}"},Ye={for:"C"},Ze={for:"{{task.D}}"},tc={key:0},ec={style:{color:"green"}};Object(n["q"])();var cc=We((function(t,e,c,a,o,l){return Object(n["p"])(),Object(n["d"])("div",He,[Fe,Je,Re,Object(n["g"])("div",Xe,[Object(n["g"])("ol",Ne,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(t.mutableList,(function(e){return Object(n["p"])(),Object(n["d"])("li",{key:e.id},[Object(n["g"])("p",null,[Object(n["g"])("strong",null,Object(n["z"])(e.question),1)]),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.A}}",value:"A","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",Ke,Object(n["z"])(e.A),1),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.B}}",value:"B","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",Qe,Object(n["z"])(e.B),1),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.C}}",value:"C","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",Ye,Object(n["z"])(e.C),1),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.D}}",value:"D","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",Ze,Object(n["z"])(e.D),1),t.capital[e.id]?(Object(n["p"])(),Object(n["d"])("p",tc,[Object(n["f"])(" your answer: "+Object(n["z"])(t.capital[e.id])+" ",1),Object(n["g"])("span",ec,"correct answer: "+Object(n["z"])(e.answer),1)])):Object(n["e"])("",!0)])})),128))])])])})),nc=Object(O["k"])({name:"physics",data:function(){return{mutableList:[{id:1,question:"Capital of India",A:"Lonow",B:"Lonow",C:"Lonow",D:"Delhi",answer:"D"},{id:2,question:"Capital of UP",A:"Lonow",B:"Lucknow",C:"Lonow",D:"Delhi",answer:"B"}],capital:[],count:0}},props:{users:Array},methods:{incrementCounter:function(){this.count+=1}}});c("53b4");nc.render=cc,nc.__scopeId="data-v-ff5eae7c";var ac=nc,oc=Object(n["G"])("data-v-9155d916");Object(n["s"])("data-v-9155d916");var lc={id:"chemistry"},rc=Object(n["f"])(" Welocme to maths page bro... "),ic=Object(n["g"])("br",null,null,-1),uc=Object(n["f"])(" you can get the naths test series from this page only.. Solve the following questions.. "),sc={class:"questions"},bc={class:"content-block"},dc={for:"{{task.A}}"},pc={for:"{{task.B}}"},jc={for:"C"},Oc={for:"{{task.D}}"},fc={key:0},gc={style:{color:"green"}};Object(n["q"])();var hc=oc((function(t,e,c,a,o,l){return Object(n["p"])(),Object(n["d"])("div",lc,[rc,ic,uc,Object(n["g"])("div",sc,[Object(n["g"])("ol",bc,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(t.mutableList,(function(e){return Object(n["p"])(),Object(n["d"])("li",{key:e.id},[Object(n["g"])("p",null,[Object(n["g"])("strong",null,Object(n["z"])(e.question),1)]),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.A}}",value:"A","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",dc,Object(n["z"])(e.A),1),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.B}}",value:"B","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",pc,Object(n["z"])(e.B),1),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.C}}",value:"C","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",jc,Object(n["z"])(e.C),1),Object(n["E"])(Object(n["g"])("input",{type:"radio",id:"{{task.D}}",value:"D","onUpdate:modelValue":function(c){return t.capital[e.id]=c},checked:!1},null,8,["onUpdate:modelValue"]),[[n["B"],t.capital[e.id]]]),Object(n["g"])("label",Oc,Object(n["z"])(e.D),1),t.capital[e.id]?(Object(n["p"])(),Object(n["d"])("p",fc,[Object(n["f"])(" your answer: "+Object(n["z"])(t.capital[e.id])+" ",1),Object(n["g"])("span",gc,"correct answer: "+Object(n["z"])(e.answer),1)])):Object(n["e"])("",!0)])})),128))])])])})),mc=Object(O["k"])({name:"chemistry",data:function(){return{mutableList:[{id:1,question:"Capital of India",A:"Lonow",B:"Lonow",C:"Lonow",D:"Delhi",answer:"D"},{id:2,question:"Capital of UP",A:"Lonow",B:"Lucknow",C:"Lonow",D:"Delhi",answer:"B"}],capital:[],count:0}},props:{users:Array},methods:{incrementCounter:function(){this.count+=1}}});c("eef0");mc.render=hc,mc.__scopeId="data-v-9155d916";var vc=mc,kc=[{path:"/collab-users",name:"home",component:M},{path:"/signup",name:"signup",component:ut},{path:"/collab-users/subject",name:"subject",component:Ce},{path:"/collab-users/test",name:"test",component:Bt},{path:"/aboutus",name:"aboutus",component:qe},{path:"/login",name:"login",component:$e},{path:"/maths",name:"maths",component:pe},{path:"/computer",name:"computer",component:Qt},{path:"/physics",name:"physics",component:ac},{path:"/chemistry",name:"chemistry",component:vc}],yc=Object(Lt["a"])({history:Object(Lt["b"])(),routes:kc}),wc=yc;Object(n["c"])(Dt).use(wc).mount("#app")},"8a5f":function(t,e,c){"use strict";c("dbe8")},"8ab1":function(t,e,c){"use strict";c("216f")},"8f4f":function(t,e,c){"use strict";c("54e6")},9086:function(t,e,c){},"97d3":function(t,e,c){"use strict";c("eb2f")},"9a4f":function(t,e,c){"use strict";c("34db")},af42:function(t,e,c){},b34e:function(t,e,c){},ce43:function(t,e,c){"use strict";c("af42")},d078:function(t,e,c){},d1e5:function(t,e,c){},d4ae:function(t,e,c){"use strict";c("d1e5")},dbe8:function(t,e,c){},e3a6:function(t,e,c){"use strict";c("5460")},e6ec:function(t,e,c){},eb2f:function(t,e,c){},eef0:function(t,e,c){"use strict";c("e6ec")},f94e:function(t,e,c){}});
//# sourceMappingURL=app.df126f79.js.map