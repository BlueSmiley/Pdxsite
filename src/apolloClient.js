import {
    InMemoryCache,
    ApolloClient,
    HttpLink
} from "@apollo/client";

let apolloClient

function  createApolloClient() {
    return new ApolloClient({
        link: new HttpLink({
            uri: "/api/graphql"
        }),
        cache: new InMemoryCache(),
    })
}

export function initializeApollo() {
    apolloClient = apolloClient ?? createApolloClient()
    return apolloClient;
}

export function useApollo() {
    return initializeApollo();
}
