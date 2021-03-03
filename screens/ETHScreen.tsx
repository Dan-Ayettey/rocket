import * as React from 'react';
import { StyleSheet } from 'react-native';

import {CoinList} from './CoinList';
import { Text, View } from '../components/Themed';
import { useQuery } from "@apollo/react-hooks";
import { FETCH_COIN_LIST } from "../GraphQ";

export default function ETHScreen() {
  const { loading, data } = useQuery(FETCH_COIN_LIST)
  const coinList=data !=undefined ? {data:data.coinsList.Data} :{loading:loading}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ETH Coins</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <CoinList data={coinList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    width:'100%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
