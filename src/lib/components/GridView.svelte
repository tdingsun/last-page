<script lang="ts">
	import GridRow from './GridRow.svelte';
	let { reviews } = $props();
</script>


<div class=" sm:mr-24 sm:mt-4">
	{#each reviews as review, idx}
		<GridRow {review} idx={reviews.length - idx}></GridRow>
	{/each}
</div>
