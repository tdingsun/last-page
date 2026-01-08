/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@sanity/client';
import groq from 'groq';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { Image } from '@sanity/types';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2025-12-22' // date of setup
});

//url builder

const builder = createImageUrlBuilder(client);

export function urlFor(source: Image) {
	return builder.image(source);
}

export const getThumbnailImg = (imgRef: Image) => {
	return urlFor(imgRef).width(600).fit('max').url();
};

export const getImgUrl = (imgRef: Image) => {
	return urlFor(imgRef).width(1600).fit('max').url();
};

export async function getSiteInfo(): Promise<any> {
	return await client.fetch(groq`{
        "siteMetadata": *[_id=="siteMetadata"][0]{
            ...,
            favicon{
                ...,
                "url": asset->url
            }
        },
        "homePage": *[_id=="homePage"][0],
    }`);
}

export async function getAllReviews(): Promise<any> {
	return await client.fetch(groq`
        *[_type=="review"] | order(pubDate desc, title asc){
            albumArt,
            artist,
            author,
            authorLink,
            dek,
            format,
            pubDate,
            rating,
            releaseDate,
            slug,
            tags,
            title
        }
    `);
}

export async function getReviewsByTag(tag: string): Promise<any> {
	return await client.fetch(groq`
        *[_type=="review" && "${tag}" in tags[]._key] | order(pubDate desc, title asc){
            albumArt,
            artist,
            author,
            authorLink,
            dek,
            format,
            pubDate,
            rating,
            releaseDate,
            slug,
            tags,
            title
        }
    `);
}

export async function getAllTags(): Promise<any> {
    return await client.fetch(groq`*[_type == "review"].tags[]`)
}

export async function getReviewBySlug(slug: string): Promise<any> {
	return await client.fetch(groq`
        *[_type=="review" && slug.current=="${slug}"][0]{
            ...,
            "nextReview":  *[_type=="review" &&  ^.pubDate > pubDate || (^.pubDate == pubDate && ^.title < title)]| order(pubDate desc, title asc)[0]{
                title,
                slug,
                artist
            },
            "prevReview":  *[_type=="review" && ^.pubDate < pubDate || (^.pubDate == pubDate && ^.title > title)]| order(pubDate asc, title desc)[0]{
                title,
                slug,
                artist
            },
        }
    `);
}

export async function getAboutPage(): Promise<any> {
	return await client.fetch(groq`
        *[_id=="aboutPage"][0]
    `);
}
