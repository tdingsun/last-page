<script lang="ts">
	import { getThumbnailImg } from '$lib/sanity';
	import { formatDate } from '$lib/utils';
	import BlockContent from './blockContent/BlockContent.svelte';
	import Rating from './Rating.svelte';
	let { review, idx } = $props();
</script>

<div
	class="group relative mb-4 flex justify-between p-4 leading-tight odd:bg-green-100 even:bg-blue-100 lg:gap-4 rounded-sm"
>
	<div class="flex w-full gap-4">
		<div class="shrink-0 grow-0">
			<div class="border rounded-xs">
			<img src={getThumbnailImg(review.albumArt)} class="size-36 lg:size-48  grayscale mix-blend-multiply group-hover:grayscale-0 group-hover:mix-blend-normal" />

			</div>
		</div>
		<div class="flex grow flex-col justify-between gap-4">
			<div class="flex justify-between">
				<div class="flex flex-col gap-2">
					<div class="text-2xl leading-tight -mt-1 mb-4">
						<div class="">{review.title}</div>
						<div class="font-extralight">{review.artist}</div>
					</div>
					<div class="shrink-0 whitespace-nowrap">
						<Rating rating={review.rating}></Rating>
					</div>
					<div class="text-sm">{review.format[0].label}, {formatDate(review.releaseDate)}</div>
				</div>
				<div class="flex flex-col h-min shrink grow basis-0 flex-wrap items-end justify-end -mt-1">
					{#each review.tags as tag}
						<div
							class="flex h-min items-center justify-center text-right whitespace-nowrap rounded-xs px-1 py-0.5 text-2xl leading-[1.1] tracking-[0.01em]"
						>
							{tag.label}
						</div>
					{/each}
				</div>
			</div>
			<div class="text-justify text-sm">
				<BlockContent value={review.dek}></BlockContent>
			</div>
			<a href="/review/{review.slug.current}" class="text-2xl underline hover:font-semibold hover:tracking-tight">Read More</a>
		</div>
	</div>

	<!-- <div class=" flex basis-full flex-col gap-4 lg:flex-row">
		<div class="absolute -left-8 rounded-full border px-1 text-xs">{idx}</div>
		<div class="flex shrink-0 grow-0 flex-col gap-x-4 lg:basis-[300px] lg:flex-row">

		</div>
		<div class="flex w-full justify-between gap-4 lg:justify-start">
			<div class="flex shrink-0 basis-[196px] gap-4">
				<div class="shrink-0 basis-[36px] text-xs whitespace-nowrap">{review.format[0].label}</div>

				<div class="shrink-0 basis-[72px] text-xs whitespace-nowrap">
					{formatDate(review.releaseDate)}
				</div>
				<div class="shrink-0 basis-[64px] text-xs whitespace-nowrap">
					<Rating rating={review.rating}></Rating>
				</div>
			</div>

	
		</div>
	</div>
	<div
		class="flex w-0 shrink-0 grow-0 basis-0 flex-col items-end text-xs whitespace-nowrap lg:basis-auto"
	>
		<div>{review.author}</div>
		<div>{formatDate(review.pubDate)}</div>
	</div> -->
</div>
