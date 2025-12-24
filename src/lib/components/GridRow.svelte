<script lang="ts">
	import { getThumbnailImg } from '$lib/sanity';
	import { formatDate } from '$lib/utils';
	import BlockContent from './blockContent/BlockContent.svelte';
	import Rating from './Rating.svelte';
	let { review } = $props();
</script>

<div
	class="group relative flex max-w-4xl justify-between rounded-sm p-4 leading-tight odd:bg-green-100 even:bg-blue-100 sm:mb-4 lg:gap-4"
>
	<div class="flex w-full flex-col gap-4 sm:flex-row">
		<div class="shrink-0 grow-0">
			<a href="/review/{review.slug.current}">
				<div class=" rounded-xs border sm:size-36 lg:size-48">
					{#if review.albumArt}
						<img
							src={getThumbnailImg(review.albumArt)}
							class="mix-blend-multiply grayscale group-hover:mix-blend-normal group-hover:grayscale-0 "
						/>
					{/if}
				</div>
			</a>
		</div>
		<div class="flex grow flex-col justify-between gap-4">
			<div class="flex flex-col justify-between sm:flex-row">
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
				<div
					class="mt-4 flex h-min shrink grow basis-0 flex-col flex-wrap sm:-mt-1 sm:items-end sm:justify-end"
				>
					{#each review.tags as tag}
						<a
							href="/tags/{tag.value}"
							class="flex h-min items-center justify-center rounded-xs px-1 py-0.5 text-right leading-[1.1] tracking-[0.01em] whitespace-nowrap sm:text-2xl hover:underline"
						>
							{tag.label}
						</a>
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
