<script lang="ts">
	import GridRow from './GridRow.svelte';
	let { reviews } = $props();
</script>


<div class=" mr-24 mt-4">
	{#each reviews as review, idx}
		<GridRow {review} idx={reviews.length - idx}></GridRow>
	{/each}
</div>
