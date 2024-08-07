interface ImageAssets {
    _id: string,
    title: string,
    location: string,
    description: string,
    url: string
}

interface TitleImages {
    _id: string,
    title: string,
    slug: string
}

interface ImageBySlug {
    title: string,
    description: string,
    images: {
        _key: string,
        alt: string,
        url: string
    }[]
}