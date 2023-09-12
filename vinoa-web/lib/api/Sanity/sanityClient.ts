import { createClient } from "next-sanity";

const client = createClient({
  projectId: "9thjj5x6",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false
});

export default client;