import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from '../components/StyledText';
import { Text, View } from '../components/Themed';
import { RestLink } from 'apollo-link-rest';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {useQuery} from "@apollo/react-hooks";
import { inspect } from "util";
import { styles } from "../styles";
import Page from "../chartKit";



const restLink = new RestLink({
  uri: 'https://min-api.cryptocompare.com',
  headers: {
    Authorization:
        'd251970548f7321b548d3fb61d58c1a456974ea02ba41437fc9bf711f4e89782'
  }
})

export const client = new ApolloClient({
  link:restLink,
  cache: new InMemoryCache(),
});



function ListItem(props: { coin: any; onPress: any; }) {
  const { coin, onPress } = props
  const { CoinInfo, DISPLAY } = coin
  console.log(coin)
  const { FullName, Name } = CoinInfo

  return (
      <View style={{margin:0}}>

        <TouchableOpacity
            style={styles.container}
            onPress={() => onPress && onPress(coin)}>
          <View style={styles.column}>
            <View style={styles.row}>
              <Text style={styles.text} numberOfLines={1}>
                {Name}
              </Text>
              <View style={styles.right}>
                <Text style={styles.text} numberOfLines={1}>
                  {DISPLAY.USD.PRICE}
                </Text>
              </View>
            </View>
            <Page display={DISPLAY.USD}/>
          </View>

          <View style={styles.row}>
            <Text style={[styles.text, styles.name]} numberOfLines={1}>
              {FullName}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

  )
}

export  function CoinList(props: { data?: any; navigation?: any; }) {

  if(props.data.data){
    console.log(props.data.data)
  }
  const {navigation}=props
      /*
  <View style={styles.getStartedContainer}>
      <View style={styles.helpContainer}>
      <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
      <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
      Tap here if your app doesn't automatically update after making changes
  </Text>
  </TouchableOpacity>
  </View>
  </View>
  <FlatList data={data.coinsList.data} renderItem={(item)=><Text>item</Text>}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
      />
  */

  return (
      <View style={styles.container}>

        {props.data.loading && !props.data.data?  <Text>loading wait </Text>:

            <FlatList data={props.data.data}

                      contentContainerStyle={styles.contentContainerStyle}
                      showsHorizontalScrollIndicator={false}
                      showsVerticalScrollIndicator={false}
                      scrollEnabled={true}
                      renderItem={(item: any)=><ListItem
                          coin={item.item}
                          onPress={() => navigation.navigate('Detail', { coin: item })}
                      />}
                      keyExtractor={item => item.CoinInfo.Id.toString()}
            />

        }
      </View>


  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}


