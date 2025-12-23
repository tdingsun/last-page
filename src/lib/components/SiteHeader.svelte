<script lang="ts">
	import logotype from '$lib/assets/logotype.png';
	import BlockContent from './blockContent/BlockContent.svelte';
	import Clock from './Clock.svelte';
	let { welcomeMessage } = $props();
</script>

<div class="sm:sticky top-0 left-0 relative  flex w-dvw justify-between bg-beige text-sm">
	<div class="basis-[184px] p-4 md:block hidden">
		<BlockContent value={welcomeMessage}></BlockContent>
	</div>
	<div class="flex justify-end md:justify-between grow">
		<a href="/" class="cursor-pointer">
			<img
				src={logotype}
				class="w-full max-w-72 self-center justify-self-center p-4 mix-blend-multiply cursor-pointer"
			/>
		</a>
		<div class="hidden md:flex grow basis-0 justify-end">
			<Clock></Clock>
		</div>
	</div>
</div>
