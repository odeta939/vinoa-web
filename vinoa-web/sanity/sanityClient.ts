import { createClient } from 'next-sanity';

const client = createClient({
  projectId: '9thjj5x6',
  dataset: 'production',
  apiVersion: '2022-03-25',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export default client;
