import{j as h,o as u,f as p,b as e,a as s,w as t,d as r,u as n,g as a}from"./app-77389f62.js";const f={class:"flex flex-col"},g={class:"flex-grow bg-gray-300 p-6"},_={class:"space-y-3"},v={class:"cursor-pointer hover:underline hover:font-bold"},x={class:"cursor-pointer hover:underline hover:font-bold"},m={class:"cursor-pointer hover:underline hover:font-bold"},k={__name:"SettingsLayout",props:["expanded"],emits:["toggleWith"],setup(l,{emit:c}){const i=l,d=()=>{i.expanded=!1,c("toggleWidth",i.expanded)};return h(()=>{console.log(route())}),(o,y)=>(u(),p("div",f,[e("div",{class:"px-6 py-2"},[e("span",{onClick:d,class:"cursor-pointer"},"Shrink")]),e("div",g,[e("ul",_,[e("li",v,[s(n(a),{href:o.route("settings.index")},{default:t(()=>[r(" App Settings ")]),_:1},8,["href"])]),e("li",x,[s(n(a),{href:o.route("settings.history")},{default:t(()=>[r(" History ")]),_:1},8,["href"])]),e("li",m,[s(n(a),{href:o.route("settings.language")},{default:t(()=>[r(" Language ")]),_:1},8,["href"])])])])]))}};export{k as _};
