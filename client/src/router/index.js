import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Favorites from "../views/Favorites.vue";
import MyNotes from "../views/MyNotes.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/favorites",
		name: "favorites",
		component: Favorites,
		meta: {
			title: "Favorites - Notedly",
		},
	},
	{
		path: "/mynotes",
		name: "mynotes",
		component: MyNotes,
		meta: {
			title: "My Notes - Notedly",
		},
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

const DEFAULT_TITLE = "Notedly";
router.afterEach((to, from) => {
	Vue.nextTick(() => {
		document.title = to.meta.title || DEFAULT_TITLE;
	});
});

export default router;
