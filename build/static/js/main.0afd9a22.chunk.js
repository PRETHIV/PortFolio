(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e,t,s){},23:function(e,t,s){},24:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var i=s(0),c=s.n(i),n=s(6),a=s.n(n),r=s(3),l=(s(19),s(45)),d=s(46),j=s(1);function m(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(j.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("a",{href:"#intro",className:"logo",children:"Programmer."}),Object(j.jsxs)("div",{className:"itemContainer",children:[Object(j.jsx)(l.a,{className:"icon"}),Object(j.jsx)("span",{children:"+91 8072794876"})]}),Object(j.jsxs)("div",{className:"itemContainer",children:[Object(j.jsx)(d.a,{className:"icon"}),Object(j.jsx)("span",{children:"prethiv191@gmail.com"})]})]}),Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(j.jsx)("span",{className:"line1"}),Object(j.jsx)("span",{className:"line2"}),Object(j.jsx)("span",{className:"line3"})]})})]})})}s(23);var o=s(11);function b(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(o.a)(e.current,{showCursor:!0,backDelay:1500,backSpeed:60,strings:["FullStackDeveloper","Learner","Experienced Programmer"]})}),[]),Object(j.jsxs)("div",{className:"intro",id:"intro",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("div",{className:"imgContainer",children:Object(j.jsx)("img",{src:"assets/prethiv_hd.png",alt:""})})}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h2",{children:"Hi There, I'm"}),Object(j.jsx)("h1",{children:"Prethiv Nageswaran"}),Object(j.jsxs)("h3",{children:["Fulltime ",Object(j.jsx)("span",{ref:e})]})]}),Object(j.jsx)("a",{href:"#portfolio",children:Object(j.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}s(24);function g(e){var t=e.id,s=e.title,i=e.active,c=e.setSelected;return Object(j.jsx)("li",{className:i?"portfolioList active":"portfolioList",onClick:function(){return c(t)},children:s})}s(25);var h=[{id:1,title:"C++",img:"assets/programming_languages/cpp.png"},{id:2,title:"C",img:"assets/programming_languages/C.png"},{id:3,title:"Python3",img:"assets/programming_languages/python3.png"},{id:4,title:"Java",img:"assets/programming_languages/java.png"},{id:5,title:"Visual C#",img:"assets/programming_languages/VisualC.png"}],p=[{id:1,title:"Bootstrap4",img:"assets/frameworksAndMobileStacks/BS.png"},{id:2,title:"React Native",img:"assets/frameworksAndMobileStacks/reactNative.png"}],O=[{id:1,title:"HTML",img:"assets/WebStacks/html.png"},{id:2,title:"CSS",img:"assets/WebStacks/css3.png"},{id:3,title:"Javascript",img:"assets/WebStacks/js.png"},{id:4,title:"Php",img:"assets/WebStacks/php.png"},{id:5,title:"ReactJs",img:"assets/WebStacks/reactJS.png"},{id:6,title:"NodeJs",img:"assets/WebStacks/nodejs.png"},{id:7,title:"Selenium",img:"assets/WebStacks/Selenium.jpg"}],u=[{id:1,title:"ElasticSearch",img:"assets/db/es.png"},{id:2,title:"MySql",img:"assets/db/mysql.png"}],x=[{id:1,title:"Content Social Media App",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:2,title:"Content Rampa UI Design",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:3,title:"Content E-commerce Web Design",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:4,title:"Content Relax Mobile App",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:5,title:"Content Keser Web Design",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"},{id:6,title:"Content Banking App",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"}];function v(){var e=Object(i.useState)("featured"),t=Object(r.a)(e,2),s=t[0],c=t[1],n=Object(i.useState)([]),a=Object(r.a)(n,2),l=a[0],d=a[1];return Object(i.useEffect)((function(){switch(s){case"featured":default:d(h);break;case"web":d(p);break;case"mobile":d(O);break;case"design":d(u);break;case"content":d(x)}}),[s]),Object(j.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(j.jsx)("h1",{children:"Skills"}),Object(j.jsx)("ul",{children:[{id:"featured",title:"Programming Languages"},{id:"web",title:"Frameworks & Mobile Stacks"},{id:"mobile",title:"Web Technologies"},{id:"design",title:"Databases"}].map((function(e){return Object(j.jsx)(g,{title:e.title,active:s===e.id,setSelected:c,id:e.id})}))}),Object(j.jsx)("div",{className:"container",children:l.map((function(e){return Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:e.img,alt:""}),Object(j.jsx)("h3",{children:e.title})]})}))})]})}s(26);function f(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),s=t[0],c=t[1],n=[{id:"1",icon:"./assets/acheivements/award.png",title:"Guvi Leaderboard 2019",desc:"Awarded for acheiving top leaderboard person of guvi.in coding portal",img:"assets/acheivements/guvi.jpg"},{id:"2",icon:"./assets/acheivements/award.png",title:"PayPal Spot Award",desc:"Got a spot award recognition for domain migration work at paypal",img:"assets/acheivements/spotaward.png"},{id:"3",icon:"./assets/acheivements/award.png",title:"Hackerrank Six Star Rated Coder",desc:"Got recognized by hackerrank for advanced problem solving ",img:"assets/acheivements/Hackerrank.png"}],a=function(e){c("left"===e?s>0?s-1:2:s<n.length-1?s+1:0)};return Object(j.jsxs)("div",{className:"works",id:"works",children:[Object(j.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*s,"vw)")},children:n.map((function(e){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsxs)("div",{className:"leftContainer",children:[Object(j.jsx)("div",{className:"imgContainer",children:Object(j.jsx)("img",{src:e.icon,alt:""})}),Object(j.jsx)("h2",{children:e.title}),Object(j.jsx)("p",{children:e.desc})]})}),Object(j.jsx)("div",{className:"right",children:Object(j.jsx)("img",{src:e.img,alt:""})})]})})}))}),Object(j.jsx)("img",{src:"assets/arrow.png",className:"arrow left",alt:"",onClick:function(){return a("left")}}),Object(j.jsx)("img",{src:"assets/arrow.png",className:"arrow right",alt:"",onClick:function(){return a()}})]})}s(27),s(28);function N(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(j.jsx)("div",{className:"menu "+(t&&"active"),children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{onClick:function(){return s(!1)},children:Object(j.jsx)("a",{href:"#intro",children:"Home"})}),Object(j.jsx)("li",{onClick:function(){return s(!1)},children:Object(j.jsx)("a",{href:"#portfolio",children:"Skills"})}),Object(j.jsx)("li",{onClick:function(){return s(!1)},children:Object(j.jsx)("a",{href:"#works",children:"Works"})}),Object(j.jsx)("li",{onClick:function(){return s(!1)},children:Object(j.jsx)("a",{href:"#path",children:"Career Timeline"})})]})})}s(29),s(31);function C(){return Object(j.jsxs)("div",{className:"chrono",children:[Object(j.jsx)("div",{className:"path",id:"path",style:{backgroundColor:"white"},children:Object(j.jsx)("h1",{children:"Career Timeline"})}),Object(j.jsx)("div",{className:"timeline-section",children:Object(j.jsxs)("div",{className:"timeline-items",children:[Object(j.jsxs)("div",{className:"timeline-item",children:[Object(j.jsx)("div",{className:"timeline-dot-1"}),Object(j.jsx)("div",{className:"timeline-date",children:"2015"}),Object(j.jsxs)("div",{className:"timeline-content",children:[Object(j.jsx)("h3",{children:"Paypal"}),Object(j.jsx)("p",{children:"Software Engineer 1"})]})]}),Object(j.jsxs)("div",{className:"timeline-item",children:[Object(j.jsx)("div",{className:"timeline-dot-2"}),Object(j.jsx)("div",{className:"timeline-date",children:"2016"}),Object(j.jsxs)("div",{className:"timeline-content",children:[Object(j.jsx)("h3",{children:"Paypal"}),Object(j.jsx)("p",{children:"Software Engineer Intern"}),Object(j.jsx)("p",{})]})]}),Object(j.jsxs)("div",{className:"timeline-item",children:[Object(j.jsx)("div",{className:"timeline-dot-3"}),Object(j.jsx)("div",{className:"timeline-date",children:"2017"}),Object(j.jsxs)("div",{className:"timeline-content",children:[Object(j.jsx)("h3",{children:"Jeppiaar Eng. College"}),Object(j.jsx)("p",{children:"B.Tech in Information Technology"})]})]})]})})]})}var k=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),s=t[0],c=t[1];return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(m,{menuOpen:s,setMenuOpen:c}),Object(j.jsx)(N,{menuOpen:s,setMenuOpen:c}),Object(j.jsxs)("div",{className:"sections",children:[Object(j.jsx)(b,{}),Object(j.jsx)(v,{}),Object(j.jsx)(f,{}),Object(j.jsx)(C,{})]})]})};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.0afd9a22.chunk.js.map