<script lang="ts">
	import { getThumbnailImg } from '$lib/sanity';
	import { formatDate } from '$lib/utils';
	import BlockContent from './blockContent/BlockContent.svelte';
	import Rating from './Rating.svelte';
	let { review, idx } = $props();
</script>

<div
	class="group relative mb-4 flex justify-between rounded-sm p-4 leading-tight odd:bg-green-100 even:bg-blue-100 lg:gap-4"
>
	<div class="flex w-full gap-4">
		<div class="shrink-0 grow-0">
			<a href="/review/{review.slug.current}">
				<div class="rounded-xs border">
					<img
						src={getThumbnailImg(review.albumArt)}
						class="size-36 mix-blend-multiply grayscale group-hover:mix-blend-normal group-hover:grayscale-0 lg:size-48"
					/>
				</div>
			</a>
		</div>
		<div class="flex grow flex-col justify-between gap-4">
			<div class="flex justify-between">
				<div class="flex flex-col gap-2">
					<div class="-mt-1 mb-4 text-2xl leading-tight">
						<div class="">{review.title}</div>
						<div class="font-extralight">{review.artist}</div>
					</div>
					<div class="shrink-0 whitespace-nowrap">
						<Rating rating={review.rating}></Rating>
					</div>
					<div class="text-sm">{review.format[0].label}, {formatDate(review.releaseDate)}</div>
				</div>
				<div class="-mt-1 flex h-min shrink grow basis-0 flex-col flex-wrap items-end justify-end">
					{#each review.tags as tag}
						<div
							class="flex h-min items-center justify-center rounded-xs px-1 py-0.5 text-right text-2xl leading-[1.1] tracking-[0.01em] whitespace-nowrap"
						>
							{tag.label}
						</div>
					{/each}
				</div>
			</div>
			<div class="text-justify text-sm">
				<BlockContent value={review.dek}></BlockContent>
			</div>
			<a
				href="/review/{review.slug.current}"
				class="text-2xl underline hover:font-semibold hover:tracking-tight">Read More</a
			>
		</div>
	</div>
</div>
