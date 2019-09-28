<template>
	<div class="main">
		<div class="mainleft">

		</div>
		<div class="mainleftseparate"></div>
		<div class="maincontent">

		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	body,
	th,
	td,
	div {
		font-family: arial
	}
	
	p,
	form,
	ol,
	ul,
	li,
	dl,
	dt,
	dd,
	h3 {
		margin: 0;
		padding: 0;
		list-style: none
	}
	
	body {
		color: #333;
		background: #fff;
		padding: 0;
		margin: 0;
	}
	
	input {
		padding-top: 0;
		padding-bottom: 0;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box
	}
	
	table,
	img {
		border: 0
	}
	
	body {
		text-align: center;
		background-color: #;
	}
	
	html,
	body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background-color: #F2F0F6;
	}
	
	.main {
		margin: 0 auto;
		background-color: white;
		width: 1420px;
		height: 800px;
		min-width: 1420px;
		min-height: 800px;
		position: relative;
		margin-top: 40%;
		/*偏移*/
		transform: translateY(-50%);
		border-radius: 25px;
		-moz-border-radius: 25px;
		/* 老的 Firefox */
	}
	
	.mainleft {
		float: left;
		width: 80px;
		height: 100%;
	}
	
	.mainleftseparate {
		float: left;
		width: 8px;
		height: 100%;
		background-color: #EBEAEE;
	}
	
	.maincontent {
		float: left;
		background-color: #F9F8FA;
		width: 1332px;
		height: 100%;
		-webkit-border-top-right-radius: 25px;
		-moz-border-radius-topleft: 25px;
		-webkit-border-bottom-right-radius: 25px;
		-moz-border-radius-bottomright: 25px;
	}
</style>