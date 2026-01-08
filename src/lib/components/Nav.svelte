<script lang="ts">
	import NavLink from './NavLink.svelte';
	import Clock from './Clock.svelte';
	import logotype from '$lib/assets/logotype.png';
</script>

<div
	class="flex h-full w-50 shrink-0 grow-0 flex-col justify-between rounded-r-sm border border-l-0 border-brown bg-beige p-1"
>
	<div>
		<a href="/" class="z-10 cursor-pointer">
			<img
				src={logotype}
				class="w-full max-w-72 cursor-pointer self-center justify-self-center p-1 mix-blend-multiply"
			/>
		</a>
		<div class="flex flex-col divide-y border-y -mt-3.5">
			<NavLink href="/about">About</NavLink>
			<NavLink href="/tags">Tags</NavLink>
		</div>
	</div>

	<div>
		<div class="py-8 text-center text-xs">
			<Clock></Clock>
		</div>

		<div class="flex w-full flex-wrap gap-1 text-xs">
			<a
				target="_blank"
				href="https://2023.lp-world.com"
				class="cursor-pointe grow rounded-xs bg-red-100 px-1 text-center transition-colors hover:bg-red-200"
			>
				LP-2023
			</a>
			<a
				target="_blank"
				href="https://2020.lp-world.com"
				class="grow cursor-pointer rounded-xs bg-blue-100 px-1 text-center transition-colors hover:bg-blue-200"
			>
				LP-20x20
			</a>
			<a
				target="_blank"
				href="https://2020.lp-world.com"
				class="grow cursor-pointer rounded-xs bg-green-100 px-1 text-center transition-colors hover:bg-green-200"
			>
				LP-Evil
			</a>
		</div>
	</div>
</div>
