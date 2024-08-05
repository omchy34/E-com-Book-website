import{u as d,r as o,j as e,a as u}from"./vendor-DZSY-1uI.js";const f=()=>{const n=d(t=>t.AccRefToken.AccRefToken.accessToken),[i,c]=o.useState(!0),[a,m]=o.useState({name:"",email:"",message:""});function r(t){const{name:s,value:l}=t.target;m({...a,[s]:l})}return o.useEffect(()=>{n&&(async()=>{try{const s=await u.post("http://localhost:8000/api/v1/users/userData",{},{headers:{Authorization:`Bearer ${n}`}});i&&(m({name:s.data.data.user.fullName,email:s.data.data.user.email,message:""}),c(!1))}catch(s){console.error("Error fetching data:",s),alert("Token not found")}})()},[n,i]),e.jsx("div",{className:"bg-pink-100 min-h-screen flex items-center justify-center",children:e.jsx("div",{className:"container mx-auto px-4",children:e.jsxs("div",{className:"max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg fade-in",children:[e.jsx("h2",{className:"text-3xl font-bold text-pink-600 text-center mb-6",children:"Contact Us"}),e.jsxs("form",{action:"#",method:"POST",className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),e.jsx("input",{type:"text",id:"name",name:"name",value:a.name,required:!0,onChange:r,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),e.jsx("input",{type:"email",id:"email",name:"email",value:a.email,required:!0,onChange:r,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700",children:"Message"}),e.jsx("textarea",{id:"message",name:"message",value:a.message,rows:"4",required:!0,onChange:r,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"})]}),e.jsx("div",{className:"text-center",children:e.jsx("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500",children:"Send Message"})})]})]})})})};export{f as default};