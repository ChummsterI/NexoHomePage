import{f as n,o as c,c as i,a as t,t as r,m as p,u as f,j as u,w as l,b as _}from"./HHKnltDb.js";import{_ as x}from"./BWiIlQsu.js";import"./DlAUqK2U.js";const g={class:"bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"},h={class:"p-3 pb-0 flex justify-center bg-gray-900/50 border-b border-gray-700"},b=["src","alt"],v={class:"p-4"},S={class:"text-slate-200 text-2xl mb-1"},y={class:"text-slate-400 text-lg"},k=n({__name:"StaffMember",props:["name","rank"],setup(s){const e=s;return(a,o)=>(c(),i("div",g,[t("div",h,[t("img",{class:"max-w-48",src:"https://visage.surgeplay.com/bust/"+e.name+".webp",alt:e.name+" avatar"},null,8,b)]),t("div",v,[t("h3",S,r(e.name),1),t("div",y,r(e.rank),1)])]))}}),w={class:"text-3xl text-slate-200 mb-6"},$={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10"},B=n({__name:"StaffGroup",props:["title"],setup(s){const e=s;return(a,o)=>(c(),i("section",null,[t("h2",w,r(e.title),1),t("div",$,[p(a.$slots,"default")])]))}}),C=t("h1",{class:"text-slate-200 text-4xl text-center mb-8"},"Staff",-1),N=n({__name:"staff",setup(s){return f({title:"Staff"}),(e,a)=>{const o=k,d=B,m=x;return c(),u(m,null,{default:l(()=>[C,_(d,{title:"Founder"},{default:l(()=>[_(o,{name:"ChummsterX",rank:"Owner"})]),_:1})]),_:1})}}});export{N as default};
