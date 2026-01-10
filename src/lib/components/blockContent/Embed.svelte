<script lang="ts">
	import BlockContent from '$lib/components/blockContent/BlockContent.svelte';
	let { portableText } = $props();
</script>

<div class="mb-4">
	<div class="w-full {portableText.value.URL.includes('youtube') ? 'aspect-video  ' : ''} {portableText.value.URL.includes('bandcamp') ? 'h-30 ' : ''} mb-1 ">
		<iframe
			src={portableText.value.URL}
			frameborder="0"
			allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			class="h-full w-full border rounded-md"
		></iframe>
	</div>
	<div class="my-1 text-sm">
		<BlockContent value={portableText.value.caption}></BlockContent>
	</div>
</div>
