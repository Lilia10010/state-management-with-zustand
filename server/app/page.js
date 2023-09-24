(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4493:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>m,routeModule:()=>u,tree:()=>d});var a=r(3137),s=r(4647),n=r(4183),o=r.n(n),i=r(1775),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=a.AppPageRouteModule,d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,6768)),"/home/microbiana/projects/projects/myProjects/state-management-with-zustand/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9197)),"/home/microbiana/projects/projects/myProjects/state-management-with-zustand/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],m=["/home/microbiana/projects/projects/myProjects/state-management-with-zustand/src/app/page.tsx"],p="/page",x={require:r,loadChunk:()=>Promise.resolve()},u=new c({definition:{kind:s.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},976:(e,t,r)=>{Promise.resolve().then(r.bind(r,9131))},9131:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var a=r(80),s=r(9715);let n=[{id:1,name:"Item 1",price:10},{id:2,name:"Item 2",price:20},{id:3,name:"Item 3",price:30},{id:4,name:"Item 4",price:40},{id:5,name:"Item 5",price:50}],o=(0,s.Ue)(e=>({cart:[],availableItems:n,addToCart:t=>e(e=>({cart:[...e.cart,t]})),removeFromCart:t=>e(e=>({cart:e.cart.filter(e=>e.id!==t)}))})),i=()=>{let[e,t]=o(e=>[e.availableItems,e.addToCart]);return(0,a.jsxs)(a.Fragment,{children:[a.jsx("h3",{className:"text-2xl font-bold px-4 py-2 mt-4 text-white bg-blue-600 rounded-md",children:"Add to cart"}),e.map(e=>(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center p-4",children:[a.jsx("h3",{className:"text-2xl font-bold",children:e.name}),a.jsx("p",{className:"text-xl font-bold",children:e.price}),a.jsx("button",{onClick:()=>t(e),className:"px-4 py-2 mt-4 text-white bg-blue-600 rounded-md",children:"Add to cart"})]},e.id))]})},l=()=>{let[e,t]=o(e=>[e.cart,e.removeFromCart]);return(0,a.jsxs)("div",{className:"w-full bg-red-600 flex flex-col items-center justify-center p-4",children:[a.jsx("h3",{className:"text-2xl font-bold px-4 py-2 mt-4 text-white bg-blue-600 rounded-md",children:"Cart"}),e.map(e=>(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center p-4",children:[a.jsx("h3",{className:"text-2xl font-bold",children:e.name}),a.jsx("p",{className:"text-xl font-bold",children:e.price}),a.jsx("button",{onClick:()=>t(e.id),className:"px-4 py-2 mt-4 text-white bg-blue-600 rounded-md",children:"Remove from cart"})]},e.id))]})},c=()=>{let e=o(e=>e.cart),t=e.reduce((e,t)=>e+t.price,0),r=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(t);return a.jsx("div",{className:"w-full bg-red-600 flex flex-col items-center justify-center p-4",children:(0,a.jsxs)("h3",{className:"text-2xl font-bold px-4 py-2 mt-4 text-white bg-blue-600 rounded-md",children:["Total price of cart ",r]})})};function d(){return(0,a.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24",children:[a.jsx("div",{className:"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]",children:a.jsx("h3",{children:"Hello word"})}),a.jsx(i,{}),a.jsx(c,{}),a.jsx(l,{})]})}},6768:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>l});var a=r(7536);let s=(0,a.createProxy)(String.raw`/home/microbiana/projects/projects/myProjects/state-management-with-zustand/src/app/page.tsx`),{__esModule:n,$$typeof:o}=s,i=s.default,l=i},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(6885);let s=e=>{let t=(0,a.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[157,7,919],()=>r(4493));module.exports=a})();