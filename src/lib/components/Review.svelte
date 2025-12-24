<script lang="ts">
	import { getImgUrl } from '$lib/sanity';
	import { formatDate } from '$lib/utils';
	import BlockContent from './blockContent/BlockContent.svelte';
	import Rating from './Rating.svelte';

	let { review } = $props();
</script>

<div class="mt-4 flex w-full gap-4">
	<div class="flex grow flex-col justify-between gap-4">
		<div class="flex flex-col justify-between sm:flex-row">
			<div class="flex flex-col gap-2">
				<div class="-mt-1 mb-4 text-4xl leading-tight">
					<div class="flex flex-wrap gap-x-4">
						<div class="ml-12 lg:ml-0">{review.title}</div>
						<div class="font-extralight">{review.artist}</div>
					</div>

					<div class="text-2xl">
						by <span>
							{#if review.authorLink}
								<a class="pointer-cursor underline" href={review.authorLink}>{review.author}</a>
							{:else}
								{review.author}
							{/if}
						</span>
					</div>
				</div>
				<div class="flex gap-8">
					<div class="">{review.format[0].label}, {formatDate(review.releaseDate)}</div>

					<div class="mt-0.75 shrink-0 whitespace-nowrap">
						<Rating rating={review.rating} large={true}></Rating>
					</div>
				</div>
			</div>
			<div
				class="sticky top-0 mt-2 flex h-min shrink grow basis-0 flex-col flex-wrap items-end justify-end text-2xl sm:-mt-1"
			>
				{#each review.tags as tag}
					<div
						class="flex h-min items-center justify-center rounded-xs px-1 py-0.5 text-right leading-[1.1] tracking-[0.01em] whitespace-nowrap"
					>
						{tag.label}
					</div>
				{/each}
			</div>
		</div>

		{#if review.albumArt}
			<div class="shrink-0 grow-0">
				<div>
					<img
						src={getImgUrl(review.albumArt)}
						class="overflow-hidden rounded-sm border sm:max-w-lg"
					/>
				</div>
			</div>
		{/if}

		<div class="sm:max-w-2xl">
			<BlockContent value={review.content}></BlockContent>
		</div>
	</div>
</div>

<div class="mt-12 flex justify-between border-t pt-1 lg:mr-12">
	<div>
		{#if review.prevReview}
			<a
				href="/review/{review.prevReview.slug.current}"
				class="tight mt-1 flex flex-col rounded-sm border px-2 py-1"
			>
				<div>
					{review.prevReview.title}
				</div>
				<div class="font-extralight">
					{review.prevReview.artist}
				</div>
			</a>
			<div class="mt-0.5 text-sm">Newer</div>
		{/if}
	</div>
	<div class="text-right">
		{#if review.nextReview}
			<a
				href="/review/{review.nextReview.slug.current}"
				class="mt-1 flex flex-col rounded-sm border px-2 py-1 leading-tight"
			>
				<div>
					{review.nextReview.title}
				</div>
				<div class="font-extralight">
					{review.nextReview.artist}
				</div>
			</a>
			<div class="mt-0.5 text-sm">Older</div>
		{/if}
	</div>
</div>
