<script lang="ts">
	import Review from '$lib/components/Review.svelte';

    let { data } = $props();
</script>

<div class="px-4 sm:px-0">
    <Review review={data.review}></Review>
</div>