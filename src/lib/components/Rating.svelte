<script lang="ts">
	let { rating, large=false } = $props();
	let whole = Math.floor(rating);
	let numCircles = new Array(5);
	let fraction = Math.round((rating - whole) * 100);
</script>

<div class="flex gap-0.5 mt-0.5 ">
	{#each numCircles as circle, idx}
		<div class="{large ? 'size-4' : 'size-2'} overflow-hidden rounded-full border">
			{#if idx === whole}
				<div style="width: {fraction}%" class="h-full w-full bg-brown"></div>
			{:else if idx < whole}
				<div class="h-full w-full bg-brown"></div>
			{/if}
		</div>
	{/each}
</div>
