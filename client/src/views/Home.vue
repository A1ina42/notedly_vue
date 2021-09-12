<template>
	<div>
		<div v-if="noteFeed">
			<div v-for="note in noteFeed.notes" :key="note.id">
				<article :key="note.id">
					<img :src="note.author.avatar" height="50px" />
					{{ note.author.username }} {{ note.createdAt }}
					{{ note.favoriteCount }}
					<vue-markdown>{{ note.content }}</vue-markdown>
				</article>
			</div>
		</div>
	</div>
</template>

<script>
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Button from "../components/Button";
import VueMarkdown from "vue-markdown";
import {GET_NOTES} from "../gql/query";

export default {
	name: "Home",
	components: {
		Header,
		Navigation,
		Button,
		"vue-markdown": VueMarkdown,
	},
	apollo: {
		noteFeed: {
			query: GET_NOTES,
			loadingKey: "loading...",
		},
	},
};
</script>
