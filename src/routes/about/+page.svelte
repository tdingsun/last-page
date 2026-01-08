<script lang="ts">
	import BlockContent from '$lib/components/blockContent/BlockContent.svelte';

	let { data } = $props();
</script>

<div class=" pt-12 pl-12 pr-4  flex flex-col md:flex-row gap-8">
	<div class="basis-3/4">
		<div class="max-w-2xl">
		<BlockContent value={data.aboutPage.content}></BlockContent>

		</div>
	</div>
	<div class="basis-1/4 min-w-[200px]">
		<BlockContent value={data.aboutPage.sideContent}></BlockContent>
	</div>
</div>
