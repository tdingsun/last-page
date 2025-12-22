import { getReviewBySlug } from '$lib/sanity';
import type { PageLoad } from './$types';
export const load = (async ({ params }) => {
	const { review, nextReview, previousReview } = await getReviewBySlug(params.slug);
	return { review, nextReview, previousReview };
}) satisfies PageLoad;
