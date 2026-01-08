<script lang="ts">
	import Review from '$lib/components/Review.svelte';

	let { data } = $props();
</script>

<Review review={data.review}></Review>
