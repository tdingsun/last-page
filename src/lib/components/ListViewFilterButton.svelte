<script lang="ts">
	let { isSorting, children, onclick } = $props();
</script>

<button {onclick} class="{isSorting ? 'border-brown' : 'border-transparent'} cursor-pointer border px-2 rounded-full hover:border-brown">
	{@render children()}
</button>
