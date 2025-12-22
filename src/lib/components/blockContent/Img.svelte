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
				lightboxImg.style.left = `${Math.max(Math.random() * (window.innerWidth - w), 0)}px`;
				lightboxImg.style.top = `${Math.max(Math.random() * (window.innerHeight - h), 0)}px`;
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

<div class="my-4">
	<img
		onclick={toggleLightbox}
		src={getImgUrl(portableText.value)}
		alt={portableText.value.alt ? portableText.value.alt : ''}
	/>
	{#if portableText.value.caption}
		<div class="my-1 text-sm">
			<BlockContent value={portableText.value.caption}></BlockContent>
		</div>
	{/if}
</div>

<img
	bind:this={lightboxImg}
	onclick={toggleLightbox}
	alt={portableText.value.alt ? portableText.value.alt : ''}
	src={getImgUrl(portableText.value)}
	class="lightboxImg {lightBoxState
		? 'pointer-events-auto opacity-100'
		: 'pointer-events-none opacity-0'} fixed z-10 max-h-[calc(100dvh-4rem)] max-w-[calc(100dvw-4rem)] shadow-2xl"
/>
