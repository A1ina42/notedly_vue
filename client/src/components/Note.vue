<template>
	<StyledNote>
		<MetaData>
			<MetaInfo>
				<img :src="note.author.avatar" height="50px" :alt="altAvatar" />
			</MetaInfo>
			<MetaInfo>
				<em>by</em> {{ note.author.username }} <br />
				{{ createdAt }}
			</MetaInfo>
			<UserActions> <em>Favorites: </em>{{ note.favoriteCount }} </UserActions>
		</MetaData>
		<VueMarkdown>{{ note.content }}</VueMarkdown>
	</StyledNote>
</template>

<script>
import VueMarkdown from "vue-markdown";
import {format} from "date-fns";
import styled from "vue-styled-components";

const StyledNote = styled.article`
	max-width: 800px;
	margin: 0 auto;
`;

const MetaData = styled.div`
	@media (min-width: 500px) {
		display: flex;
		align-items: top;
	}
`;

const MetaInfo = styled.div`
	padding-right: 1em;
`;

const UserActions = styled.div`
	margin-left: auto;
`;

export default {
	name: "Note",
	components: {
		VueMarkdown,
		StyledNote,
		MetaData,
		MetaInfo,
		UserActions,
	},
	props: {
		note: {
			type: Object,
		},
	},
	computed: {
		createdAt() {
			return format(new Date(this.note.createdAt), "dd.MM.yyyy");
		},
		altAvatar() {
			return `${this.note.author.username} avatar`;
		},
	},
};
</script>

<style scoped></style>
