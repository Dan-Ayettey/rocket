import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import {CoinList} from './CoinList';
import { Text, View } from '../components/Themed';
import { useQuery } from "@apollo/react-hooks";
import { FETCH_COIN_LIST } from "../GraphQ";
import Colors from "../constants/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TabBarIcon } from "../Icons";

export default function BTCScreen(props: { Navigation: any; }) {
  const {Navigation}=props
  const { loading, data } = useQuery(FETCH_COIN_LIST)
 const coinList=data !=undefined ? {data:data.coinsList.Data} :{loading:loading}

  return (
    <View style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',width:310,height:38,margin:10,padding:4,borderRadius:4,borderColor:Colors.light.tint,borderWidth:1}}>
            <TextInput style={{width:300,height:30,padding:4}}/>
            <TouchableOpacity style={{margin:4}}>
                <Text ><TabBarIcon name="search" color={Colors.light.tint} /></Text>
            </TouchableOpacity>
        </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <CoinList data={coinList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
