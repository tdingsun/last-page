<script lang="ts">
    import { siteState } from "$lib/state.svelte";
    const toggleView = () => {
        siteState.isListView = !siteState.isListView
    }
</script>

<div class="sm:flex hidden bg-beige z-1 right-0 absolute top-0 border border-r-0 rounded-tl-md divide-x text-sm min-w-24 min-h-11.75 justify-center">
	<button onclick={toggleView} class="cursor-pointer font-light py-2 hover:underline">{siteState.isListView ? 'Grid' : 'List'} View</button>
</div>
