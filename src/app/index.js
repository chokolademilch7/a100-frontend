import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
  initRouter();
})

function initRouter () {
  const router = new Router(document.getElementById('outlet'));
  router.setRoutes([
    {
    path: '/',
    component: 'a100-page-home',
    action: () => import('../pages/home/index.ts')
  }
  ])
}
