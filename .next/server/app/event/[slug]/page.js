(()=>{var e={};e.id=882,e.ids=[882],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},7957:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>x,pages:()=>d,routeModule:()=>h,tree:()=>o});var a=s(7096),r=s(6132),i=s(7284),n=s.n(i),l=s(2564),c={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>l[e]);s.d(t,c);let o=["",{children:["event",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4341)),"C:\\Users\\Glaucus\\Documents\\GitHub\\Smartpath-Blog\\src\\app\\event\\[slug]\\page.jsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,4491)),"C:\\Users\\Glaucus\\Documents\\GitHub\\Smartpath-Blog\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\Glaucus\\Documents\\GitHub\\Smartpath-Blog\\src\\app\\event\\[slug]\\page.jsx"],x="/event/[slug]/page",u={require:s,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/event/[slug]/page",pathname:"/event/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},994:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,6686,23)),Promise.resolve().then(s.t.bind(s,614,23)),Promise.resolve().then(s.bind(s,7348)),Promise.resolve().then(s.bind(s,9809)),Promise.resolve().then(s.bind(s,3150)),Promise.resolve().then(s.bind(s,334)),Promise.resolve().then(s.bind(s,9150))},4341:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x});var a=s(4656);s(3542);var r=s(8639),i=s.n(r);let DetailEvent_Banner=({children:e})=>(0,a.jsxs)("section",{className:"w-full relative h-[425px] mb-[31rem] lg:mb-[32.813rem]",children:[a.jsx(i(),{src:"/_next/static/media/bannerDetail.3e73c8d3.jpg",priority:!0,alt:"banner",className:"w-full",fill:!0,style:{objectFit:"cover"}}),e]}),icons_Check=({className:e=""})=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:`w-6 h-6 ${e}`,children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"})});var n=s(4353),l=s.n(n);let Content=({data:e})=>a.jsx("section",{children:(0,a.jsxs)("div",{className:"container mx-auto px-4 sm:px-16",children:[(0,a.jsxs)("article",{className:"space-y-14",children:[(0,a.jsxs)("div",{className:"space-y-6",children:[a.jsx("h3",{className:"text-4xl",children:"Deskripsi"}),(0,a.jsxs)("p",{className:"text-lg",children:[a.jsx("div",{dangerouslySetInnerHTML:{__html:e.description}}),"              "]})]}),(0,a.jsxs)("div",{className:"space-y-6",children:[a.jsx("h3",{className:"text-4xl",children:"Benefit"}),a.jsx("div",{className:"space-y-4",children:e.benefits.map((e,t)=>(0,a.jsxs)("div",{className:"flex gap-x-4 items-center",children:[a.jsx("div",{className:"bg-[#0056A3] rounded-full p-0.5 flex items-center justify-center w-6 h-6",children:a.jsx(icons_Check,{className:"stroke-white stroke-2"})}),e.description]},t))})]})]}),(0,a.jsxs)("div",{className:"flex justify-between sm:justify-end gap-x-10 text-lg font-semibold mt-24 md:mt-28 -mb-12",children:[a.jsx(l(),{target:"_blank",href:e.link_guidebook,children:a.jsx("button",{type:"button",className:"w-[230px] py-2.5 text-[#FFA700] border-[3px] border-[#FFA700] rounded-[10px]",children:"Guide book"})}),a.jsx(l(),{target:"_blank",href:e.link_daftar,children:a.jsx("button",{type:"button",className:"w-[230px] py-2.5 text-white bg-[#FFA700] rounded-[10px]",children:"Daftar sekarang"})})]})]})});var c=s(7172),o=s.n(c);let Hero=({data:e})=>{let t=e.poster&&e.poster.substring(e.poster.indexOf("images"))||"";return(0,a.jsxs)("div",{className:"flex gap-x-10 items-start lg:items-end w-full relative z-10 container lg:max-w-7xl mx-auto pt-10 px-4 sm:px-16 lg:px-0 lg:pt-52 md:justify-center  flex-col-reverse lg:flex-row gap-y-10 lg:gap-y-0 2xl:pr-24",children:[a.jsx(i(),{src:`https://api.smartpath.id/${t}`,alt:"event",width:500,height:500,className:"h-[509px] w-[419px] lg:h-[649px] lg:w-[519px]",style:{objectFit:"cover"},priority:!0}),(0,a.jsxs)("div",{className:"space-y-9 mb-0 lg:mb-20",children:[a.jsx("div",{className:"w-fit text-lg border border-[#0056A34D] rounded-[10px] text-center px-6 py-1.5 bg-[#EBF2F8]",children:e.categories.name}),(0,a.jsxs)("div",{className:"space-y-6",children:[a.jsx("h2",{className:"font-semibold text-4xl",children:e.title}),(0,a.jsxs)("div",{children:["Batas Pendaftaran",a.jsx("br",{}),(0,a.jsxs)("div",{className:"flex gap-x-4",children:[a.jsx(i(),{src:"/_next/static/media/Clocks.531f2950.svg",width:50,height:50,className:"w-6 h-6 aspect-square",alt:"date"}),a.jsx("p",{className:"text-[#0056A3] font-medium text-lg",children:o()(e.date_start).format("DD MMMM YYYY")})]})]}),(0,a.jsxs)("div",{children:["Kuota",(0,a.jsxs)("div",{className:"flex gap-x-4",children:[a.jsx(i(),{src:"/_next/static/media/Vector.8f2a87ae.svg",width:50,height:50,className:"w-6 h-6 aspect-square",alt:"kouta"}),a.jsx("p",{className:"text-[#0056A3] font-medium text-lg",children:0===e.kuota?"Ditutup jika kouta penuh":e.kouta})]})]})]})]})]})},d={src:"/_next/static/media/NotFound.a5ef3fa8.svg"},getEvent=async e=>{try{let t=await fetch(`https://api.smartpath.id/event/${e}`,{cache:"no-store"});return await t.json()}catch(e){return e}},page=async({params:e})=>{let{slug:t}=e,{data:s}=await getEvent(t);return a.jsx("main",{children:0!==Object.keys(s).length?(0,a.jsxs)(a.Fragment,{children:[a.jsx(DetailEvent_Banner,{children:a.jsx(Hero,{data:s})}),a.jsx(Content,{data:s})]}):(0,a.jsxs)("div",{className:"w-full -mb-10 px-4 md:px-0",children:[a.jsx(i(),{width:250,height:250,src:d.src,className:"mx-auto my-20 w-72 sm:w-80",alt:"not found",style:{objectFit:"contain"}}),(0,a.jsxs)("div",{className:"space-y-4 mx-auto",children:[a.jsx("h3",{className:"text-center text-2xl text-slate-800 font-semibold",children:"Not Found"}),a.jsx("p",{className:"text-center text-lg text-slate-400 font-medium",children:"Data is empty or Try adjusting your filter"})]})]})})},x=page},7348:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a={src:"/_next/static/media/Clocks.531f2950.svg",height:30,width:30,blurWidth:0,blurHeight:0}},3150:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a={src:"/_next/static/media/NotFound.a5ef3fa8.svg",height:571,width:860,blurWidth:0,blurHeight:0}},334:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a={src:"/_next/static/media/Vector.8f2a87ae.svg",height:24,width:32,blurWidth:0,blurHeight:0}},9809:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a={src:"/_next/static/media/location.28afe3c6.svg",height:30,width:24,blurWidth:0,blurHeight:0}},9150:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a={src:"/_next/static/media/bannerDetail.3e73c8d3.jpg",height:425,width:1440,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAACAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAEAAgEFAAAAAAAAAAAAAAABAAIEAxIhIkH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABYRAAMAAAAAAAAAAAAAAAAAAAACMf/aAAwDAQACEQMRAD8Av8zroYVTgbAh6bGIiSJBGp//2Q==",blurWidth:8,blurHeight:2}},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var a=s(8531);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,a.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"32x32",url:t+""}]}}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[812,323,883,759],()=>__webpack_exec__(7957));module.exports=s})();