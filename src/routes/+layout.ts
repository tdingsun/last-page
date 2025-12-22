import { getSiteInfo } from '$lib/sanity';
import type { LayoutLoad } from './$types';
export const load = (async () => {
	const { siteMetadata, homePage } = await getSiteInfo();
	return { siteMetadata, homePage };
}) satisfies LayoutLoad;
