<script lang="ts">
	import GridRow from './GridRow.svelte';
	let { reviews } = $props();
</script>


<div class="mt-1 md:mx-0  lg:mx-12 gap-1 flex flex-col items-center">
	{#each reviews as review, idx}
		<GridRow {review} idx={reviews.length - idx}></GridRow>
	{/each}
</div>
