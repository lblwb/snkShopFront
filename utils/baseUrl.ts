// @ts-ignore


export function getBaseUrl(): string {

    // @ts-ignore
    console.log(import.meta.env);

    // @ts-ignore
    if (import.meta.env.DEV) {
        // @ts-ignore

        // return import.meta.env.API_BASEURL_DEV

        return "http://localhost:8000"

    } else {
        // @ts-ignore
        return "https://back.rshop6854.xyz"
    }
}