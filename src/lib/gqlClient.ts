import { GraphQLClient } from "graphql-request"

const graphQLClient = new GraphQLClient(
    process.env.NODE_ENV === "development" ? `http://localhost:4000/graphql`: `/graphql`,
    {
        headers: {"x-Client-ID": ""}
    }
)

export default graphQLClient