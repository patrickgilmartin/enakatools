import { lazy } from 'react';

const routes = [
  {
    path: 'home',
    component: lazy(() => import('pages/Home')),
    exact: true
  },
  {
    path: 'market',
    component: lazy(() => import('pages/market')),
    exact: true
  }
];

export default routes;