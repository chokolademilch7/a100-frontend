import { Router } from '@vaadin/router';
import home from '../pages/home';
import list from '../pages/list';


const pages = [
  home,
  list
];

let pagesRouters = pages.map(page => {
  let ret = {};
  ret['path'] = page.path;
  ret['component'] = page.is;
  return ret;
})


window.addEventListener('load', () => {
  initRouter();
})

function initRouter () {
  const router = new Router(document.getElementById('outlet'));
  router.setRoutes(pagesRouters);
}
