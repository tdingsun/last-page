<script lang="ts">
	import GridView from '$lib/components/GridView.svelte';
	import ListView from '$lib/components/ListView.svelte';
	import ViewToggle from '$lib/components/ViewToggle.svelte';
	import { siteState } from '$lib/state.svelte';
	let { data } = $props();
</script>

<!-- <ViewToggle></ViewToggle> -->
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
