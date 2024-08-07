export const GET_IMAGES = `
  *[_type == "imageAsset"] | order(title asc){
    _id,
    title,
    location,
    description,
    "url": image.asset->url
  }
`;


export const GET_TITLE_IMAGES = `
  *[_type == "titleImage"] | order(title asc){
    _id,
    title,
    "slug": slug.current
  }
`

export const GET_IMAGES_BY_SLUG = `
  *[_type == "titleImage" && slug.current == $slug][0]{
    title,
    description,
    images[]{
      _key,
      alt,
      "url": asset->url
    }
  }
`