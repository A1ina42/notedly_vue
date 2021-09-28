<template>
	<Wrapper>
		<Form>
			<TextArea
				required
				type="text"
				name="content"
				placeholder="Note content"
				v-model="content"
			></TextArea>
			<Button type="submit"></Button>
		</Form>
	</Wrapper>
</template>

<script>
import Button from "./Button";
import styled from "vue-styled-components";
const Wrapper = styled.div`
	height: 100%;
`;
const Form = styled.form`
	height: 100%;
`;
const TextArea = styled.textarea`
	width: 100%;
	height: 90%;
`;

export default {
	name: "NoteForm",
	components: {
		Form,
		Wrapper,
		TextArea,
	},
	data() {
		return {
			content: "",
		};
	},
};
</script>

<style lang="scss" scoped></style>
