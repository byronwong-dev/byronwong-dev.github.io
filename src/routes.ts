import { RouteLink } from "./pages/common/types";

export const routes: RouteLink[] = [
  {
    path: '/',
    name: 'byronwong.dev',
  },
  {
    path: '#',
    name: 'engineering',
    disabled: true
  },
  {
    path: '/about',
    name: 'about',
  },
  {
    path: '#',
    name: 'use-cases',
    disabled: true
  },
]