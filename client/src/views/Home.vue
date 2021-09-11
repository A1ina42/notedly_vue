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
import {useQuery, gql} from "apollo-client";
import {GET_NOTES} from "../gql/query";
const {data, loading, error, fetchMore} = useQuery(GET_NOTES);
console.log(data);

export default {
	name: "Home",
	components: {
		Header,
		Navigation,
		Button,
	},
};
</script>
