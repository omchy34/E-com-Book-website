import{s as f,u as n,r,j as s,L as g}from"./vendor-DZSY-1uI.js";/* empty css             */import{a as C,A as v,R as N,b as u}from"./index-B9WYzanr.js";const _=({product:e,isInWishlist:c})=>{const t=f(),i=n(a=>a.AccRefToken.AccRefToken.accessToken),o=n(a=>a.addtocart.items),[d,m]=r.useState(!1),[h,l]=r.useState(!1);r.useEffect(()=>{m(o.some(a=>a._id===e._id))},[o,e._id]);const x=()=>{t(c?C({product_id:e._id,accessToken:i}):v(e))},p=()=>{if(!i){l(!0);return}t(d?N({product_id:e._id,accessToken:i}):u({...e,accessToken:i}))},j=()=>{l(!1)};return s.jsxs("div",{className:"border",id:"main",children:[h&&s.jsx("div",{className:"login-prompt",children:s.jsxs("div",{className:"login-prompt-content",children:[s.jsx("p",{children:"Please log in to add items to your cart."}),s.jsx("button",{onClick:j,className:"close-btn",children:"Close"})]})}),s.jsx("div",{className:"images",children:s.jsx("img",{src:e.images,alt:"product img"})}),s.jsxs("div",{className:"details",children:[s.jsxs("div",{className:"price pt-2 text-xl",children:["₹",e.Price]}),s.jsx("div",{className:"title pt-2 hover:text-slate-400",children:s.jsx(g,{to:"/productPage",children:e.productName})}),s.jsxs("div",{className:"AddToCart flex gap-10",children:[s.jsx("div",{className:"Cart pt-2",children:s.jsx("button",{className:"bg-red-400 hover:bg-red-600 w-28 h-8 rounded-md",onClick:p,children:d?"Added in Cart":"Add to Cart"})}),s.jsx("div",{className:"wishlist pt-4 text-xl",onClick:x,children:s.jsx("i",{className:c?"fa-solid fa-heart":"fa-regular fa-heart"})})]})]})]})};export{_ as C};
