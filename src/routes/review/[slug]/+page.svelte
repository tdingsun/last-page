<script lang="ts">
	import Review from '$lib/components/Review.svelte';

    let { data } = $props();
</script>

<div>
    <Review review={data.review}></Review>
</div>