<script lang="ts">
	import { PortableText, type PortableTextComponents } from '@portabletext/svelte';
	import Img from '$lib/components/blockContent/Img.svelte';
	import P from '$lib/components/blockContent/P.svelte';
	import PLarge from './PLarge.svelte';
	import Link from '$lib/components/blockContent/Link.svelte';
	import UL from '$lib/components/blockContent/UL.svelte';
	import OL from '$lib/components/blockContent/OL.svelte';
	import ListItem from '$lib/components/blockContent/ListItem.svelte';
	import Embed from './Embed.svelte';
	import Blockquote from './Blockquote.svelte';
	import H2 from './H2.svelte';
	let { value } = $props();

	const components: Partial<PortableTextComponents> = {
		block: {
			normal: P,
			larger: PLarge,
			blockquote: Blockquote,
			h2: H2
		},
		types: {
			image: Img,
			embed: Embed
		},
		marks: {
			link: Link
		},
		list: {
			bullet: UL,
			number: OL
		},
		listItem: {
			normal: ListItem
		}
	};
</script>

{#if value}
	<PortableText {components} {value}></PortableText>
{/if}
