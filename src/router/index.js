import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutmeComponent from '../components/AboutmeComponent.vue';
import ExperienceComponent from '../components/ExperienceComponent.vue';
import ProyectsComponent from '../components/ProyectsComponent.vue';
import SkillsComponent from '../components/SkillsComponent.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutmeComponent,
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceComponent,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProyectsComponent,
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
});

export default router;