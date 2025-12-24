<script lang="ts">
	let { data } = $props();
</script>

<div class="mt-16">
{#each data.tagFreqArr as tag}
	<div class="flex gap-4">
		<div class="w-12">{tag.count}</div>

		<a href="/tags/{tag.key}" class="hover:underline">{tag.label}</a>
	</div>
{/each}

</div>
