const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jinqiqi/Documents/jin-blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jinqiqi/Documents/jin-blog/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jinqiqi/Documents/jin-blog/src/pages/index.js"))),
  "component---src-pages-search-js": hot(preferDefault(require("/Users/jinqiqi/Documents/jin-blog/src/pages/search.js"))),
  "component---src-pages-thoughts-js": hot(preferDefault(require("/Users/jinqiqi/Documents/jin-blog/src/pages/thoughts.js"))),
  "component---src-templates-blog-template-js": hot(preferDefault(require("/Users/jinqiqi/Documents/jin-blog/src/templates/blog-template.js"))),
  "component---src-templates-category-template-js": hot(preferDefault(require("/Users/jinqiqi/Documents/jin-blog/src/templates/category-template.js")))
}

