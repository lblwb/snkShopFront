export function getImageUrl(name: any) {
    // @ts-ignore
    return new URL(`/assets/images/${name}`, import.meta.url).href
}