import { getAllTags } from '$lib/sanity';
import type { PageLoad } from './$types';
export const load = (async () => {
	const tags = await getAllTags();
	let tagFreq = {};
	tags.forEach((tagObj) => {
		if (tagFreq[tagObj._key]) {
			tagFreq[tagObj._key].count += 1;
		} else {
			tagFreq[tagObj._key] = { count: 1, label: tagObj.label, key: tagObj._key };
		}
	});
	const tagFreqArr = [];
	for (const tag in tagFreq) {
		tagFreqArr.push(tagFreq[tag]);
	}
    tagFreqArr.sort(function(a, b) {
        if (a.count === b.count){
            if(a.key < b.key){
                return -1;
            } if (a.key > b.key) {
                return 1;
            }
            return 0
        } else {
            return b.count - a.count
        }
    })
	console.log(tagFreqArr);
	return { tagFreqArr };
}) satisfies PageLoad;
