export function getImageUrl(name: any) {
    // @ts-ignore
    try {

        if (name.includes('http')) {
            return name
        } else {
            return 'http://localhost:8000/' + name
        }

        // return new URL(`http://localhost:8080/${name}`, import.meta.url).href
    } catch (e) {
        return 'http://localhost:8000/static/media/test.png'
    }

    // return new `http://localhost:8080/static/${import.meta.url}`
}