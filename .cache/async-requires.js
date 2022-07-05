// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-search-js": () => import("./../../../src/pages/search.js" /* webpackChunkName: "component---src-pages-search-js" */),
  "component---src-pages-thoughts-js": () => import("./../../../src/pages/thoughts.js" /* webpackChunkName: "component---src-pages-thoughts-js" */),
  "component---src-templates-blog-template-js": () => import("./../../../src/templates/blog-template.js" /* webpackChunkName: "component---src-templates-blog-template-js" */),
  "component---src-templates-category-template-js": () => import("./../../../src/templates/category-template.js" /* webpackChunkName: "component---src-templates-category-template-js" */)
}

