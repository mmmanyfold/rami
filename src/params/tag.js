/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    // TODO: check from list of available tags
    return param === "video" || param === "installation" || param === "music";
}
