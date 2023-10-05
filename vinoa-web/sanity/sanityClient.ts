import { createClient } from 'next-sanity';
import {env} from 'process';

const client = createClient({
  projectId: '9thjj5x6',
  dataset: 'production',
  apiVersion: '2022-03-25',
  token: env.SANITY_API_TOKEN,
  useCdn: false,
});

console.log(env.SANITY_API_TOKEN);
export default client;