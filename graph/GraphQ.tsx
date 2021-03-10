import gql from "graphql-tag";
import React from "react";
import { RestLink } from "apollo-link-rest";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

//Environment key


/*
 Rest link config for GraphQ
 Need API key
 */
const restLink = new RestLink({
    uri: 'https://min-api.cryptocompare.com',
    headers: {
        Authorization:''
    }
})
// Appollo client  option
export const client = new ApolloClient({
    link:restLink,
    cache: new InMemoryCache(),
});
export const FETCH_COIN_LIST = gql`
    query FetchCoinsList {
        coinsList
        @rest(type: "ListPayload", path: "/data/top/totalvolfull?tsym=USD") {
            Data @type(name: "DataPayload") {
                CoinInfo @type(name: "CoinInfoPayload") {
                    Id
                    Name
                    FullName
                }
                DISPLAY @type(name: "DisplayPayload") {
                    USD @type(name: "USDPayLoad") {
                        PRICE
                        OPENDAY
                        HIGHDAY
                        LOWDAY
                        OPEN24HOUR
                    }
                }
            }
        }
    }`
