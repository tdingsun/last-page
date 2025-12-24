import { getReviewsByTag } from '$lib/sanity';
import type { PageLoad } from './$types';
export const load = (async ({ params }) => {
    const reviews = await getReviewsByTag(params.slug);
    console.log(reviews);
    const tagObj = reviews[0].tags.find((tag) => tag._key === params.slug);
    const tagLabel = tagObj.label
    return { reviews, tagLabel };
}) satisfies PageLoad;
