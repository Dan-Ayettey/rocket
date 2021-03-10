import { FlatList, Image, Keyboard, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useRef, useState } from "react";
import { Text, View } from '../components/Themed';
import { styles } from "../styles/styles";
import {Page} from "../chart/chartKit";
import { CoinDetails } from "./CoinDetails";
import { UseFetchCoins } from "../facades/UseFetchCoins";
import { FETCH_COIN_LIST } from "../graph/GraphQ";
/*
@ListItem()
 List item hook
 */
const ListItem=(props: { coin: any; onPress: any; navigator:any,index:number})=> {

    const { coin, onPress,navigator} = props
    const { CoinInfo, DISPLAY } = coin
    const { FullName, Name } = CoinInfo
    const {navigate}=navigator
    return (
        <View>

            <TouchableOpacity
                style={styles.container}
                onLongPress={() => onPress && navigate('CoinDetails',{coinDetails:{CoinInfo,DISPLAY}})}>
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
                    <Page  display={DISPLAY.USD}  height={100}/>

                </View>

                <View style={styles.row}>
                    <Text style={[styles.text, styles.name]} numberOfLines={1}>
                        {FullName}
                    </Text>
                </View>

                <TouchableOpacity style={styles.right} onPress={() => onPress && navigate('CoinDetails',{coinDetails:{CoinInfo,DISPLAY}})}>
                    <Text style={[styles.text,styles.fontSize]}>View More</Text>
                </TouchableOpacity>

            </TouchableOpacity>


        </View>

    )
}

/*
Show  coin list hook
 */

export  function CoinsList(props:any) {

    const gq=new UseFetchCoins()
    const { loading, data } = gq.useFetchCoins(FETCH_COIN_LIST)
    const coinList=data !=undefined ? {data:data.coinsList.Data} :{loading:loading}
    const [isLoading,setIsLoading]=useState(false)
    const [text,setText]=useState(' ')
    const {navigation}=props
    const scrollTo=React.useRef<any>()
    const ref=useRef<any>()

    //event triggered search function
    const search=()=>{

        coinList.data.map((find:any, index:number) =>{
            if(find.CoinInfo.Name.toUpperCase() === text.trim().toUpperCase() ||
                find.CoinInfo.FullName.toUpperCase() === text.trim().toUpperCase()){
                scrollTo.current.scrollToIndex({ animated: true, index: index})
                setText('')
            }else {
                setIsLoading(true)
            }
        })
        Keyboard.dismiss()
    }

    useEffect(()=> {
        if(isLoading){
            setIsLoading(false)
        }
    },)

    return (
        <View style={styles.container}>
            <View style={styles.topBarContainer}>
                <Text style={{fontSize:20,margin:10}}>  Rocket|Coin Miner</Text>
            </View>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput}  ref={ref} value={text} onChangeText={(text => setText(text))}/>
                <TouchableOpacity  onPress={()=>{
                    search()
                }}>
                    <Text  style={styles.searchIconContainer} >
                        <Image style={styles.searchIcon} source={require('../assets/searchmagnifierinterfacesymbol1_79893.png')}/></Text>
                </TouchableOpacity>
            </View>
            <View style={{borderBottomColor:'lightgray',borderBottomWidth:1}}>
                <Text style={[styles.text,styles.title]}>Coins  {isLoading? <Text style={{marginLeft:200,fontWeight:"100",fontSize:12}}>loading wait </Text>:null}</Text>
            </View>

            <View style={{height:400}}>
            {coinList.loading && !coinList.data?  <Text style={{alignItems:"center",alignSelf:'center'}}>loading wait </Text>:
                <FlatList data={coinList.data}
                          ref={scrollTo}
                          refreshing={true}
                          onScrollToIndexFailed={info => {
                              scrollTo.current?.scrollToIndex({ index: info.index, animated: true });
                          }}
                          keyExtractor={(item) => item.CoinInfo.Id.toString()}
                          renderItem={({item,index})=><ListItem coin={item} index={index}
                            navigator={navigation} onPress={(onPress: (arg0: any) => any)=> onPress && onPress(item)}/>}/>

            }
        </View>
        </View>
    );
}


