import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from "./graph/GraphQ";
import { RootNavigator } from "./navigation";




export default function App() {
  return (
      <ApolloProvider client={client}>
        <SafeAreaProvider>

            <RootNavigator/>
          <StatusBar />
        </SafeAreaProvider>
      </ApolloProvider>);
}
