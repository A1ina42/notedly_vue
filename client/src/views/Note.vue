<template>
	<div>
		<div v-if="$apollo.queries.note.loading">Loading...</div>
		<p v-if="error">Error! Note not found</p>
		<div v-if="note">
			<Note :note="note" />
		</div>
	</div>
</template>

<script>
import Note from "../components/Note";
import {GET_NOTE} from "../gql/query";
export default {
	name: "NotePage",
	components: {
		Note,
	},
	data() {
		return {
			error: null,
			id: this.$route.params.id,
		};
	},
	apollo: {
		note: {
			query: GET_NOTE,
			variables() {
				return {
					id: this.id,
				};
			},
			error(error) {
				this.error = JSON.stringify(error.message);
			},
		},
	},
};
</script>

<style scoped></style>
