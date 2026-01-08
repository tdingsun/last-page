<script lang="ts">
	let { data } = $props();
</script>

<div class="pt-12 pl-12 pr-4">
{#each data.tagFreqArr as tag}
	<div class="flex gap-4 px-4 pb-0.5 text-2xl font-light">
		<div class="w-8 border h-8 rounded-full font-extralight flex justify-center items-center">{tag.count}</div>

		<a href="/tags/{tag.key}" class="hover:underline ">{tag.label}</a>
	</div>
{/each}

</div>
