import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('./views/Home.vue')
		},
		{
			path: '/inscribirse',
			name: 'Cómo inscribirse',
			component: () => import('./views/ComoInscribirse.vue')
		},
		{
			path: '/conocenos',
			name: 'conocenos',
			component: () => import('./views/Conocenos.vue')
		},
		{
			path: '/contactos',
			name: 'contactos',
			component: () => import('./views/Contactos.vue')
		},
		{
			path: '/politicas',
			name: 'politicas',
			component: () => import('./views/Politicas.vue')
		},
	],
	mode: 'history',
	scrollBehavior() {
        return {x: 0, y: 0};
	}
});
