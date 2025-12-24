import { getReviewBySlug } from '$lib/sanity';
import type { PageLoad } from './$types';
export const load = (async ({ params }) => {
	const review = await getReviewBySlug(params.slug);
	return { review };
}) satisfies PageLoad;
