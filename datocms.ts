import { GraphQLClient } from "graphql-request";
export function request({ query, variables }: any) {
  const headers = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };
  const client = new GraphQLClient('https://graphql.datocms.com', { headers });
  return client.request(query, variables);
}