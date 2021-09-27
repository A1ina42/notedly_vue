<template>
	<div>
		<p v-if="$apollo.queries.noteFeed.loading">Loading...</p>
		<p v-if="error">Error!</p>
		<div v-if="noteFeed">
			<NoteFeed :notes="noteFeed.notes"></NoteFeed>
			<Button v-if="noteFeed.hasNextPage" @click="loadMore()">Load more</Button>
		</div>
	</div>
</template>

<script>
import {GET_NOTES} from "../gql/query";
import NoteFeed from "../components/NoteFeed";
import Button from "../components/Button";

export default {
	name: "Home",
	components: {
		NoteFeed,
		Button,
	},
	data() {
		return {
			error: null,
			cursor: null,
		};
	},
	apollo: {
		noteFeed: {
			query: GET_NOTES,
			variables() {
				return {
					cursor: this.cursor,
				};
			},
			error(error) {
				this.error = JSON.stringify(error.message);
				console.error(error);
			},
		},
	},
	methods: {
		loadMore() {
			this.$apollo.queries.noteFeed.fetchMore({
				variables: {
					cursor: this.noteFeed.cursor,
				},
				updateQuery: (previousResult, {fetchMoreResult}) => {
					return {
						noteFeed: {
							cursor: fetchMoreResult.noteFeed.cursor,
							hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
							notes: [
								...previousResult.noteFeed.notes,
								...fetchMoreResult.noteFeed.notes,
							],
							__typename: "noteFeed",
						},
					};
				},
			});
		},
	},
};
</script>
