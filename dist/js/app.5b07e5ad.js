(function(e){function t(t){for(var o,a,i=t[0],s=t[1],r=t[2],u=0,d=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);b&&b(t);while(d.length)d.shift()();return l.push.apply(l,r||[]),c()}function c(){for(var e,t=0;t<l.length;t++){for(var c=l[t],o=!0,i=1;i<c.length;i++){var s=c[i];0!==n[s]&&(o=!1)}o&&(l.splice(t--,1),e=a(a.s=c[0]))}return e}var o={},n={app:0},l=[];function a(t){if(o[t])return o[t].exports;var c=o[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=o,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(c,o,function(t){return e[t]}.bind(null,o));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/collab-users/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var r=0;r<i.length;r++)t(i[r]);var b=s;l.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"01e2":function(e,t,c){"use strict";c("b34e")},"0208":function(e,t,c){"use strict";c("f94e")},"1b3e":function(e,t,c){},"216f":function(e,t,c){},"2e15":function(e,t,c){"use strict";c("9086")},"2f9a":function(e,t,c){"use strict";c("f4f2")},"3c13":function(e,t,c){"use strict";c("baf1")},"4c10":function(e,t,c){"use strict";c("e3ae")},"53b4":function(e,t,c){"use strict";c("d078")},5460:function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);var o=c("7a23");const n={id:"app"},l={class:"green-text"};function a(e,t,c,a,i,s){const r=Object(o["B"])("navbar"),b=Object(o["B"])("tasks"),u=Object(o["B"])("router-view");return Object(o["u"])(),Object(o["g"])("div",n,[Object(o["j"])(r),(Object(o["u"])(!0),Object(o["g"])(o["a"],null,Object(o["A"])(i.tasks,e=>(Object(o["u"])(),Object(o["g"])("div",{class:"text-bg",key:e.Id},[Object(o["h"])("h3",l,Object(o["E"])(e.name),1),Object(o["h"])("p",null,Object(o["E"])(e.email),1),Object(o["h"])("p",null,Object(o["E"])(e.password),1)]))),128)),(Object(o["u"])(),Object(o["e"])(Object(o["C"])(e.component))),Object(o["j"])(b),Object(o["j"])(u)])}function i(e,t,c,n,l,a){return Object(o["u"])(),Object(o["g"])("button",{onClick:t[0]||(t[0]=e=>a.onClick()),style:Object(o["q"])({background:c.color}),class:"btn"},Object(o["E"])(c.text),5)}var s={name:"Button",props:{text:String,color:String},methods:{onClick(){console.log("login"),this.$emit("open-subject")}}},r=(c("3c13"),c("6b0d")),b=c.n(r);const u=b()(s,[["render",i],["__scopeId","data-v-fe0070e0"]]);var d=u,j=c("bc3a"),p=c.n(j);function h(e,t,c,n,l,a){const i=Object(o["B"])("Header");return Object(o["u"])(),Object(o["g"])("nav",null,[Object(o["j"])(i)])}var O=c("5c40");const m={class:"navigation"},g={class:"dropdown"},f={class:"dropdown-content"},k={class:"icon"},v={class:"dropdown-nav"},y={class:"dropdown"},C={class:"dropdown-content"};function w(e,t,c,n,l,a){const i=Object(o["B"])("Button"),s=Object(o["B"])("PostCpmponent");return Object(o["u"])(),Object(o["g"])("header",{class:Object(o["p"])({"scrolled-nav":e.scrollPosition})},[Object(o["h"])("nav",null,[Object(o["L"])(Object(o["h"])("ul",m,[Object(o["h"])("li",null,[Object(o["j"])(i,{id:"home",onClick:e.home,text:"Home",color:"green"},null,8,["onClick"])]),Object(o["h"])("li",null,[Object(o["j"])(i,{id:"subject",onClick:e.subject,text:"SUBJECTS",color:"green"},null,8,["onClick"])]),Object(o["h"])("li",null,[Object(o["h"])("div",g,[Object(o["j"])(i,{id:"test",onClick:e.test,text:"TEST",color:"green"},null,8,["onClick"]),Object(o["h"])("div",f,[Object(o["j"])(i,{id:"maths",onClick:e.maths,text:"Mathematics (Applied & Core)",color:"green"},null,8,["onClick"]),Object(o["j"])(i,{id:"computer",onClick:e.computer,text:"Computer Science/Informatics Practices",color:"green"},null,8,["onClick"]),Object(o["j"])(i,{id:"physics",onClick:e.physics,text:"Physics",color:"green"},null,8,["onClick"]),Object(o["j"])(i,{id:"chemistry",onClick:e.chemistry,text:"Chemistry",color:"green"},null,8,["onClick"])])])]),Object(o["h"])("li",null,[Object(o["j"])(i,{onClick:e.aboutus,text:"About Us",color:"green"},null,8,["onClick"])]),Object(o["h"])("li",null,[Object(o["j"])(i,{text:"Login",onClick:e.login,color:"green"},null,8,["onClick"])]),Object(o["h"])("li",null,[Object(o["j"])(i,{text:"Signup",onClick:e.signup,color:"green"},null,8,["onClick"])])],512),[[o["I"],!e.mobile]]),Object(o["h"])("div",k,[Object(o["L"])(Object(o["h"])("i",{onClick:t[0]||(t[0]=(...t)=>e.toggleMobile&&e.toggleMobile(...t)),class:Object(o["p"])(["far fa-bars",{"icon-active":e.mobileNav}])},null,2),[[o["I"],e.mobile]])]),Object(o["j"])(o["b"],{name:"mobile-nav"},{default:Object(o["K"])(()=>[Object(o["L"])(Object(o["h"])("ul",v,[Object(o["h"])("li",null,[Object(o["j"])(i,{id:"home",onClick:e.home,text:"Home",color:"green"},null,8,["onClick"])]),Object(o["h"])("li",null,[Object(o["j"])(i,{id:"subject",onClick:e.subject,text:"SUBJECTS",color:"green"},null,8,["onClick"])]),Object(o["h"])("li",null,[Object(o["h"])("div",y,[Object(o["j"])(i,{id:"test",onClick:e.test,text:"TEST",color:"green"},null,8,["onClick"]),Object(o["h"])("div",C,[Object(o["j"])(i,{id:"maths",onClick:e.maths,text:"Mathematics (Applied & Core)",color:"green"},null,8,["onClick"]),Object(o["j"])(i,{id:"computer",onClick:e.computer,text:"Computer Science/Informatics Practices",color:"green"},null,8,["onClick"]),Object(o["j"])(i,{id:"physics",onClick:e.physics,text:"Physics",color:"green"},null,8,["onClick"]),Object(o["j"])(i,{id:"chemistry",onClick:e.chemistry,text:"Chemistry",color:"green"},null,8,["onClick"])])])]),Object(o["h"])("li",null,[Object(o["j"])(i,{onClick:e.aboutus,text:"About Us",color:"green"},null,8,["onClick"])]),Object(o["h"])("li",null,[Object(o["j"])(i,{text:"Login",onClick:e.login,color:"green"},null,8,["onClick"])]),Object(o["h"])("li",null,[Object(o["j"])(i,{text:"Signup",onClick:e.signup,color:"green"},null,8,["onClick"])])],512),[[o["I"],e.mobileNav]])]),_:1}),(Object(o["u"])(),Object(o["e"])(Object(o["C"])(e.component))),Object(o["j"])(s,{onIsVisible:t[1]||(t[1]=t=>e.onclickChild(t))})])],2)}c("14d9");var L=Object(o["k"])({name:"Header",props:{title:String},components:{Button:d},data(){return{component:"",show:!0,scrollPosition:null,mobile:!1,mobileNav:null,windowWidth:null}},created(){window.addEventListener("resize",this.checkScreen),this.checkScreen()},methods:{onclickChild(e){this.show=e,this.$forceUpdate||(this.sh="updated"),alert(this.show)},home(){this.$router.push({path:"/collab-users"})},signup(){this.$router.push({path:"/signup"})},subject(){this.$router.push({path:"/collab-users/subject"})},test(){this.$router.push({path:"/collab-users/test"})},aboutus(){this.$router.push({path:"/aboutus"})},login(){this.$router.push({path:"/login"})},maths(){this.$router.push({path:"/maths"})},computer(){this.$router.push({path:"/computer"})},physics(){this.$router.push({path:"/physics"})},chemistry(){this.$router.push({path:"/chemistry"})},toggleMobile(){this.mobileNav=!this.mobileNav},checkScreen(){this.windowWidth=window.innerWidth,this.windowWidth<=750?this.mobile=!0:(this.mobile=!1,this.mobileNav=!1)}}});c("4c10");const U=b()(L,[["render",w],["__scopeId","data-v-7cdd1595"]]);var E=U,A=Object(O["o"])({components:{Header:E},name:"navbar"});const x=b()(A,[["render",h]]);var B=x;const D=e=>(Object(o["x"])("data-v-0f92d474"),e=e(),Object(o["v"])(),e),V={id:"home"},S=D(()=>Object(o["h"])("h1",null,"Welocome to Collab learn.",-1)),I=D(()=>Object(o["h"])("p",null,"your code will appear here",-1)),_=D(()=>Object(o["h"])("p",null,[Object(o["i"])(" For CUET syllabus "),Object(o["h"])("a",{href:"/assets/pdfs/IBCUETUG2023.pdf",target:"_blank"},"click here"),Object(o["i"])(". ")],-1)),T={class:"row"},q={class:"col-md-4"},P={class:"col-md-4"},G={class:"col-md-4"},M={class:"col-md-4"},H={class:"col-md-4"},$={class:"col-md-4"};function W(e,t,c,n,l,a){const i=Object(o["B"])("collab-card"),s=Object(o["B"])("collabCard");return Object(o["u"])(),Object(o["g"])("div",V,[S,I,_,Object(o["h"])("div",T,[Object(o["h"])("div",q,[Object(o["j"])(i)]),Object(o["h"])("div",P,[Object(o["j"])(s)]),Object(o["h"])("div",G,[Object(o["j"])(s)]),Object(o["h"])("div",M,[Object(o["j"])(s)]),Object(o["h"])("div",H,[Object(o["j"])(s)]),Object(o["h"])("div",$,[Object(o["j"])(s)])])])}const N=e=>(Object(o["x"])("data-v-a42f7626"),e=e(),Object(o["v"])(),e),J={class:"collab-card col-lg-4 col-md-6 mb-lg-0 mb-5"},z=N(()=>Object(o["h"])("div",{class:"card"},[Object(o["h"])("h2",{class:"align-center"},"Target CUET 2024"),Object(o["h"])("div",{class:"container align-center mt-3"},[Object(o["h"])("h3",null,[Object(o["h"])("b",null,"1000+ topic")]),Object(o["h"])("h4",null,"10000+ questions"),Object(o["h"])("p",null,"Start your preperation with concept and practice")]),Object(o["h"])("div",null,[Object(o["h"])("p",null,[Object(o["i"])(" For CUET syllabus "),Object(o["h"])("a",{href:"/assets/pdfs/IBCUETUG2023.pdf",target:"_blank"},"click here"),Object(o["i"])(". ")])])],-1)),F=[z];function K(e,t,c,n,l,a){return Object(o["u"])(),Object(o["g"])("div",J,F)}c("ab8b"),c("9537"),c("3e48");var X={name:"collab-card",setup(){}};c("5757");const Z=b()(X,[["render",K],["__scopeId","data-v-a42f7626"]]);var R=Z,Y=Object(O["o"])({name:"Home",components:{collabCard:R}});c("929d");const Q=b()(Y,[["render",W],["__scopeId","data-v-0f92d474"]]);var ee=Q;const te={key:0};function ce(e,t,c,n,l,a){return Object(o["u"])(!0),Object(o["g"])(o["a"],null,Object(o["A"])(c.tasks,c=>(Object(o["u"])(),Object(o["g"])("div",{class:"user",key:c.id},[Object(o["h"])("h3",null,Object(o["E"])(c.id),1),Object(o["h"])("p",null,Object(o["E"])(c.email),1),Object(o["h"])("button",{onClick:t[0]||(t[0]=(...e)=>a.MessageMethod&&a.MessageMethod(...e))},"login"),Object(o["h"])("button",{onClick:t[1]||(t[1]=(...e)=>a.test&&a.test(...e))},"getMessage"),!0===e.check?(Object(o["u"])(),Object(o["g"])("div",te,[Object(o["h"])("p",null,Object(o["E"])(l.name),1),Object(o["h"])("p",null,Object(o["E"])(l.email),1)])):Object(o["f"])("",!0)]))),128)}var oe={async setup(){const e=await p.a.get("http://localhost:2000/test/");return console.log(e),{result:e}}},ne={test(){return oe().get("/test")}},le={name:"Tasks",props:{tasks:Array},data(){return{name:String,email:String,cart:5}},methods:{MessageMethod(){this.cart=this.cart+1,this.cart>14&&alert("Stop counting value reaches to  "+this.cart)},test(){ne.test({name:this.name,email:this.email}),alert(this.msg+"message"),this.check=!0}}};c("e3a6");const ae=b()(le,[["render",ce],["__scopeId","data-v-dac85348"]]);var ie=ae;const se=e=>(Object(o["x"])("data-v-0d5ba554"),e=e(),Object(o["v"])(),e),re={class:"signup"},be=se(()=>Object(o["h"])("h2",null,"Post Data To Api into PostGreSql",-1)),ue=se(()=>Object(o["h"])("br",null,null,-1)),de=se(()=>Object(o["h"])("br",null,null,-1)),je=se(()=>Object(o["h"])("br",null,null,-1)),pe=se(()=>Object(o["h"])("br",null,null,-1)),he=se(()=>Object(o["h"])("br",null,null,-1)),Oe=se(()=>Object(o["h"])("br",null,null,-1)),me=se(()=>Object(o["h"])("br",null,null,-1)),ge=se(()=>Object(o["h"])("br",null,null,-1));function fe(e,t,c,n,l,a){const i=Object(o["B"])("Button");return Object(o["u"])(),Object(o["g"])("div",re,[Object(o["h"])("span",null,[be,Object(o["j"])(i,{id:"close",onClick:e.close,text:"X",color:"green"},null,8,["onClick"])]),Object(o["h"])("form",{onSubmit:t[4]||(t[4]=(...e)=>a.SignUp&&a.SignUp(...e)),method:"post"},[Object(o["L"])(Object(o["h"])("input",{type:"number",name:"Id",placeholder:"Id","onUpdate:modelValue":t[0]||(t[0]=e=>l.posts.Id=e)},null,512),[[o["H"],l.posts.Id]]),ue,de,Object(o["L"])(Object(o["h"])("input",{type:"text",name:"name",placeholder:"name","onUpdate:modelValue":t[1]||(t[1]=e=>l.posts.name=e)},null,512),[[o["H"],l.posts.name]]),je,pe,Object(o["L"])(Object(o["h"])("input",{type:"text",name:"email",placeholder:"email","onUpdate:modelValue":t[2]||(t[2]=e=>l.posts.email=e)},null,512),[[o["H"],l.posts.email]]),he,Oe,Object(o["L"])(Object(o["h"])("input",{type:"text",name:"password",placeholder:"password","onUpdate:modelValue":t[3]||(t[3]=e=>l.posts.password=e)},null,512),[[o["H"],l.posts.password]]),me,ge,Object(o["j"])(i,{id:"signupbtn",type:"submit",text:"SignUp",color:"green"})],32)])}var ke={name:"PostComponent",props:{isModalVisible:String},components:{Button:d},data(){return{posts:{Id:"",name:"",email:"",password:""},component:""}},methods:{SignUp(e){p.a.post("http://localhost:2000/register",this.posts).then(alert("Account created successfully... "+this.posts.name)).catch(e=>alert(e)),e.preventDefault(),this.$router.push({path:"/"})}},close(){this.$router.push({path:"/login"})}};c("97d3");const ve=b()(ke,[["render",fe],["__scopeId","data-v-0d5ba554"]]);var ye=ve;const Ce=e=>(Object(o["x"])("data-v-203f57f4"),e=e(),Object(o["v"])(),e),we={id:"test"},Le=Ce(()=>Object(o["h"])("br",null,null,-1)),Ue={class:"questions"},Ee={class:"content-block"},Ae=["onUpdate:modelValue"],xe={for:"{{task.A}}"},Be=["onUpdate:modelValue"],De={for:"{{task.B}}"},Ve=["onUpdate:modelValue"],Se={for:"C"},Ie=["onUpdate:modelValue"],_e={for:"{{task.D}}"},Te={key:0},qe={style:{color:"green"}};function Pe(e,t,c,n,l,a){return Object(o["u"])(),Object(o["g"])("div",we,[Object(o["i"])(" Welocme to test page bro... "),Le,Object(o["i"])(" you can get the test series from this page only.. Solve the following questions.. "),Object(o["h"])("div",Ue,[Object(o["h"])("ol",Ee,[(Object(o["u"])(!0),Object(o["g"])(o["a"],null,Object(o["A"])(e.mutableList,t=>(Object(o["u"])(),Object(o["g"])("li",{key:t.id},[Object(o["h"])("p",null,[Object(o["h"])("strong",null,Object(o["E"])(t.question),1)]),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.A}}",value:"A","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,Ae),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",xe,Object(o["E"])(t.A),1),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.B}}",value:"B","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,Be),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",De,Object(o["E"])(t.B),1),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.C}}",value:"C","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,Ve),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",Se,Object(o["E"])(t.C),1),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.D}}",value:"D","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,Ie),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",_e,Object(o["E"])(t.D),1),e.capital[t.id]?(Object(o["u"])(),Object(o["g"])("p",Te,[Object(o["i"])(" your answer: "+Object(o["E"])(e.capital[t.id])+" ",1),Object(o["h"])("span",qe,"correct answer: "+Object(o["E"])(t.answer),1)])):Object(o["f"])("",!0)]))),128))])])])}var Ge=Object(O["o"])({name:"Test",data(){return{mutableList:[{id:1,question:"Capital of India",A:"Lonow",B:"Lonow",C:"Lonow",D:"Delhi",answer:"D"},{id:2,question:"Capital of UP",A:"Lonow",B:"Lucknow",C:"Lonow",D:"Delhi",answer:"B"}],capital:[],count:0}},props:{users:Array},methods:{incrementCounter:function(){this.count+=1}}});c("01e2");const Me=b()(Ge,[["render",Pe],["__scopeId","data-v-203f57f4"]]);var He=Me,$e={name:"App",components:{navbar:B,Header:E,Home:ee,Tasks:ie,Button:d,PostComponent:ye,Test:He},data(){return{tasks:[],cart:0}},methods:{getData(){p.a.get("http://localhost:2000/users").then(e=>{console.log("User got successfully:",e.data),this.tasks=e.data}).catch(e=>{console.error("Error getting user:",e)})}}};c("645f");const We=b()($e,[["render",a]]);var Ne=We,Je=c("6605");const ze=e=>(Object(o["x"])("data-v-7ec3985e"),e=e(),Object(o["v"])(),e),Fe={id:"subject"},Ke={key:0,class:"search"},Xe={class:"content"},Ze=ze(()=>Object(o["h"])("p",null,"Answer:",-1)),Re={class:"answer"};function Ye(e,t,c,n,l,a){return Object(o["u"])(),Object(o["g"])("div",Fe,[Object(o["h"])("button",{class:"btn-search btn-primary btn-block",onClick:t[0]||(t[0]=e=>a.main()),type:"submit"}," Ask anything.. "),l.started?(Object(o["u"])(),Object(o["g"])("div",Ke,[Object(o["L"])(Object(o["h"])("textarea",{type:"text",id:"searchIten","onUpdate:modelValue":t[1]||(t[1]=e=>l.search=e),placeholder:"Enter or paste topic to learn"},"\r\n      ",512),[[o["H"],l.search]]),Object(o["h"])("button",{class:"btn-send btn-primary btn-block",onClick:t[2]||(t[2]=e=>a.send()),type:"submit"}," send "),Object(o["h"])("button",{class:"btn-exit btn-primary btn-block",onClick:t[3]||(t[3]=e=>a.exit()),type:"submit"}," Exit ")])):Object(o["f"])("",!0),Object(o["h"])("div",Xe,[Ze,Object(o["h"])("p",Re,Object(o["E"])(l.completionText),1)])])}var Qe=c("5c08"),et=c("ed18"),tt=c.n(et);tt.a.config();const ct=new Qe["Configuration"]({apiKey:"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",organization:"YOURE_OPENAI_OGRANIZATION"});ct.baseOptions.headers={Authorization:"Bearer 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"};const ot=new Qe["OpenAIApi"](ct);var nt=ot,lt=c("7e6e"),at=c.n(lt),it={components:{},name:"Subject",data(){return{components:[],search:"",check:"true",completionText:"",chatHistory:[],messages:"",completion:"",started:!1}},computed:{},methods:{send(){},exit(){this.search="Exit",this.started=!1,console.log(this.search)},async main(){this.started=!0,console.log(at.a.bold.green("Welcome to the Chatbot Program!")),console.log(at.a.bold.green("You can start chatting with the bot."));while(this.check)try{if(this.messages=this.chatHistory.map(([e,t])=>({role:e,content:t})),this.messages.push({role:"user",content:this.search}),this.completion=await nt.createChatCompletion({model:"gpt-3.5-turbo",messages:this.messages}),this.completionText=this.completion.data.choices[0].message.content,"exit"===this.search.toLowerCase())return;this.chatHistory.push(["user",this.search]),this.chatHistory.push(["assistant",this.completionText])}catch(e){console.error(at.a.red(e))}}}};c("2f9a");const st=b()(it,[["render",Ye],["__scopeId","data-v-7ec3985e"]]);var rt=st;const bt={id:"aboutus"},ut=Object(o["h"])("br",null,null,-1);function dt(e,t,c,n,l,a){return Object(o["u"])(),Object(o["g"])("div",bt,[Object(o["i"])(" Welocme to Collab learn Website bro... "),ut,Object(o["i"])(" you can get the study matarial, test series and video lectures from this website only.. ")])}var jt=Object(O["o"])({name:"Aboutus"});const pt=b()(jt,[["render",dt]]);var ht=pt;const Ot=e=>(Object(o["x"])("data-v-432cde0c"),e=e(),Object(o["v"])(),e),mt={class:"login"},gt=Ot(()=>Object(o["h"])("h2",null,"Login Data To Api into PostGreSql",-1)),ft=Ot(()=>Object(o["h"])("br",null,null,-1)),kt=Ot(()=>Object(o["h"])("br",null,null,-1)),vt=Ot(()=>Object(o["h"])("br",null,null,-1)),yt=Ot(()=>Object(o["h"])("br",null,null,-1));function Ct(e,t,c,n,l,a){const i=Object(o["B"])("Button");return Object(o["u"])(),Object(o["g"])("div",mt,[Object(o["h"])("span",null,[gt,(Object(o["u"])(),Object(o["e"])(Object(o["C"])(e.component))),Object(o["j"])(i,{id:"close",onClick:e.close,text:"X",color:"green"},null,8,["onClick"])]),Object(o["h"])("form",{onSubmit:t[2]||(t[2]=Object(o["M"])((...e)=>a.login&&a.login(...e),["prevent"])),method:"post"},[Object(o["L"])(Object(o["h"])("input",{type:"text",name:"email",placeholder:"email","onUpdate:modelValue":t[0]||(t[0]=e=>l.email=e)},null,512),[[o["H"],l.email]]),ft,kt,Object(o["L"])(Object(o["h"])("input",{type:"text",name:"password",placeholder:"password","onUpdate:modelValue":t[1]||(t[1]=e=>l.password=e)},null,512),[[o["H"],l.password]]),vt,yt,Object(o["j"])(i,{id:"loginbtn",type:"submit",text:"Login",color:"green"})],32)])}var wt={name:"login",props:{},components:{Button:d},data(){return{email:"",password:""}},methods:{login(){const e={email:this.email,password:this.password};p.a.post("http://localhost:2000/login",e).then(e=>{console.log("Login successful:",e.data)}).catch(e=>{console.error("Login failed:",e)})}}};c("0208");const Lt=b()(wt,[["render",Ct],["__scopeId","data-v-432cde0c"]]);var Ut=Lt;const Et=e=>(Object(o["x"])("data-v-fc35c36c"),e=e(),Object(o["v"])(),e),At={id:"maths"},xt=Et(()=>Object(o["h"])("br",null,null,-1)),Bt={class:"questions"},Dt={class:"content-block"},Vt=["onUpdate:modelValue"],St={for:"{{task.A}}"},It=["onUpdate:modelValue"],_t={for:"{{task.B}}"},Tt=["onUpdate:modelValue"],qt={for:"C"},Pt=["onUpdate:modelValue"],Gt={for:"{{task.D}}"},Mt={key:0},Ht={style:{color:"green"}};function $t(e,t,c,n,l,a){return Object(o["u"])(),Object(o["g"])("div",At,[Object(o["i"])(" Welocme to maths page bro... "),xt,Object(o["i"])(" you can get the naths test series from this page only.. Solve the following questions.. "),Object(o["h"])("div",Bt,[Object(o["h"])("ol",Dt,[(Object(o["u"])(!0),Object(o["g"])(o["a"],null,Object(o["A"])(e.mutableList,t=>(Object(o["u"])(),Object(o["g"])("li",{key:t.id},[Object(o["h"])("p",null,[Object(o["h"])("strong",null,Object(o["E"])(t.question),1)]),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.A}}",value:"A","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,Vt),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",St,Object(o["E"])(t.A),1),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.B}}",value:"B","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,It),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",_t,Object(o["E"])(t.B),1),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.C}}",value:"C","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,Tt),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",qt,Object(o["E"])(t.C),1),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.D}}",value:"D","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,Pt),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",Gt,Object(o["E"])(t.D),1),e.capital[t.id]?(Object(o["u"])(),Object(o["g"])("p",Mt,[Object(o["i"])(" your answer: "+Object(o["E"])(e.capital[t.id])+" ",1),Object(o["h"])("span",Ht,"correct answer: "+Object(o["E"])(t.answer),1)])):Object(o["f"])("",!0)]))),128))])])])}var Wt=Object(O["o"])({name:"maths",data(){return{mutableList:[{id:1,question:"Capital of India",A:"Lonow",B:"Lonow",C:"Lonow",D:"Delhi",answer:"D"},{id:2,question:"Capital of UP",A:"Lonow",B:"Lucknow",C:"Lonow",D:"Delhi",answer:"B"}],capital:[],count:0}},props:{users:Array},methods:{incrementCounter:function(){this.count+=1}}});c("8ab1");const Nt=b()(Wt,[["render",$t],["__scopeId","data-v-fc35c36c"]]);var Jt=Nt;const zt=e=>(Object(o["x"])("data-v-1b327713"),e=e(),Object(o["v"])(),e),Ft={id:"computer"},Kt=zt(()=>Object(o["h"])("br",null,null,-1)),Xt={class:"content-block"},Zt=["onUpdate:modelValue"],Rt={for:"{{task.A}}"},Yt=["onUpdate:modelValue"],Qt={for:"{{task.B}}"},ec=["onUpdate:modelValue"],tc={for:"C"},cc=["onUpdate:modelValue"],oc={for:"{{task.D}}"},nc={key:0},lc={style:{color:"green"}};function ac(e,t,c,n,l,a){return Object(o["u"])(),Object(o["g"])("div",Ft,[Object(o["i"])(" Welocme to computer page bro... "),Kt,Object(o["i"])(" you can get the computer test series from this page only.. Solve the following questions.. "),Object(o["h"])("div",null,[Object(o["h"])("ol",Xt,[(Object(o["u"])(!0),Object(o["g"])(o["a"],null,Object(o["A"])(e.mutableList,t=>(Object(o["u"])(),Object(o["g"])("li",{key:t.id},[Object(o["h"])("p",null,[Object(o["h"])("strong",null,Object(o["E"])(t.question),1)]),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.A}}",value:"A","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,Zt),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",Rt,Object(o["E"])(t.A),1),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.B}}",value:"B","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,Yt),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",Qt,Object(o["E"])(t.B),1),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.C}}",value:"C","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,ec),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",tc,Object(o["E"])(t.C),1),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.D}}",value:"D","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,cc),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",oc,Object(o["E"])(t.D),1),e.capital[t.id]?(Object(o["u"])(),Object(o["g"])("p",nc,[Object(o["i"])(" your answer: "+Object(o["E"])(e.capital[t.id])+" ",1),Object(o["h"])("span",lc,"correct answer: "+Object(o["E"])(t.answer),1)])):Object(o["f"])("",!0)]))),128))])])])}var ic=Object(O["o"])({name:"computerscience",data(){return{mutableList:[{id:1,question:"Capital of India",A:"Lonow",B:"Lonow",C:"Lonow",D:"Delhi",answer:"D"},{id:2,question:"Capital of UP",A:"Lonow",B:"Lucknow",C:"Lonow",D:"Delhi",answer:"B"}],capital:[],count:0}},props:{users:Array},methods:{incrementCounter:function(){this.count+=1}}});c("2e15");const sc=b()(ic,[["render",ac],["__scopeId","data-v-1b327713"]]);var rc=sc;const bc=e=>(Object(o["x"])("data-v-ff5eae7c"),e=e(),Object(o["v"])(),e),uc={id:"physics"},dc=bc(()=>Object(o["h"])("br",null,null,-1)),jc={class:"questions"},pc={class:"content-block"},hc=["onUpdate:modelValue"],Oc={for:"{{task.A}}"},mc=["onUpdate:modelValue"],gc={for:"{{task.B}}"},fc=["onUpdate:modelValue"],kc={for:"C"},vc=["onUpdate:modelValue"],yc={for:"{{task.D}}"},Cc={key:0},wc={style:{color:"green"}};function Lc(e,t,c,n,l,a){return Object(o["u"])(),Object(o["g"])("div",uc,[Object(o["i"])(" Welocme to physics page bro... "),dc,Object(o["i"])(" you can get the naths test series from this page only.. Solve the following questions.. "),Object(o["h"])("div",jc,[Object(o["h"])("ol",pc,[(Object(o["u"])(!0),Object(o["g"])(o["a"],null,Object(o["A"])(e.mutableList,t=>(Object(o["u"])(),Object(o["g"])("li",{key:t.id},[Object(o["h"])("p",null,[Object(o["h"])("strong",null,Object(o["E"])(t.question),1)]),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.A}}",value:"A","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,hc),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",Oc,Object(o["E"])(t.A),1),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.B}}",value:"B","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,mc),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",gc,Object(o["E"])(t.B),1),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.C}}",value:"C","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,fc),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",kc,Object(o["E"])(t.C),1),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.D}}",value:"D","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,vc),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",yc,Object(o["E"])(t.D),1),e.capital[t.id]?(Object(o["u"])(),Object(o["g"])("p",Cc,[Object(o["i"])(" your answer: "+Object(o["E"])(e.capital[t.id])+" ",1),Object(o["h"])("span",wc,"correct answer: "+Object(o["E"])(t.answer),1)])):Object(o["f"])("",!0)]))),128))])])])}var Uc=Object(O["o"])({name:"physics",data(){return{mutableList:[{id:1,question:"Capital of India",A:"Lonow",B:"Lonow",C:"Lonow",D:"Delhi",answer:"D"},{id:2,question:"Capital of UP",A:"Lonow",B:"Lucknow",C:"Lonow",D:"Delhi",answer:"B"}],capital:[],count:0}},props:{users:Array},methods:{incrementCounter:function(){this.count+=1}}});c("53b4");const Ec=b()(Uc,[["render",Lc],["__scopeId","data-v-ff5eae7c"]]);var Ac=Ec;const xc=e=>(Object(o["x"])("data-v-9155d916"),e=e(),Object(o["v"])(),e),Bc={id:"chemistry"},Dc=xc(()=>Object(o["h"])("br",null,null,-1)),Vc={class:"questions"},Sc={class:"content-block"},Ic=["onUpdate:modelValue"],_c={for:"{{task.A}}"},Tc=["onUpdate:modelValue"],qc={for:"{{task.B}}"},Pc=["onUpdate:modelValue"],Gc={for:"C"},Mc=["onUpdate:modelValue"],Hc={for:"{{task.D}}"},$c={key:0},Wc={style:{color:"green"}};function Nc(e,t,c,n,l,a){return Object(o["u"])(),Object(o["g"])("div",Bc,[Object(o["i"])(" Welocme to maths page bro... "),Dc,Object(o["i"])(" you can get the naths test series from this page only.. Solve the following questions.. "),Object(o["h"])("div",Vc,[Object(o["h"])("ol",Sc,[(Object(o["u"])(!0),Object(o["g"])(o["a"],null,Object(o["A"])(e.mutableList,t=>(Object(o["u"])(),Object(o["g"])("li",{key:t.id},[Object(o["h"])("p",null,[Object(o["h"])("strong",null,Object(o["E"])(t.question),1)]),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.A}}",value:"A","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,Ic),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",_c,Object(o["E"])(t.A),1),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.B}}",value:"B","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,Tc),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",qc,Object(o["E"])(t.B),1),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.C}}",value:"C","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,Pc),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",Gc,Object(o["E"])(t.C),1),Object(o["L"])(Object(o["h"])("input",{type:"radio",id:"{{task.D}}",value:"D","onUpdate:modelValue":c=>e.capital[t.id]=c,checked:!1},null,8,Mc),[[o["G"],e.capital[t.id]]]),Object(o["h"])("label",Hc,Object(o["E"])(t.D),1),e.capital[t.id]?(Object(o["u"])(),Object(o["g"])("p",$c,[Object(o["i"])(" your answer: "+Object(o["E"])(e.capital[t.id])+" ",1),Object(o["h"])("span",Wc,"correct answer: "+Object(o["E"])(t.answer),1)])):Object(o["f"])("",!0)]))),128))])])])}var Jc=Object(O["o"])({name:"chemistry",data(){return{mutableList:[{id:1,question:"Capital of India",A:"Lonow",B:"Lonow",C:"Lonow",D:"Delhi",answer:"D"},{id:2,question:"Capital of UP",A:"Lonow",B:"Lucknow",C:"Lonow",D:"Delhi",answer:"B"}],capital:[],count:0}},props:{users:Array},methods:{incrementCounter:function(){this.count+=1}}});c("eef0");const zc=b()(Jc,[["render",Nc],["__scopeId","data-v-9155d916"]]);var Fc=zc;const Kc=[{path:"/collab-users",name:"home",component:ee},{path:"/signup",name:"signup",component:ye},{path:"/collab-users/subject",name:"subject",component:rt},{path:"/collab-users/test",name:"test",component:He},{path:"/aboutus",name:"aboutus",component:ht},{path:"/login",name:"login",component:Ut},{path:"/maths",name:"maths",component:Jt},{path:"/computer",name:"computer",component:rc},{path:"/physics",name:"physics",component:Ac},{path:"/chemistry",name:"chemistry",component:Fc}],Xc=Object(Je["a"])({history:Object(Je["b"])(),mode:"history",routes:Kc});var Zc=Xc;c("4989");Object(o["d"])(Ne).use(Zc).mount("#app")},5757:function(e,t,c){"use strict";c("c6f4")},"645f":function(e,t,c){"use strict";c("1b3e")},"8ab1":function(e,t,c){"use strict";c("216f")},9086:function(e,t,c){},"929d":function(e,t,c){"use strict";c("c510")},"97d3":function(e,t,c){"use strict";c("eb2f")},b34e:function(e,t,c){},baf1:function(e,t,c){},c510:function(e,t,c){},c6f4:function(e,t,c){},d078:function(e,t,c){},e3a6:function(e,t,c){"use strict";c("5460")},e3ae:function(e,t,c){},e6ec:function(e,t,c){},eb2f:function(e,t,c){},eef0:function(e,t,c){"use strict";c("e6ec")},f4f2:function(e,t,c){},f94e:function(e,t,c){}});
//# sourceMappingURL=app.5b07e5ad.js.map