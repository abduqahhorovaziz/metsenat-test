import { createRouter, createWebHistory } from 'vue-router'
import Sponsors from "./../components/Sponsors.vue"
import Students from "./../components/Students.vue"
import Dashboard from "./../components/Dashboard.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/sponsors', component:Sponsors, alias: '/'},
    {path: '/students', component:Students},
    {path: '/dashboard', component:Dashboard},
  ]
})

export default router
