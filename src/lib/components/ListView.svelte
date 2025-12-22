<script lang="ts">
	import ListRow from './ListRow.svelte';
	let { reviews } = $props();
</script>


<div class="">
	{#each reviews as review, idx}
		<ListRow {review} idx={reviews.length - idx}></ListRow>
	{/each}
</div>
