<script lang="ts">
	import { getImgUrl } from '$lib/sanity';
	import BlockContent from '$lib/components/blockContent/BlockContent.svelte';
	import { onMount } from 'svelte';
	let { portableText } = $props();

	let lightboxImg: HTMLImageElement;
	let lightBoxState = $state(false);

	const toggleLightbox = () => {
		lightBoxState = !lightBoxState;
		if (lightBoxState) {
			if (lightboxImg) {
				let w = lightboxImg.getBoundingClientRect().width;
				let h = lightboxImg.getBoundingClientRect().height;
		
                lightboxImg.style.pointerEvents = 'auto'
				document.querySelectorAll('.lightboxImg').forEach((el) => {
					el.style.zIndex = '99';
				});
				lightboxImg.style.zIndex = '100';
			} 
		} else {
                lightboxImg.style.pointerEvents = 'none'
        }
	};

    onMount(() => {
        document.body.appendChild(lightboxImg);
    })
</script>

<div class="my-4 border rounded-md flex flex-col justify-center p-1">
	<img
		onclick={toggleLightbox}
		src={getImgUrl(portableText.value)}
		alt={portableText.value.alt ? portableText.value.alt : ''}
		class="rounded-sm border"
	/>
	{#if portableText.value.caption}
		<div class="mt-1 text-sm">
			<BlockContent value={portableText.value.caption}></BlockContent>
		</div>
	{/if}
</div>

<div bind:this={lightboxImg}
	onclick={toggleLightbox}
	class="fixed left-0 top-0 z-10 w-dvw h-dvh bg-beige p-4 lightboxImg flex items-center justify-center {lightBoxState
		? 'pointer-events-auto opacity-100'
		: 'pointer-events-none opacity-0'}"
	>
<img
	
	alt={portableText.value.alt ? portableText.value.alt : ''}
	src={getImgUrl(portableText.value)}
	class=" border rounded-md  object-contain "
/>

</div>
