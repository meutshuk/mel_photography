export const GET_IMAGES = `
  *[_type == "imageAsset"] | order(title asc){
    _id,
    title,
    location,
    description,
    "url": image.asset->url
  }
`;
