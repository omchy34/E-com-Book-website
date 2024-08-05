import{r as l,v as g,j as e,a as h}from"./vendor-DZSY-1uI.js";const b=()=>{const[a,o]=l.useState({fullName:"",userName:"",email:"",phone:"",password:"",avatar:null}),[i,m]=l.useState(""),[d,p]=l.useState(""),c=g();async function u(t){t.preventDefault(),p("");const s=new FormData;s.append("fullName",a.fullName),s.append("userName",a.userName),s.append("email",a.email),s.append("phone",a.phone),s.append("password",a.password),a.avatar&&s.append("avatar",a.avatar);try{(await h.post("http://localhost:8000/api/v1/users/Register",s,{headers:{"Content-Type":"multipart/form-data"}})).status===201&&(alert("User registered successfully."),c("/login"))}catch(r){r.response&&r.response.status===409?alert("User with email or username already exists."):r.response?alert(r.response.data.message):(console.error("There was an error registering the user!",r),alert("An unexpected error occurred. Please try again."))}}function n(t){const{name:s,value:r}=t.target;o({...a,[s]:r})}function f(t){const s=t.target.files[0];s&&(["image/jpeg","image/jpg","image/png","image/gif"].includes(s.type)?(m(""),o({...a,avatar:s})):(m("Invalid file type. Only image files are allowed."),o({...a,avatar:null})))}return e.jsx("div",{className:"min-h-96 flex items-center justify-center bg-gradient-to-r from-pink-300 via-pink-300 to-blue-400 p-4 sm:p-6 md:p-8 font-poppins",children:e.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-lg w-full max-w-md",children:[e.jsx("h2",{className:"text-3xl font-bold text-center text-pink-600 mb-8",children:"Create Account"}),e.jsxs("form",{onSubmit:u,children:[d&&e.jsx("p",{className:"text-red-500 text-sm mb-4",children:d}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-pink-600 text-sm font-medium mb-2",htmlFor:"fullName",children:"Full Name"}),e.jsx("input",{className:"shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500",id:"fullName",name:"fullName",onChange:n,value:a.fullName,type:"text",placeholder:"Enter your Full Name"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-pink-600 text-sm font-medium mb-2",htmlFor:"userName",children:"Username"}),e.jsx("input",{className:"shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500",id:"userName",name:"userName",onChange:n,value:a.userName,type:"text",placeholder:"Enter your Username"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-pink-600 text-sm font-medium mb-2",htmlFor:"email",children:"Email"}),e.jsx("input",{className:"shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500",id:"email",type:"email",onChange:n,value:a.email,name:"email",placeholder:"Enter your Email"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-pink-600 text-sm font-medium mb-2",htmlFor:"phone",children:"Phone no."}),e.jsx("input",{className:"shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500",id:"phone",type:"number",onChange:n,value:a.phone,name:"phone",placeholder:"Enter your phone no."})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-pink-600 text-sm font-medium mb-2",htmlFor:"password",children:"Password"}),e.jsx("input",{className:"shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500",id:"password",type:"password",name:"password",value:a.password,onChange:n,placeholder:"Enter your Password"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{className:"block text-pink-600 text-sm font-medium mb-2",htmlFor:"avatar",children:"Select Your Profile Pic"}),e.jsx("input",{className:"shadow-sm appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500",id:"avatar",type:"file",name:"avatar",onChange:f}),i&&e.jsx("p",{className:"text-red-500 text-sm mt-2",children:i})]}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx("button",{className:"bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2",type:"submit",children:"Register"})})]})]})})};export{b as default};
