<script lang="ts">
	import { getImgUrl } from '$lib/sanity';
	import { formatDate } from '$lib/utils';
	import BlockContent from './blockContent/BlockContent.svelte';
	import Rating from './Rating.svelte';

	let { review } = $props();
</script>

<div
	class="mt-12 flex flex-col justify-between gap-8 md:mx-12 md:mr-4 md:flex-row lg:mr-12 lg:gap-12"
>
	<div class="mx-4 flex flex-col gap-2 sm:mx-12 md:mx-0">
		<div class="text-4xl">
			<div class="">{review.title}</div>
			<div class="font-extralight">{review.artist}</div>
		</div>

		{#if review.albumArt}
			<img
				src={getImgUrl(review.albumArt)}
				class="w-full overflow-hidden rounded-sm border sm:max-w-xl"
			/>
		{/if}

		<div class="pb-2">
			<div class=" flex max-w-xl justify-between gap-8">
				<div class="">{review.format[0].label}, {formatDate(review.releaseDate)}</div>

				<div class="mt-0.75 shrink-0 whitespace-nowrap">
					<Rating rating={review.rating} large={true}></Rating>
				</div>
			</div>
		</div>
	</div>
	<div class=" h-min basis-0 border-t md:border-t-0 lg:text-2xl">
		<div class="my-4 mr-4 ml-4 flex max-w-xl justify-between sm:mx-12 md:mx-0 md:my-0 md:flex-col">
			<div class="mb-5 font-light">
				<span>
					{#if review.authorLink}
						<a class="pointer-cursor underline" href={review.authorLink}>{review.author}</a>
					{:else}
						{review.author}
					{/if}
				</span>
				<div class="">{formatDate(review.pubDate)}</div>
			</div>
			<div class="">
				{#each review.tags as tag}
					<a
						href="/tags/{tag.value}"
						class="flex h-min rounded-xs py-0.5 leading-[1.1] font-light tracking-[0.01em] whitespace-nowrap hover:underline"
					>
						{tag.label}
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>

<hr />

<div class="mx-4 mt-4 max-w-full sm:mx-12 sm:mt-12 my-12 sm:max-w-xl">
	<BlockContent value={review.content}></BlockContent>
</div>

<div class=" mb-12 border-t">
	<div class=" flex justify-between">
		<div class="flex">
			{#if review.prevReview}
				<div class="mt-0.5 w-12 shrink-0 text-center text-xs">Newer</div>
				<a
					href="/review/{review.prevReview.slug.current}"
					class="mt-1 flex flex-col rounded-sm border hover:bg-brown hover:text-beige transition-colors px-2 py-1 leading-tight"
				>
					<div>
						{review.prevReview.title}
					</div>
					<div class="font-extralight">
						{review.prevReview.artist}
					</div>
				</a>
			{/if}
		</div>
		<div class="flex text-right">
			{#if review.nextReview}
				<a
					href="/review/{review.nextReview.slug.current}"
					class="mt-1 flex flex-col rounded-sm border hover:bg-brown hover:text-beige transition-colors px-2 py-1 leading-tight"
				>
					<div>
						{review.nextReview.title}
					</div>
					<div class="font-extralight">
						{review.nextReview.artist}
					</div>
				</a>
				<div class="mt-0.5 w-12 text-center text-xs">Older</div>
			{/if}
		</div>
	</div>
</div>
