import { Router } from '@vaadin/router';
import top from '../pages/top';
import store from '../pages/store';
import one from '../pages/one';
import sample from '../pages/sample';
import sheet from '../pages/sheet';
import login from '../pages/login';



const pages = [
  top,
  store,
  one,
  sample,
  sheet,
  login
];

const pagesRouters = pages.map(page => {
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
