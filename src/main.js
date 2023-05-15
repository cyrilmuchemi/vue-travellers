import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Destination from '@/views/Destination.vue'
import Crew from '@/views/Crew.vue'
import Technology from '@/views/Technology.vue'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "Home", component: Home},
        {path: "/destination", name: "Destination", component: Destination},
        {path: "/crew", name: "Crew", component: Crew},
        {path: "/technology", name: "Technology", component: Technology}
    ]
})

createApp(App)
.use(router)
.mount('#app')
