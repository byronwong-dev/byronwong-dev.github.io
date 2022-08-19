import { RouteObject } from "react-router-dom";
import Blog from "./pages/blog";
import About from "./pages/about";
import Error from "./pages/common/error";
import { RouteLink } from "./pages/types";
import Home from "./pages/home";

// navigation generated links
export const navigations: RouteLink[] = [
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

// actual routes
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/blog/:slug',
    element: <Blog/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '*',
    element: <Error/>
  },
]