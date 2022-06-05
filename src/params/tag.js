/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    return param === "video" || param === "installation" || param === "music";
}
