const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Layout-BI5KjtrX.js","assets/vendor-DZSY-1uI.js","assets/vendor-ZpNI6b29.css","assets/Layout-C5ZrZvd6.css","assets/Card-D18BK5Hq.css","assets/Review-beyiFbXb.css","assets/Home-RXDGOjys.js","assets/Shop-SZPkqxN-.js","assets/Card-0ovB0WGH.js","assets/AddToCart-DdJd7Ky-.js","assets/Arrivals-B67hNsHB.js","assets/Contact-JJE6XPVm.js","assets/Registration-ByZDztNp.js","assets/Login-BJ5EZEWM.js","assets/Profile-CNszztNd.js","assets/Profile-DDsaRFXb.css","assets/Logout-CS0dfXyA.js","assets/404Page-0bSynflo.js","assets/ProductPage-CUhbJMqE.js","assets/AddressForm-BoJ9Gm58.js","assets/OrderConfirmation-BCzVFB-W.js","assets/OrderTrack-DmDhC6y9.js","assets/WishList-DmngT4YG.js"])))=>i.map(i=>d[i]);
import{c as p,a as x,b as R,r as f,j as t,G as n,d as L,P,H as C,R as O,e as i,Q as k}from"./vendor-DZSY-1uI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const z="modulepreload",w=function(e){return"/"+e},y={},c=function(r,s,l){let a=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=Promise.all(s.map(m=>{if(m=w(m),m in y)return;y[m]=!0;const _=m.endsWith(".css"),j=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${j}`))return;const u=document.createElement("link");if(u.rel=_?"stylesheet":z,_||(u.as="script",u.crossOrigin=""),u.href=m,d&&u.setAttribute("nonce",d),document.head.appendChild(u),_)return new Promise((S,I)=>{u.addEventListener("load",S),u.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${m}`)))})}))}return a.then(()=>r()).catch(o=>{const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=o,window.dispatchEvent(d),!d.defaultPrevented)throw o})},D={items:JSON.parse(localStorage.getItem("WishlistItem"))||[]},g=p({name:"wishlist",initialState:D,reducers:{Addwishlist:(e,r)=>{e.items.push(r.payload),localStorage.setItem("WishlistItem",JSON.stringify(e.items))},Removewishlist:(e,r)=>{e.items=e.items.filter(s=>s._id!==r.payload.product_id),localStorage.setItem("WishlistItem",JSON.stringify(e.items))},LoadwishList:(e,r)=>{e.items=r.payload}}}),{Addwishlist:ce,Removewishlist:le,LoadwishList:de}=g.actions,V=g.reducer,b=()=>{try{const e=localStorage.getItem("cartItems");return e===null?[]:JSON.parse(e)}catch(e){return console.error("Could not load cart items from localStorage",e),[]}},h=e=>{try{const r=JSON.stringify(e);localStorage.setItem("cartItems",r)}catch(r){console.error("Could not save cart items to localStorage",r)}},F={items:b()},T=p({name:"addtocart",initialState:F,reducers:{AddToCart:(e,r)=>{e.items.findIndex(l=>l._id===r.payload._id)===-1&&(e.items.push({...r.payload,quantity:1}),h(e.items),x.post("http://localhost:8000/api/v1/users/AddToCart",{productId:r.payload._id,quantity:1},{headers:{Authorization:`Bearer ${r.payload.accessToken}`}}).then(l=>{console.log("Item added to cart in the backend",l.data)}).catch(l=>{console.error("Failed to add item to cart in the backend",l)}))},RemoveFromCart:(e,r)=>{e.items=e.items.filter(s=>s._id!==r.payload._id),h(e.items),x.post("http://localhost:8000/api/v1/users/RemoveFromCart",{productId:r.payload._id},{headers:{Authorization:`Bearer ${r.payload.accessToken}`}}).then(s=>{console.log("Item removed from cart in the backend",s.data)}).catch(s=>{console.error("Failed to remove item from cart in the backend",s)})},ClearCart:e=>{e.items=[],h(e.items)},SetCart:(e,r)=>{e.items=r.payload,h(e.items)}}}),{AddToCart:me,RemoveFromCart:ue,ClearCart:_e,SetCart:he}=T.actions,N=T.reducer,v=p({name:"user",initialState:{user:null},reducers:{setUser:(e,r)=>{e.user=r.payload},clearUser:e=>{e.user=null}}});v.actions;const $=v.reducer,A=p({name:"AccRefToken",initialState:{AccRefToken:{accessToken:localStorage.getItem("accessToken")||null,refreshToken:localStorage.getItem("refreshToken")||null}},reducers:{setToken:(e,r)=>{const{accessToken:s,refreshToken:l}=r.payload;e.AccRefToken={accessToken:s,refreshToken:l},localStorage.setItem("accessToken",s),localStorage.setItem("refreshToken",l)},deleteToken:e=>{e.AccRefToken={accessToken:null,refreshToken:null},localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken")}}}),{setToken:pe,deleteToken:fe}=A.actions,W=A.reducer,q=R({reducer:{wishlist:V,addtocart:N,user:$,AccRefToken:W}}),E=f.createContext(),J=({children:e})=>{const[r,s]=f.useState(null);return t.jsx(E.Provider,{value:{address:r,setAddress:s},children:e})},xe=()=>f.useContext(E),U=n.lazy(()=>c(()=>import("./Layout-BI5KjtrX.js"),__vite__mapDeps([0,1,2,3,4,5]))),B=n.lazy(()=>c(()=>import("./Home-RXDGOjys.js"),__vite__mapDeps([6,1,2,4,5]))),H=n.lazy(()=>c(()=>import("./Shop-SZPkqxN-.js"),__vite__mapDeps([7,1,2,8,4]))),G=n.lazy(()=>c(()=>import("./AddToCart-DdJd7Ky-.js"),__vite__mapDeps([9,1,2]))),K=n.lazy(()=>c(()=>import("./Arrivals-B67hNsHB.js"),__vite__mapDeps([10,1,2]))),Q=n.lazy(()=>c(()=>import("./Contact-JJE6XPVm.js"),__vite__mapDeps([11,1,2]))),X=n.lazy(()=>c(()=>import("./Registration-ByZDztNp.js"),__vite__mapDeps([12,1,2]))),Y=n.lazy(()=>c(()=>import("./Login-BJ5EZEWM.js"),__vite__mapDeps([13,1,2]))),Z=n.lazy(()=>c(()=>import("./Profile-CNszztNd.js"),__vite__mapDeps([14,1,2,15]))),M=n.lazy(()=>c(()=>import("./Logout-CS0dfXyA.js"),__vite__mapDeps([16,1,2]))),ee=n.lazy(()=>c(()=>import("./404Page-0bSynflo.js"),__vite__mapDeps([17,1,2]))),te=n.lazy(()=>c(()=>import("./ProductPage-CUhbJMqE.js"),__vite__mapDeps([18,1,2]))),re=n.lazy(()=>c(()=>import("./AddressForm-BoJ9Gm58.js"),__vite__mapDeps([19,1,2]))),oe=n.lazy(()=>c(()=>import("./OrderConfirmation-BCzVFB-W.js"),__vite__mapDeps([20,1,2]))),se=n.lazy(()=>c(()=>import("./OrderTrack-DmDhC6y9.js"),__vite__mapDeps([21,1,2]))),ae=n.lazy(()=>c(()=>import("./WishList-DmngT4YG.js"),__vite__mapDeps([22,1,2,8,4]))),ne=()=>t.jsx("div",{children:"Loading..."});L.createRoot(document.getElementById("root")).render(t.jsxs(n.StrictMode,{children:[t.jsx(P,{store:q,children:t.jsx(C,{children:t.jsx(J,{children:t.jsx(f.Suspense,{fallback:t.jsx(ne,{}),children:t.jsx(O,{children:t.jsxs(i,{path:"/",element:t.jsx(U,{}),children:[t.jsx(i,{index:!0,element:t.jsx(B,{})}),t.jsx(i,{path:"*",element:t.jsx(ee,{})}),t.jsx(i,{path:"/shop",element:t.jsx(H,{})}),t.jsx(i,{path:"/Arrivals",element:t.jsx(K,{})}),t.jsx(i,{path:"/Contact",element:t.jsx(Q,{})}),t.jsx(i,{path:"/AddToCart",element:t.jsx(G,{})}),t.jsx(i,{path:"/OrderConfirmation",element:t.jsx(oe,{})}),t.jsx(i,{path:"/OrderTracking",element:t.jsx(se,{})}),t.jsx(i,{path:"/AddressForm",element:t.jsx(re,{})}),t.jsx(i,{path:"/WishList",element:t.jsx(ae,{})}),t.jsx(i,{path:"/Registration",element:t.jsx(X,{})}),t.jsx(i,{path:"/Login",element:t.jsx(Y,{})}),t.jsx(i,{path:"/Logout",element:t.jsx(M,{})}),t.jsx(i,{path:"/Profile",element:t.jsx(Z,{})}),t.jsx(i,{path:"/ProductPage",element:t.jsx(te,{})})]})})})})})}),t.jsx(k,{})]}));export{ce as A,_e as C,de as L,ue as R,he as S,le as a,me as b,fe as d,pe as s,xe as u};