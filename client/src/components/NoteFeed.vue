<template>
	<div>
		<NoteWrapper v-for="note in notes" :key="note.id">
			<Note :note="note"></Note>
			<router-link :to="`note/${note.id}`">Link</router-link>
		</NoteWrapper>
	</div>
</template>

<script>
import Note from "../components/Note";
import styled from "vue-styled-components";

const NoteWrapper = styled.div`
	max-width: 800px;
	margin: 0 auto;
	margin-bottom: 2em;
	padding-bottom: 2em;
	border-bottom: 1px solid #f5f4f0;
`;

export default {
	name: "NoteFeed",
	components: {
		Note,
		NoteWrapper,
	},
	props: {
		notes: {
			type: Array,
		},
	},
};
</script>

<style scoped></style>
