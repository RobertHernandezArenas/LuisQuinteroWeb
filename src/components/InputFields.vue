<template>
	<div class="input-box">
		<input
			class="input"
			:type="type"
			:autocomplete="autocomplete"
			:required="required"
		/><span class="input__label">{{ inputName }}</span>
	</div>
</template>

<script setup>
defineProps({
	inputName: {
		type: String,
		default: 'text',
	},
	type: {
		type: String,
		required: true,
		default: 'text',
	},
	placeholder: {
		type: String,
		default: 'your placeholder here...',
	},
	autocomplete: {
		type: String,
		default: 'off',
	},
	required: {
		type: Boolean,
		default: false,
	},
});
</script>

<style scoped>
.input-box {
	position: relative;
	width: 250px;
}

.input-box .input {
	background: var(--neutral-0);
	width: 100%;
	padding: 10px;
	border: 1px solid var(--neutral-100);
	border-radius: 5px;
	outline: none;
	font-size: clamp(14px, 3vw, 18px);
    transition: .5s;
}

.input-box .input__label {
	position: absolute;
	left: 0;
	padding: 10px;
	pointer-events: none;
	font-size: clamp(14px, 3vw, 18px);
	color: var(--neutral-100);
	text-transform: uppercase;
	transition: .5s;
}
.input-box .input:valid ~ .input__label,
.input-box .input:focus ~ .input__label {
	color: var(--neutral-0);
	transform: translateX(10px) translateY(-7px);
    font-size: .75rem;
    padding: 0 10px;
    background:  var(--theme);
}
.input-box .input:valid ,
.input-box .input:focus  {
	
    border: 1px solid var(--theme);
}

/* 
.input {
	box-sizing: border-box;
	margin: 0;
	padding: 4px 11px;
	color: var(--neutral-0);
	font-size: 14px;
	line-height: 1.6;
	font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
		'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
		'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
	position: relative;
	display: inline-block;
	width: 100%;
	min-width: 0;
	background-color: var(--neutral-100);
	background-image: none;
	border-width: 1px;
	border-style: solid;
	border-color: var(--neutral-80);
	transition: all 0.2s;
} */
</style>
