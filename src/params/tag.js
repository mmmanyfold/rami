/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(param) {
    const tag = param.toLowerCase();
    return tag === "video" || tag === "installation" || tag === "music";
}
