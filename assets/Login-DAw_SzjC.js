import{v as u,s as p,r as x,j as e,a as f,t as r}from"./vendor-B3t4vCyg.js";import{s as h}from"./index-D5QuZvto.js";const v=()=>{const l=u(),c=p(),[o,d]=x.useState({identifier:"",password:""});async function m(n){n.preventDefault();try{const s=await f.post("https://backend-1-te09.onrender.com/api/v1/users/Login",o,{headers:{"Content-Type":"application/json; charset=utf-8"}});if(console.log("API Response:",s),s.data.success===!0){const{accessToken:t,refreshToken:a}=s.data.data;t&&a?(c(h({accessToken:t,refreshToken:a})),console.log("Access Token:",t),console.log("Refresh Token:",a),r.success("Login Success"),l("/")):(console.error("Tokens not found in the response:",s.data),r.error("Login failed. Please try again."))}else console.log(s.data.message),r.error("Invalid User Credentials")}catch(s){s.response&&s.response.status===401?r.error("Invalid User Credentials"):s.response&&s.response.status===404?r.error("User not registered"):r.error("An unexpected error occurred"),console.log(s)}}function i(n){const{name:s,value:t}=n.target;d({...o,[s]:t})}return e.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-pink-300 to-blue-400 p-4",children:e.jsxs("div",{className:"w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-xl transition-transform transform hover:scale-105",children:[e.jsx("h2",{className:"text-3xl font-extrabold text-center text-pink-700",children:"Sign in to your account"}),e.jsxs("form",{className:"mt-8 space-y-6",onSubmit:m,children:[e.jsxs("div",{className:"rounded-md shadow-sm space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address or UserName"}),e.jsx("input",{id:"email-address",name:"identifier",type:"text",value:o.identifier,onChange:i,required:!0,className:"relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm transition-colors duration-200 ease-in-out",placeholder:"Email address"})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"sr-only",children:"Password"}),e.jsx("input",{id:"password",name:"password",onChange:i,type:"password",value:o.password,autoComplete:"current-password",required:!0,className:"relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm transition-colors duration-200 ease-in-out",placeholder:"Password"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"}),e.jsx("label",{htmlFor:"remember-me",className:"block ml-2 text-sm text-gray-900",children:"Remember me"})]}),e.jsx("div",{className:"text-sm",children:e.jsx("a",{href:"#",className:"font-medium text-pink-600 hover:text-pink-500 transition-colors duration-200 ease-in-out",children:"Forgot your password?"})})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"relative flex justify-center w-full px-4 py-3 text-sm font-medium text-white bg-pink-600 border border-transparent rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-transform transform hover:scale-105",children:"Sign in"})})]}),e.jsx("div",{className:"text-center text-sm text-gray-600",children:e.jsxs("p",{children:["Don't have an account?"," ",e.jsx("a",{href:"#",className:"font-medium text-pink-600 hover:text-pink-500 transition-colors duration-200 ease-in-out",children:"Sign up"})]})})]})})};export{v as default};
