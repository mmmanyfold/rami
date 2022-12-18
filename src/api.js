const baseUrl = "https://rami-notion-api.fly.dev/public/"

export async function loadData(fetch, endpoint) {
    try {
        const res = await fetch(baseUrl + endpoint);
        const json = await res.json();
        return { data: json };
    } catch (e) {
        return { error: e};
    }
}
