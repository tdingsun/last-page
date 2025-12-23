<script lang="ts">
	import { getDateTime } from '$lib/utils';
	import { onMount } from 'svelte';

	let time: string[] = $state([])

	onMount(() => {
		time = getDateTime();
		setInterval(() => {
			time = getDateTime();
		}, 1000);
	});
</script>

<div class="hidden sm:flex flex-col items-center p-4 leading-tight">
    {#each time as component}
        <div>{component}</div>
    {/each}
</div>
