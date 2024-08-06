import{u as b,s as T,v as O,r as d,_ as R,a as i,j as t,M as E,L as f,t as a}from"./vendor-B3t4vCyg.js";import{u as B,R as D,C as F}from"./index-D5QuZvto.js";const q=()=>{const{address:m}=B(),o=b(e=>e.AccRefToken.AccRefToken.accessToken),c=b(e=>e.addtocart.items),p=T(),j=O(),[x,v]=d.useState(""),[N,w]=d.useState(0),[h,l]=d.useState({});d.useEffect(()=>{const e={};c.forEach(r=>{e[r._id]=1}),l(e)},[c]);const g=d.useCallback(R.debounce(async(e,r)=>{if(o)try{await i.post("https://backend-1-te09.onrender.com/api/v1/users/AddToCart",{quantity:r,productId:e},{headers:{Authorization:`Bearer ${o}`}})}catch(s){console.log("Something went wrong",s)}},500),[o]),C=e=>{l(r=>{const s={...r,[e]:(r[e]||1)+1};return g(e,s[e]),s})},_=e=>{l(r=>{const s={...r,[e]:Math.max((r[e]||1)-1,1)};return g(e,s[e]),s})},k=async e=>{try{const r=await i.post("https://backend-1-te09.onrender.com/api/v1/users/RemoveFromCart",{productId:e},{headers:{Authorization:`Bearer ${o}`}});r.data.statusCode===200&&a.success(r.data.message),p(D({_id:e})),l(s=>{const n={...s};return delete n[e],n})}catch(r){console.log("Something went wrong while removing the item",r)}},A=e=>v(e.target.value),P=async e=>{e.preventDefault();try{const s=(await i.get("https://backend-1-te09.onrender.com/api/v1/Admin/promoCodes")).data.data.find(n=>n.code===x);s?(w(s.discount),a.success("Promo code applied")):a.error("Please enter a valid promo code")}catch(r){console.error("Error fetching promo codes:",r)}},y=()=>{let e=0;return c.forEach(r=>{const s=h[r._id]||1;e+=r.Price*s}),e-e*N/100},z=async()=>{if(!m){a.error("Please enter your address");return}try{const e=c.map(s=>({productId:s._id,quantity:h[s._id]||1,ProductName:s.ProductName,ProductImg:s.images,address:m})),r=await i.post("https://backend-1-te09.onrender.com/api/v1/order/placeOrder",{items:e,amount:y()},{headers:{Authorization:`Bearer ${o}`}});if(console.log(r),r.data.statusCode===200){a.success("Order placed successfully"),console.log(r);const{razorpayOrderId:s,amount:n,newOrder:I}=r.data.data,S={key:"rzp_test_vdBH4tnXPZUuKr",amount:n*100,currency:"INR",name:"Your Company Name",description:"Test Transaction",order_id:s,handler:async function(u){await i.post("https://backend-1-te09.onrender.com/api/v1/order/verify-payment",{Payment_Id:u.razorpay_payment_id,Order_Id:u.razorpay_order_id,Signature:u.razorpay_signature,newOrder:I},{headers:{Authorization:`Bearer ${o}`}}),console.log("OKIe",u.razorpay_signature),p(F()),j("/OrderConfirmation")},theme:{color:"#3399cc"}};new window.Razorpay(S).open()}else a.error(r.data.message)}catch(e){console.error("Error placing order:",e),a.error("Something went wrong while placing the order")}};return t.jsx("section",{className:"bg-gray-100 py-12",children:t.jsx("div",{className:"container mx-auto px-4 lg:px-8",children:t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[t.jsx("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden",children:t.jsxs("div",{className:"px-6 py-4",children:[t.jsx("h2",{className:"text-3xl font-semibold text-gray-800 mb-4",children:"Shopping Cart"}),t.jsx("hr",{}),c.map(e=>t.jsxs("div",{className:"flex items-center justify-between border-b border-gray-200 py-4 hover:bg-gray-50 transition duration-300 ease-in-out",children:[t.jsxs("div",{className:"flex items-center space-x-4",children:[t.jsx("img",{src:e.images,alt:e.ProductName,className:"w-16 h-16 object-cover rounded-lg"}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:e.ProductName}),t.jsx("p",{className:"text-sm text-gray-500",children:e._id})]})]}),t.jsxs("div",{className:"flex items-center space-x-4",children:[t.jsxs("div",{className:"flex items-center space-x-2",children:[t.jsx("button",{className:"text-lg text-gray-500 focus:outline-none",onClick:()=>_(e._id),children:"-"}),t.jsx("span",{className:"text-lg font-semibold",children:h[e._id]||1}),t.jsx("button",{className:"text-lg text-gray-500 focus:outline-none",onClick:()=>C(e._id),children:"+"})]}),t.jsx("button",{className:"text-red-500 hover:text-red-700 transition duration-200",onClick:()=>k(e._id),children:t.jsx(E,{size:24})})]})]},e._id)),t.jsxs("div",{className:"flex justify-between items-center mt-4",children:[t.jsx("h3",{className:"text-xl font-semibold text-gray-800",children:"Total:"}),t.jsxs("p",{className:"text-xl font-semibold text-gray-800",children:["₹",y().toFixed(2)]})]}),t.jsxs("form",{onSubmit:P,className:"mt-6 flex items-center",children:[t.jsx("input",{type:"text",value:x,onChange:A,placeholder:"Enter promo code",className:"border border-gray-300 rounded-lg px-4 py-2 w-full"}),t.jsx("button",{type:"submit",className:"ml-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200",children:"Apply"})]})]})}),t.jsx("div",{className:"bg-white shadow-lg rounded-lg overflow-hidden",children:t.jsxs("div",{className:"px-6 py-4",children:[t.jsx("h2",{className:"text-3xl font-semibold text-gray-800 mb-4",children:"Checkout"}),t.jsx("hr",{}),m?t.jsx("button",{onClick:z,className:"block bg-red-600 text-white text-center rounded-lg py-2 mt-6 hover:bg-red-700 transition duration-200",children:"Place Order"}):t.jsx(f,{to:"/AddressForm",className:"block bg-red-600 text-white text-center rounded-lg py-2 mt-6 hover:bg-red-700 transition duration-200",children:"Add Address"}),t.jsx(f,{to:"/",className:"block bg-gray-200 text-gray-800 text-center rounded-lg py-2 mt-4 hover:bg-gray-300 transition duration-200",children:"Continue Shopping"})]})})]})})})};export{q as default};
