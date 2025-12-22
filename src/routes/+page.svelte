<script lang="ts">
	import GridView from '$lib/components/GridView.svelte';
	import ListView from '$lib/components/ListView.svelte';
	import ViewToggle from '$lib/components/ViewToggle.svelte';
	import { siteState } from '$lib/state.svelte';
	let { data } = $props();
	console.log(data);
</script>

<ViewToggle></ViewToggle>
{#if siteState.isListView}
	<ListView reviews={data.reviews}></ListView>
{:else}
	<GridView reviews={data.reviews}></GridView>
{/if}
