<template>
	<div>
		<div v-if="$apollo.queries.noteFeed.loading">Loading...</div>
		<p v-if="error">Error!</p>
		<div v-if="noteFeed">
			<NoteFeed :notes="noteFeed.notes"></NoteFeed>
		</div>
	</div>
</template>

<script>
import {GET_NOTES} from "../gql/query";
import NoteFeed from "../components/NoteFeed";

export default {
	name: "Home",
	components: {
		NoteFeed,
	},
	data() {
		return {
			error: null,
		};
	},
	apollo: {
		noteFeed: {
			query: GET_NOTES,
			error(error) {
				this.error = JSON.stringify(error.message);
				console.error(error);
			},
		},
	},
};
</script>
