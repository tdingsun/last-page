<script lang="ts">
	import { page } from '$app/state';
	import { siteState } from '$lib/state.svelte';
	import ListRow from './ListRow.svelte';
	let { reviews } = $props();
</script>


<div class="px-4 md:px-0">
	{#if page.url.pathname === '/' && siteState.isListView}
				<div class="mr-24 flex gap-4 border-b py-4 text-xs">
					<div class="">Title</div>
					<div class="">Artist</div>
					<div class="">Format</div>
					<div class="">Release Date</div>
					<div>Rating</div>

					<div>Tags</div>
					<div>Author</div>
					<div>Published Date</div>
				</div>
			{/if}
	{#each reviews as review, idx}
		<ListRow {review} idx={reviews.length - idx}></ListRow>
	{/each}
</div>
