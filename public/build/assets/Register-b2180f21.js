import{P as c,c as p,w as n,o as _,a as o,u as s,X as w,b as r,d,g,n as V,e as v}from"./app-77389f62.js";import{_ as b}from"./GuestLayout-aa120c3d.js";import{_ as t}from"./InputError-323b1983.js";import{_ as m,a as i}from"./TextInput-15afab84.js";import{_ as y}from"./PrimaryButton-7e954908.js";import"./_plugin-vue_export-helper-c27b6911.js";const x=["onSubmit"],k={class:"mt-4"},$={class:"mt-4"},h={class:"mt-4"},q={class:"flex items-center justify-end mt-4"},j={__name:"Register",setup(N){const e=c({name:"",email:"",password:"",password_confirmation:"",terms:!1}),u=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(f,a)=>(_(),p(b,null,{default:n(()=>[o(s(w),{title:"Register"}),r("form",{onSubmit:v(u,["prevent"])},[r("div",null,[o(m,{for:"name",value:"Name"}),o(i,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":a[0]||(a[0]=l=>s(e).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(t,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),r("div",k,[o(m,{for:"email",value:"Email"}),o(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":a[1]||(a[1]=l=>s(e).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),o(t,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",$,[o(m,{for:"password",value:"Password"}),o(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":a[2]||(a[2]=l=>s(e).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(t,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",h,[o(m,{for:"password_confirmation",value:"Confirm Password"}),o(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=l=>s(e).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(t,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),r("div",q,[o(s(g),{href:f.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:n(()=>[d(" Already registered? ")]),_:1},8,["href"]),o(y,{class:V(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{j as default};
