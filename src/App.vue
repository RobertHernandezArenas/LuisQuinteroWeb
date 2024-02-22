<script setup>
import { RouterView } from 'vue-router';
import MenuBar from '@/components/MenuBar.vue';
import ButtonUp from '@/components/ButtonUp.vue';
</script>

<template>
	<MenuBar />
	<RouterView> </RouterView>
	<ButtonUp />
</template>
