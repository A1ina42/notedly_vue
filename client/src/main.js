import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueApollo from "vue-apollo";
import ApolloClient from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {setContext} from "apollo-link-context";
import {createHttpLink} from "apollo-link-http";
import dotenv from "dotenv";

const dotEnvOptions = {
	path: "/.env",
};

dotenv.config(dotEnvOptions);

Vue.use(VueApollo);

const uri = process.env.VUE_APP_API_URI;
const httpLink = createHttpLink({uri});
const cache = new InMemoryCache();

const authLink = setContext((_, {headers}) => {
	return {
		headers: {
			...headers,
			authorization: localStorage.getItem("token") || "",
		},
	};
});

const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache,
	resolvers: {},
});

const apolloProvider = new VueApollo({
	defaultClient: apolloClient,
});

Vue.config.productionTip = false;

new Vue({
	router,
	render: (h) => h(App),
	apolloProvider,
}).$mount("#app");
