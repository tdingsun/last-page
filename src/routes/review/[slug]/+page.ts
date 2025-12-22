import { getReviewBySlug } from '$lib/sanity';
import type { PageLoad } from './$types';
export const load = (async ({ params }) => {
	const review = await getReviewBySlug(params.slug);
	console.log(review);

	return { review};
}) satisfies PageLoad;
