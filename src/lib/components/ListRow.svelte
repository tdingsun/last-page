<script lang="ts">
	import { formatDate } from '$lib/utils';
	import Rating from './Rating.svelte';
	let { review, idx } = $props();
	let rating = $derived(review.rating);
	$inspect(rating);
</script>

<a
	href="/review/{review.slug.current}"
	class="relative flex justify-between border-b p-4 leading-tight lg:gap-4"
>
	<div class=" flex basis-full flex-col gap-4 lg:flex-row">
		<div class="absolute -left-8 hidden rounded-full border px-1 text-xs md:flex">{idx}</div>
		<div class="flex shrink-0 grow-0 flex-col gap-x-4 lg:basis-[300px] lg:flex-row">
			<div class="">{review.title}</div>
			<div class="font-extralight">{review.artist}</div>
		</div>
		<div class="flex w-full justify-between gap-4 lg:justify-start">
			<div class="flex shrink-0 basis-[196px] gap-4">
				<div class="shrink-0 basis-[36px] text-xs whitespace-nowrap">{review.format[0].label}</div>

				<div class="shrink-0 basis-[72px] text-xs whitespace-nowrap">
					{formatDate(review.releaseDate)}
				</div>
				<div class="shrink-0 basis-[64px] text-xs whitespace-nowrap">
					{#key rating}
						<Rating {rating}></Rating>
					{/key}
				</div>
			</div>

			<div
				class="flex grow basis-0 flex-wrap justify-end gap-1 lg:max-w-[calc(100%-300px)] lg:justify-start"
			>
				{#each review.tags as tag}
					<a
						href="/tags/{tag.value}"
						class="flex h-min items-center justify-center rounded-xs border border-brown px-1 py-0.5 text-xs leading-[1] tracking-[0.01em] transition-colors hover:bg-brown hover:text-beige"
					>
						{tag.label}
					</a>
				{/each}
			</div>
		</div>
	</div>
	<div
		class="flex w-0 shrink-0 grow-0 basis-0 flex-col items-end text-xs whitespace-nowrap lg:basis-auto"
	>
		<div>{review.author}</div>
		<div>{formatDate(review.pubDate)}</div>
	</div>
</a>
