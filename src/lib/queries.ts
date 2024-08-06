export const GET_IMAGES = `
  *[_type == "imageAsset"]{
    _id,
    title,
    location,
    description,
    "url": image.asset->url
  }
`;
