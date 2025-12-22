<script lang="ts">
	import NavLink from './NavLink.svelte';
</script>

<div class="w-46 h-25 rounded-r-sm border border-l-0 border-brown p-4 text-sm flex flex-col gap-4">
	<div>
		<NavLink href="/about">About</NavLink>
	</div>
	<div class="flex gap-1 flex-wrap text-xs">
		<a href="https://2023.lp-world.com" class="cursor-pointer rounded-xs bg-red-100 px-1 transition-colors hover:bg-red-200">
			LP-2023
		</a>
		<a href="https://2020.lp-world.com" class="cursor-pointer rounded-xs bg-blue-100 px-1 transition-colors hover:bg-blue-200">
			LP-20x20
		</a>
        <a href="https://2020.lp-world.com" class="cursor-pointer rounded-xs bg-green-100 px-1 transition-colors hover:bg-green-200">
			LP-Evil
		</a>
	</div>
</div>
