import {
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { ClientError } from "graphql-request";
import graphQLClient from "../../lib/gqlClient";

export default function useGQLQuery<
  GQLQueryData,
  Variables = unknown,
  QueryData = GQLQueryData
>(
  key: QueryKey,
  query: string,
  variables?: Variables,
  options?: Omit<
    UseQueryOptions<QueryData, ClientError, GQLQueryData, QueryKey>,
    "queryKey" | "queryFn"
  >
): UseQueryResult<GQLQueryData, ClientError> {
  return useQuery(key, () => graphQLClient.request(query, variables), {
    ...options,
  });
}
