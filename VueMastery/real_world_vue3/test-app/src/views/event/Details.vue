<template>
	<p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
	<p>{{ event.description }}</p>
</template>

<script>
export default {
	props: ['event'],
	created() {
		console.log('11111');
	},
};
</script>
