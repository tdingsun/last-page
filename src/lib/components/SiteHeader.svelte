<script lang="ts">
	import logotype from '$lib/assets/logotype.png';
	import BlockContent from './blockContent/BlockContent.svelte';
	import Clock from './Clock.svelte';
	let { welcomeMessage } = $props();
</script>

<div class="sticky top-0 flex w-dvw justify-between bg-beige text-sm">
	<div class="basis-[184px] p-4">
		<BlockContent value={welcomeMessage}></BlockContent>
	</div>
	<div class="flex justify-between grow">
		<a href="/" class="pointer-cursor">
			<img
				src={logotype}
				class="w-full max-w-72 self-center justify-self-center p-4 mix-blend-multiply"
			/>
		</a>
		<div class="flex grow basis-0 justify-end">
			<Clock></Clock>
		</div>
	</div>
</div>
