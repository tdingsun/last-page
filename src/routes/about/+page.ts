import { getAboutPage } from '$lib/sanity';
import type { PageLoad } from './$types';
export const load = (async () => {
    const aboutPage = await getAboutPage();
    return { aboutPage };
}) satisfies PageLoad;
