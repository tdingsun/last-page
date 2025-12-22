<script lang="ts">
	import GridRow from './GridRow.svelte';
	let { reviews } = $props();
</script>


<div class=" mr-25 mt-16">
	{#each reviews as review, idx}
		<GridRow {review} idx={reviews.length - idx}></GridRow>
	{/each}
</div>
