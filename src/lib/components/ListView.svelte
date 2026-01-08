<script lang="ts">
	import ListViewFilterButton from './ListViewFilterButton.svelte';

	import { page } from '$app/state';
	import { siteState } from '$lib/state.svelte';
	import ListRow from './ListRow.svelte';
	let { reviews } = $props();
	let sortedReviews: any[] = $state(reviews);
	let sortAsc = $state(true);
	let sortedField = $state('');

	const sortReviewsByField = (field: string) => {
		sortedField = field;
		sortedReviews.sort((a, b) => {
			let aToCompare = a;
			let bToCompare = b;

			if (field === 'format') {
				aToCompare = a[field][0]['value'];
				bToCompare = b[field][0]['value'];
			} else if (field === 'rating') {
				aToCompare = a[field];
				console.log(aToCompare);
				bToCompare = b[field];
			} else {
				aToCompare = a[field].toLowerCase();
				bToCompare = b[field].toLowerCase();
			}

			if (aToCompare < bToCompare) {
				return sortAsc ? -1 : 1;
			}
			if (aToCompare > bToCompare) {
				return sortAsc ? 1 : -1;
			}
			return 0;
		});
		sortAsc = !sortAsc;
	};
</script>

<div class="">
	{#if page.url.pathname === '/' && siteState.isListView}
		<div class=" sticky top-0 z-1 rounded-tr-md bg-beige pl-12">
			<div class="  flex flex-wrap justify-end gap-x-4 gap-y-2 border-b pt-4 pr-4 pb-3.25 text-xs">
				<ListViewFilterButton isSorting={sortedField === 'title'} onclick={() => sortReviewsByField('title')}
					>Title</ListViewFilterButton
				>
				<ListViewFilterButton isSorting={sortedField === 'artist'} onclick={() => sortReviewsByField('artist')}
					>Artist</ListViewFilterButton
				>
				<ListViewFilterButton isSorting={sortedField === 'format'} onclick={() => sortReviewsByField('format')}
					>Format</ListViewFilterButton
				>
				<ListViewFilterButton isSorting={sortedField === 'releaseDate'} onclick={() => sortReviewsByField('releaseDate')}
					>Release Date</ListViewFilterButton
				>
				<ListViewFilterButton isSorting={sortedField === 'rating'} onclick={() => sortReviewsByField('rating')}
					>Rating</ListViewFilterButton
				>
				<ListViewFilterButton isSorting={sortedField === 'author'} onclick={() => sortReviewsByField('author')}
					>Author</ListViewFilterButton
				>
				<ListViewFilterButton isSorting={sortedField === 'pubDate'} onclick={() => sortReviewsByField('pubDate')}
					>Published Date</ListViewFilterButton
				>
			</div>
		</div>
	{/if}
	{#each sortedReviews as review, idx}
		<ListRow {review} idx={reviews.length - idx}></ListRow>
	{/each}
</div>
