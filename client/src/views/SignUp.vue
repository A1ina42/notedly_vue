<template>
	<div>
		<Wrapper>
			<h2>Sign Up</h2>
			<Form>
				<label for="username">Username: </label>
				<input
					required
					type="text"
					id="username"
					name="username"
					placeholder="Username"
				/>
				<label for="username">Email: </label>
				<input
					required
					type="email"
					id="email"
					name="email"
					placeholder="Email"
				/>
				<label for="username">Password: </label>
				<input
					required
					type="password"
					id="password"
					name="password"
					placeholder="Password"
				/>
				<button type="submit">Submit</button>
			</Form>
		</Wrapper>
	</div>
</template>

<script>
import styled from "vue-styled-components";
import Button from "../components/Button";

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
};
</script>

<style scoped></style>
