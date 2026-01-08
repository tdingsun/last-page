<script lang="ts">
	import { getThumbnailImg } from '$lib/sanity';
	import { formatDate } from '$lib/utils';
	import BlockContent from './blockContent/BlockContent.svelte';
	import Rating from './Rating.svelte';
	let { review } = $props();
	console.log(review);
</script>

<div
	class="group relative flex w-full max-w-4xl justify-between rounded-sm border border-brown p-4 leading-tight odd:bg-green-100 even:bg-blue-100 lg:gap-4"
>
	<div class="flex w-full flex-col gap-4 sm:flex-row">
		<div class="shrink-0 grow-0">
			<a href="/review/{review.slug.current}">
				<div class=" aspect-square rounded-xs border sm:size-36 lg:size-48">
					{#if review.albumArt}
						<img
							src={getThumbnailImg(review.albumArt)}
							class="mix-blend-multiply grayscale group-hover:mix-blend-normal group-hover:grayscale-0"
						/>
					{/if}
				</div>
			</a>
			<div
				class="mt-1 flex h-min shrink grow basis-0 gap-x-8 gap-y-1 sm:gap-0 sm:flex-col flex-wrap lg:hidden"
			>
				{#each review.tags as tag}
					<a
						href="/tags/{tag.value}"
						class="flex h-min  rounded-xs py-0.5 leading-[1.1] font-extralight tracking-[0.01em] whitespace-nowrap hover:underline "
					>
						{tag.label}
					</a>
				{/each}
			</div>
		</div>
		<div class="flex grow flex-col justify-between gap-4">
			<div class="flex flex-col justify-between sm:flex-row">
				<div class="flex flex-col">
					<div class="-mt-1 mb-2 text-2xl leading-tight">
						<div class="">{review.title}</div>
						<div class="font-extralight">{review.artist}</div>
					</div>
					<div class="mb-2 shrink-0 whitespace-nowrap">
						<Rating rating={review.rating}></Rating>
					</div>
					<div class="flex gap-4 text-sm">
						{review.format[0].label}, {formatDate(review.releaseDate)}
					</div>
					<div class="text-sm">
						By {review.author} <span class="font-extralight">{formatDate(review.pubDate)}</span>
					</div>
				</div>
				<div
					class="mt-4 hidden h-min shrink grow basis-0 flex-col flex-wrap sm:-mt-1 sm:items-end sm:justify-end lg:flex"
				>
					{#each review.tags as tag}
						<a
							href="/tags/{tag.value}"
							class="flex h-min items-center justify-center rounded-xs px-1 py-0.5 text-right leading-[1.1] font-extralight tracking-[0.01em] whitespace-nowrap hover:underline sm:text-2xl"
						>
							{tag.label}
						</a>
					{/each}
				</div>
			</div>
			<div class=" border-y py-4 text-sm">
				<BlockContent value={review.dek}></BlockContent>
			</div>
			<a
				href="/review/{review.slug.current}"
				class="text-2xl  font-extralight hover:underline ">Read More</a
			>
		</div>
	</div>
</div>
