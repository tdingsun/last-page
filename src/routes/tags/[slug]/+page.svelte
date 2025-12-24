<script lang="ts">
	import { page } from '$app/state';
	import GridView from '$lib/components/GridView.svelte';
	import ListView from '$lib/components/ListView.svelte';
	import ViewToggle from '$lib/components/ViewToggle.svelte';
	import { siteState } from '$lib/state.svelte';
	let { data } = $props();
</script>

<ViewToggle></ViewToggle>


<div class="mt-3 text-2xl">
    {#if data.tagLabel}
       {data.tagLabel}
    {:else}
        {page.params.slug}
    {/if}
</div>
{#if siteState.isListView}
	<div class="sm:hidden block">
			<GridView reviews={data.reviews}></GridView>
	</div>
	<div class="sm:block hidden">
			<ListView reviews={data.reviews}></ListView>
	</div>
{:else}
	<GridView reviews={data.reviews}></GridView>
{/if}
