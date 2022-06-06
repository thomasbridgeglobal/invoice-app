import HomePage from '@/views/HomePage.vue';
import LayoutDefault from '@/layouts/LayoutDefault.vue';
// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
// const Foo = { template: '<layout-default><div>foo</div></layout-default>' }
const Foo = { template: '<div>Foo</div>' }
const Bar = { template: '<div>bar</div>' }



// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
export const routes = [
  { path: '/', component: HomePage },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

