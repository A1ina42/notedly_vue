import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Favorites from "../views/Favorites.vue";
import MyNotes from "../views/MyNotes.vue";
import NotePage from "../views/Note.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";

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
	{
		path: "/note/:id",
		name: "notepage",
		component: NotePage,
	},
	{
		path: "/signup",
		name: "signup",
		component: SignUp,
		meta: {
			title: "Sign Up - Notedly",
		},
	},
	{
		path: "/signin",
		name: "signin",
		component: SignIn,
		meta: {
			title: "Sign In - Notedly",
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
