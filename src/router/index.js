import { Router } from '@vaadin/router';
import top from '../pages/top';
import list from '../pages/list';
import one from '../pages/one';
import sample from '../pages/sample';


const pages = [
  top,
  list,
  one,
  sample
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
