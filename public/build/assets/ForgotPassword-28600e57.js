import{P as d,c as u,w as i,o as r,a,u as s,X as c,f as _,t as f,k as p,b as t,d as w,n as g,e as b}from"./app-77389f62.js";import{_ as y}from"./GuestLayout-aa120c3d.js";import{_ as k}from"./InputError-323b1983.js";import{_ as x,a as h}from"./TextInput-15afab84.js";import{_ as V}from"./PrimaryButton-7e954908.js";import"./_plugin-vue_export-helper-c27b6911.js";const v=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],B={class:"flex items-center justify-end mt-4"},z={__name:"ForgotPassword",props:{status:String},setup(o){const e=d({email:""}),m=()=>{e.post(route("password.email"))};return(P,l)=>(r(),u(y,null,{default:i(()=>[a(s(c),{title:"Forgot Password"}),v,o.status?(r(),_("div",N,f(o.status),1)):p("",!0),t("form",{onSubmit:b(m,["prevent"])},[t("div",null,[a(x,{for:"email",value:"Email"}),a(h,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":l[0]||(l[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(k,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",B,[a(V,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:i(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1}))}};export{z as default};
