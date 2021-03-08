import * as React from 'react';
import {TextInput} from 'react-native';
import {CoinsList} from './CoinsList';
import { Text, View, } from '../components/Themed';
import { FETCH_COIN_LIST } from "../graph/GraphQ";
import Colors from "../constants/Colors";
import { TabBarIcon } from "../icons/Icons";
import { styles } from "../styles/styles";
import { useEffect, useRef, useState } from "react";
import { UseFetchCoins } from "../facades/UseFetchCoins";

// Coin  screen, use query is initialize this hook
export default function CoinsScreen(navigation: any) {
 const gq=new UseFetchCoins()
 const { loading, data } = gq.useFetchCoins(FETCH_COIN_LIST)
 const coinList=data !=undefined ? {data:data.coinsList.Data} :{loading:loading}
 const [isClickedCoinScreen,setIsClickedCoinScreen]=useState(false)
 const [scrollToView,setScrollToView]=useState('')
    const [text,setText]=useState('')
    let ref=useRef<any>()
    useEffect(()=>{
        setScrollToView(scrollToView)
    },[])

  return (
    <View style={styles.container}>
        <View style={styles.searchContainer}>
            <TextInput style={styles.searchInput} ref={ref} value={text} onChangeText={(text => setText(text))}/>

          <Text  onPress={press=>{
              setScrollToView(text)
              setIsClickedCoinScreen(true)
          }}><TabBarIcon name="search" color={Colors.light.tint} /></Text>

        </View>
        <View>
            <Text style={[styles.text,styles.title]}>Coins</Text>
        </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <CoinsList navigator={navigation}  data={{coinList,isClickedCoinScreen}} scrollTo={scrollToView} height={200}/>
    </View>
  );
}

