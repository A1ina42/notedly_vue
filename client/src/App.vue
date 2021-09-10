<template>
	<div>
		<Header />
		<Wrapper>
			<Navigation />
			<Main>
				<router-view />
			</Main>
		</Wrapper>
	</div>
</template>

<script>
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import styled from "vue-styled-components";

const Wrapper = styled.div`
	@media (min-width: 700px) {
		display: flex;
		top: 64px;
		position: relative;
		height: calc(100% - 64px);
		width: 100%;
		flex: auto;
		flex-direction: column;
	}
`;
const Main = styled.main`
	position: fixed;
	height: calc(100% - 185px);
	width: 100%;
	padding: 1em;
	overflow-y: scroll;
	@media (min-width: 700px) {
		flex: 1;
		margin-left: 220px;
		height: calc(100% - 64px);
		width: calc(100% - 220px);
	}
`;

export default {
	components: {
		Header,
		Navigation,
		Main,
		Wrapper,
	},
};
</script>

<style>
*,
*:before,
*:after {
	box-sizing: border-box;
}
body,
html {
	height: 100%;
	margin: 0;
}
body {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	background-color: #fff;
	line-height: 1.4;
}
a:link,
a:visited {
	color: #0077cc;
}
a:hover,
a:focus {
	color: #004499;
}
code,
pre {
	max-width: 100%;
}
</style>
