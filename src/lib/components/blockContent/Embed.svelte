<script lang="ts">
	import BlockContent from '$lib/components/blockContent/BlockContent.svelte';
	let { portableText } = $props();
</script>

<div class="w-full">
	<iframe
		src="{portableText.value.URL}"
		frameborder="0"
		allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		class="w-full h-full"
	></iframe>
</div>
<div class="my-1 text-sm">
	<BlockContent value={portableText.value.caption}></BlockContent>
</div>
