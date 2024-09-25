export function getImageUrl(name: any) {

    const baseUrl = 'https://back.rshop6854.xyz'

    // @ts-ignore
    try {

        if (name.includes('http')) {
            return name
        } else {
            return baseUrl + name
        }

        // return new URL(`http://localhost:8080/${name}`, import.meta.url).href
    } catch (e) {
        return baseUrl+'/static/media/test.png'
    }

    // return new `http://localhost:8080/static/${import.meta.url}`
}