<template>
	<swiper
		:rewind="true"
		:slidesPerView="2"
		:spaceBetween="5"
		:loop="true"
		:navigation="false"
		:modules="modules"
		class="mySwiper"
	>
		<swiper-slide
			v-for="(item, index) in items"
			:key="index"
			class="swiper-slide"
		>
			<img class="swiper__image" :src="item.url" alt="" />
		</swiper-slide>
	</swiper>
</template>

<script setup>
/*import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

const props = defineProps({
	items: {
		type: Array,
		required: true,
		default: [
			{ url: '/images/demo.jpg' },
			{ url: '/images/demo.jpg' },
			{ url: '/images/demo.jpg' },
		],
	},
});

const modules = [Pagination, Navigation];*/
</script>

<style scoped></style>
