import{c as R,j as e,R as w,r as t}from"./client-18074b33.js";import{b as P,F as u,a as K,S as f,C as E,P as h}from"./Icon_Character_Archive-884b1cfe.js";const I={label:"Fire",urlKey:"Fire"},L={label:"Ice",urlKey:"Ice"},N={label:"Physical",urlKey:"Physical"},v={label:"Lightning",urlKey:"Lightning"},H={label:"Wind",urlKey:"Wind"},C={label:"Imaginary",urlKey:"Imaginary"},F={label:"Quantum",urlKey:"Quantum"},W={fire:I,ice:L,physical:N,lightning:v,wind:H,imaginary:C,quantum:F},B={label:"Abundance",urlKey:"Abundance"},D={label:"Destruction",urlKey:"Destruction"},q={label:"Erudition",urlKey:"Erudition"},A={label:"Harmony",urlKey:"Harmony"},G={label:"Nihility",urlKey:"Nihility"},Q={label:"Preservation",urlKey:"Preservation"},V={label:"Hunt",urlKey:"Hunt"},k={abundance:B,destruction:D,Erudition:q,Harmony:A,Nihility:G,Preservation:Q,Hunt:V};function M(){const[a,m]=t.useState(!0),[d,l]=t.useState({}),[g,c]=t.useState({}),[y,S]=t.useState(!0),[s,p]=t.useState(""),[i,x]=t.useState([]),[o,n]=t.useState([]);if(t.useEffect(()=>{P().then(r=>{l(r.Characters),c(r.Weapons),n(r.SRPity),S(!1)})},[]),y)return e.jsx("div",{children:"Loading..."});const b=u(d,"StarRail",s,i,"Character",l),j=u(g,"StarRail",s,i,"Weapon",c);return e.jsxs(e.Fragment,{children:[e.jsx(K,{listShown:a,filter:i,setFilter:x,element:W,elementImgs:"StarRailElementImgs",elementExt:"webp",group:k,groupImgs:"StarRailPathImgs",groupExt:"webp"}),e.jsx(f,{searchValue:s,setSearchValue:p}),e.jsxs("div",{className:"switch",children:[e.jsx("img",{alt:"character",src:"https://hsr.honeyhunterworld.com/img/menu/char.webp?x54196"}),e.jsx("button",{className:"",onClick:()=>m(!a),children:e.jsx("div",{className:`slider ${a?"sliderLeft":"sliderRight"}`})}),e.jsx("img",{alt:"weapon",src:"https://hsr.honeyhunterworld.com/img/menu/weapon.webp?x5419"}),e.jsx("a",{href:"../Genshin/",children:e.jsx("img",{className:"switchGameImage",src:E})})]}),a?e.jsxs("div",{className:"characterList",children:[e.jsx(h,{game:"StarRail",pities:o,setPities:n}),b]}):e.jsxs("div",{className:"weaponList",children:[e.jsx(h,{game:"StarRail",pities:o,setPities:n}),j]})]})}R.createRoot(document.getElementById("root")).render(e.jsx(w.StrictMode,{children:e.jsx("div",{className:"container",children:e.jsx(M,{})})}));
