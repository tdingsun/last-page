<script lang="ts">
	import { page } from '$app/state';
	import GridView from '$lib/components/GridView.svelte';
	import ListView from '$lib/components/ListView.svelte';
	import ViewToggle from '$lib/components/ViewToggle.svelte';
	import { siteState } from '$lib/state.svelte';
	let { data } = $props();
</script>


<div class=" sticky top-0 z-1  ml-10 bg-beige">
	<div class="border-b ml-2.25">
		<div class="-mb-1.75 ml-2 pt-4.75 text-2xl font-extralight">
			{#if data.tagLabel}
				{data.tagLabel}
			{:else}
				{page.params.slug}
			{/if}
		</div>
	</div>
</div>

{#if siteState.isListView}
	<div class="block sm:hidden">
		<GridView reviews={data.reviews}></GridView>
	</div>
	<div class="hidden sm:block">
		<ListView reviews={data.reviews}></ListView>
	</div>
{:else}
	<GridView reviews={data.reviews}></GridView>
{/if}
