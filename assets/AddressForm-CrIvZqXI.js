import{v as i,r as x,j as e}from"./vendor-B3t4vCyg.js";import{u}from"./index-D5QuZvto.js";const h=()=>{const d=i(),{setAddress:a}=u(),[s,o]=x.useState({name:"",phone:"",email:"",alternatePhone:"",street:"",city:"",state:"",postalCode:"",country:""}),t=r=>{const{name:n,value:m}=r.target;o(c=>({...c,[n]:m}))},l=r=>{r.preventDefault(),a(s),d("/AddToCart")};return e.jsxs("form",{onSubmit:l,className:"space-y-6 bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto",children:[e.jsx("h2",{className:"text-2xl font-semibold text-gray-800 mb-4",children:"Shipping Address"}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Name"}),e.jsx("input",{type:"text",name:"name",value:s.name,onChange:t,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-red-500 focus:border-red-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Phone"}),e.jsx("input",{type:"text",name:"phone",value:s.phone,onChange:t,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-red-500 focus:border-red-500"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Email"}),e.jsx("input",{type:"email",name:"email",value:s.email,onChange:t,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-red-500 focus:border-red-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Alternate Phone"}),e.jsx("input",{type:"text",name:"alternatePhone",value:s.alternatePhone,onChange:t,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-red-500 focus:border-red-500"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Street"}),e.jsx("input",{type:"text",name:"street",value:s.street,onChange:t,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-red-500 focus:border-red-500"})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"City"}),e.jsx("input",{type:"text",name:"city",value:s.city,onChange:t,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-red-500 focus:border-red-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"State"}),e.jsx("input",{type:"text",name:"state",value:s.state,onChange:t,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-red-500 focus:border-red-500"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Postal Code"}),e.jsx("input",{type:"text",name:"postalCode",value:s.postalCode,onChange:t,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-red-500 focus:border-red-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Country"}),e.jsx("input",{type:"text",name:"country",value:s.country,onChange:t,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:ring-red-500 focus:border-red-500"})]})]}),e.jsx("button",{type:"submit",className:"w-full bg-red-600 text-white text-center rounded-lg py-2 mt-4 hover:bg-red-700 transition duration-200",children:"Save Address"})]})};export{h as default};
