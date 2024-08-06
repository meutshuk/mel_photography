import { GraphQLClient } from 'graphql-request';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: 'iwi8k3qo', // Replace with your project ID
    dataset: 'production',     // Replace with your dataset name
    apiVersion: '2022-03-07',   // Use a current date as the API version
    useCdn: true,               // `false` if you want to ensure fresh data
});
const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);

export default client;
