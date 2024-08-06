import{s as o,u as m,r as t,j as e,w as u,N as c,x as h,a as p}from"./vendor-B3t4vCyg.js";const N=()=>{o();const l=m(s=>s.AccRefToken.AccRefToken.accessToken),[r,i]=t.useState(!1),[a,d]=t.useState({name:"",userName:"",email:"",phone:"",avatar:""});function n(){i(!r)}async function x(){try{const s=await p.post("https://backend-1-te09.onrender.com/api/v1/users/userData",{},{headers:{Authorization:`Bearer ${l}`}});s&&(console.log(s.data),d({name:s.data.data.user.fullName,userName:s.data.data.user.userName,email:s.data.data.user.email,phone:s.data.data.user.phone,avatar:s.data.data.user.avatar}))}catch(s){console.error("Error fetching data:",s),alert("Token not found"),alert("please login again")}}return t.useEffect(()=>{l&&x()},[l]),e.jsx(e.Fragment,{children:e.jsx("section",{className:"full bg-pink-100  backdrop-blur-3xl h-full w-full",children:e.jsxs("section",{className:"inner flex",children:[e.jsx("div",{className:"left bg-pink-900 max-h-screen w-60 backdrop-blur-3xl",id:r?"sideNav":"",children:e.jsxs("div",{className:"sideNavFiled h-full w-full overflow-hidden",children:[e.jsx("div",{className:"cross flex justify-end pr-10 pt-8",id:"cross",children:e.jsx(u,{onClick:n})}),e.jsxs("section",{className:"ProfileItem h-full w-full",children:[e.jsx("div",{className:"image p-10",children:e.jsx("img",{src:a.avatar,alt:"user img err",className:"rounded-full h-40 w-40 border-double border-8 border-red-500",id:"profileImg"})}),e.jsx("h1",{className:"text-center text-2xl text-red-100",children:a.name}),e.jsx("section",{className:"QuickLinks",children:e.jsx("div",{className:"nav-links flex flex-col justify-center items-center pt-5 text-xl",children:e.jsxs("ol",{className:"flex flex-col gap-2 w-60 text-center",children:[e.jsx("li",{className:"bg-pink-800 rounded-2xl",children:e.jsx(c,{to:"#",children:"Profile"})}),e.jsx("li",{className:"bg-pink-800 rounded-2xl",children:e.jsx(c,{to:"#",children:"Address"})}),e.jsx("li",{className:"bg-pink-800 rounded-2xl",children:e.jsx(c,{to:"/OrderTracking",children:"Orders"})})]})})})]})]})}),e.jsx("section",{className:"right bg-pink-200 h-screen w-screen",children:e.jsxs("section",{className:"all",children:[e.jsx("div",{className:r?"burgur":"del",children:e.jsx(h,{className:"ml-9 mt-6",onClick:n})}),e.jsx("aside",{className:"full m-10 h-screen",children:e.jsxs("div",{className:"flex gap-5 text-xl flex-wrap flex-col",children:[e.jsxs("div",{className:"fullname flex gap-5",children:[e.jsx("p",{className:"text-red-600",children:"FullName:"})," ",e.jsx("input",{type:"text",value:a.name})]}),e.jsxs("div",{className:"email flex gap-5",children:[e.jsx("p",{className:"text-red-600",children:"Email:"}),"  ",e.jsx("input",{type:"text",value:a.email})]}),e.jsxs("div",{className:"UserName flex gap-5",children:[e.jsx("p",{className:"text-red-600",children:"UserName:"})," ",e.jsx("input",{type:"text",value:a.userName})]}),e.jsxs("div",{className:"phone flex gap-5",children:[e.jsx("p",{className:"text-red-600",children:"Phone: "})," ",e.jsx("input",{type:"text",value:a.phone})]}),e.jsxs("div",{className:"PassWord flex gap-5",children:[e.jsx("p",{className:"text-red-600",children:"Password: "}),"underProccess"]}),e.jsx("btn",{className:"bg-red-600 p-1 w-24 text-center text-white cursor-pointer rounded-lg hover:bg-red-800",children:"Update"})]})})]})})]})})})};export{N as default};
