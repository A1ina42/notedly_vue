<template>
	<div>
		<p>This is the home page</p>
		<Button>Click me!</Button>
	</div>
</template>

<script>
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Button from "../components/Button";
export default {
	name: "Home",
	components: {
		Header,
		Navigation,
		Button,
	},
};
</script>
