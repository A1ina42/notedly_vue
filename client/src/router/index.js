import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Favorites from "../views/Favorites.vue";
import MyNotes from "../views/MyNotes.vue";
import NotePage from "../views/Note.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import NewNote from "../views/New.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
		meta: {
			requiresAuth: false,
		},
	},
	{
		path: "/favorites",
		name: "favorites",
		component: Favorites,
		meta: {
			requiresAuth: true,
			title: "Favorites - Notedly",
		},
	},
	{
		path: "/mynotes",
		name: "mynotes",
		component: MyNotes,
		meta: {
			requiresAuth: true,
			title: "My Notes - Notedly",
		},
	},
	{
		path: "/note/:id",
		name: "notepage",
		component: NotePage,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/signup",
		name: "signup",
		component: SignUp,
		meta: {
			requiresAuth: false,
			title: "Sign Up - Notedly",
		},
	},
	{
		path: "/signin",
		name: "signin",
		component: SignIn,
		meta: {
			requiresAuth: false,
			title: "Sign In - Notedly",
		},
	},
	{
		path: "/new",
		name: "newnote",
		component: NewNote,
		meta: {
			requiresAuth: true,
			title: "New Note - Notedly",
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

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		next("/");
	} else {
		next();
	}
});

export default router;
