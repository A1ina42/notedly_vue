<template>
	<HeaderBar>
		<img :src="logo" alt="Notedly Logo" height="40" />
		<LogoText>Notedly</LogoText>
		{{ isLoggedIn }}
		<UserState>
			<p v-if="isLoggedIn">
				<ButtonAsLink @click="reset">Logout</ButtonAsLink>
			</p>
			<p v-else>
				<router-link :to="{name: 'signin'}">Sign In</router-link> or
				<router-link :to="{name: 'signup'}">Sign Up</router-link>
			</p>
		</UserState>
	</HeaderBar>
</template>

<script>
import logo from "../img/logo.svg";
import styled from "vue-styled-components";
import ButtonAsLink from "../components/ButtonAsLink";
import {IS_LOGGED_IN} from "../gql/query";

const UserState = styled.div`
	margin-left: auto;
`;

const HeaderBar = styled.header`
	width: 100%;
	padding: 0.5em 1em;
	display: flex;
	height: 64px;
	position: fixed;
	align-items: center;
	background-color: #fff;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
	z-index: 1;
`;
const LogoText = styled.h1`
	margin: 0;
	padding: 0;
	display: inline;
`;

export default {
	name: "Header",
	components: {
		HeaderBar,
		LogoText,
		UserState,
		ButtonAsLink,
	},
	data() {
		return {
			logo,
			error: null,
		};
	},
	apollo: {
		isLoggedIn: {
			query: IS_LOGGED_IN,
			error(error) {
				console.log(error);
				this.error = JSON.stringify(error.message);
			},
			update(data) {
				return data.isLoggedIn;
			},
		},
	},
	methods: {
		reset() {
			localStorage.removeItem("token");
			Object.values(this.$apollo.provider.clients).forEach((client) =>
				client.cache.data.clear()
			);
			// this.$apollo.provider.defaultClient.cache.reset();
			this.$apollo.provider.defaultClient.cache.writeData({
				data: {isLoggedIn: false},
			});
			console.log(this.$apollo.provider.defaultClient.cache);
			// this.$router.push("/");
			if (this.$route.name != "home") {
				this.$router.push({name: "home"});
			}
		},
	},
};
</script>

<style></style>
