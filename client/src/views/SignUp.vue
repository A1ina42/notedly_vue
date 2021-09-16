<template>
	<div>
		<Wrapper>
			<h2>Sign Up</h2>
			<Form @submit.prevent="signUp">
				<label for="username">Username: </label>
				<input
					required
					type="text"
					id="username"
					name="username"
					placeholder="Username"
					v-model="username"
				/>
				<label for="username">Email: </label>
				<input
					required
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					v-model="email"
				/>
				<label for="username">Password: </label>
				<input
					required
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					v-model="password"
				/>
				<button type="submit">Submit</button>
			</Form>
		</Wrapper>
	</div>
</template>

<script>
import styled from "vue-styled-components";
import Button from "../components/Button";
import {SIGNUP_USER} from "../gql/mutation";

const Wrapper = styled.div`
	border: 1px solid #f5f4f0;
	max-width: 500px;
	padding: 1em;
	margin: 0 auto;
`;
const Form = styled.form`
	label,
	input {
		display: block;
		line-height: 2em;
	}
	input {
		width: 100%;
		margin-bottom: 1em;
	}
`;

export default {
	name: "SignUp",
	components: {
		Button,
		Form,
		Wrapper,
	},
	data() {
		return {
			username: "",
			email: "",
			password: "",
			error: null,
		};
	},
	methods: {
		signUp() {
			this.$apollo
				.mutate({
					mutation: SIGNUP_USER,
					variables: {
						username: this.username,
						email: this.email,
						password: this.password,
					},
				})
				.then((res) => {
					localStorage.setItem("token", res.data.signUp);
					this.$router.push("/");
				})
				.catch((err) => {
					this.error = err;
					console.error(err);
				});
		},
	},
};
</script>

<style scoped></style>
