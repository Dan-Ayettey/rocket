import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import axios from "axios"
import https from 'https';
import { Text, View } from "react-native";
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from "./screens/CoinList";
import React from "react";





export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  var options = {
    "method": "GET",
    "hostname": "rest.coinapi.io",
    "path": "/v1/exchanges",
    "headers": {'X-CoinAPI-Key': 'A3F8DC48-B0B8-499B-8BF9-8161BF3A8A46'}
  };



/*
  window.fetch('https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history?period_id=1MIN&time_start=2016-01-01T00:00:00',
      options)
      .then(function (response:any) {
        // handle success
        console.log(response);
      })
      .catch(function (error:any) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  /*
  axios.get(options.path, { headers:options.headers, transformResponse: transformResponse })
      .then(function (resp: { data: any; }) {
        console.log(resp)
        return resp.data;
      })
*/


  if (!isLoadingComplete) {
    return null;
  } else {


    return (
      <ApolloProvider client={client}>
        <SafeAreaProvider>

          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </ApolloProvider>

    );
  }
}
