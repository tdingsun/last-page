import { getAllReviews } from '$lib/sanity';
import type { PageLoad } from './$types';
export const load = (async () => {
	const reviews = await getAllReviews();
	return { reviews };
}) satisfies PageLoad;
