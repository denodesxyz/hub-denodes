import{j as o,b1 as p,b2 as u,b3 as c,b4 as l,b5 as f,b6 as d,b7 as b,b8 as m,b9 as h,ba as A,X as g,d as v,u as P,l as w,z as y,bb as C,bc as R,bd as _,be as E}from"./chunks/framework.FGl4sX9b.js";import{R as D}from"./chunks/theme.kK9r0oah.js";function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(D),T=v({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=P();return w(()=>{y(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&C(),R(),_(),s.setup&&s.setup(),()=>E(s.Layout)}});async function j(){const e=O(),t=L();t.provide(u,e);const a=c(e.route);return t.provide(l,a),t.component("Content",f),t.component("ClientOnly",d),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:b}),{app:t,router:e,data:a}}function L(){return m(T)}function O(){let e=o,t;return h(a=>{let n=A(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=g(()=>import(n),__vite__mapDeps([]))),o&&(e=!1),r},s.NotFound)}o&&j().then(({app:e,router:t,data:a})=>{t.go().then(()=>{p(t.route,a.site),e.mount("#app")})});export{j as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}