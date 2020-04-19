import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login.vue'
import Profil from '../components/profil/Profil.vue'
import Signup from '../components/signup/Signup.vue'
import resultTournament from '../components/resultTournament/ResultTournament.vue'
import auth from '../middleware/auth'
import log from '../middleware/log'
import Home from '../views/Home'
import FirstStepSearch from '../views/FirstStepSearch'
import CreateTournament from "../views/CreateTournament";
import Tournament from "../views/Tournament";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search',
    name: 'search',
    component: FirstStepSearch
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/tournament/:id',
    name: 'tournament',
    component: Tournament
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/resultTournament',
    name: 'resultTournament',
    component: resultTournament
  },
  {
    path: '/create-tournament',
    name: 'createTournament',
    component: CreateTournament
  },
  {
    path: '/profil',
    name: 'profil',
    component: Profil,
    meta: {
      middleware: [auth, log],
      },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;
  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({ ...context, next: nextMiddleware });
  }
  return next();
});

export default router
