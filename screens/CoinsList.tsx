import {FlatList, TouchableOpacity} from 'react-native';
import React, { useEffect,useState } from "react";
import { Text, View } from '../components/Themed';
import { RestLink } from 'apollo-link-rest';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { styles } from "../styles/styles";
import Page from "../chart/chartKit";
import { CoinDetails } from "./CoinDetails";
//Environment key


/*
 Rest link config for GraphQ
 Need API key
 */
const restLink = new RestLink({
  uri: 'https://min-api.cryptocompare.com',
  headers: {
    Authorization:process.env.API_KEY+''
  }
})


const findKey:Array<any>=[]
// Appollo client  option
export const client = new ApolloClient({
  link:restLink,
  cache: new InMemoryCache(),
});



/*
@ListItem()
 List item hook
 */
function ListItem(props: { coin: any; onPress: any; navigator:any,index:number}) {

  const { coin, onPress,navigator} = props
  const { CoinInfo, DISPLAY } = coin
  const { FullName, Name } = CoinInfo

  return (
      <View style={{margin:0}}>

        <TouchableOpacity
            style={styles.container}
            onLongPress={() => onPress && navigator.navigation.navigate('CoinDetails',{coinDetails:{CoinInfo,DISPLAY}})}>
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
            <Page  display={DISPLAY.USD} bottom={20} category={DISPLAY.USD} fontSize={0} isLine={false} isTick={false} left={2} value={DISPLAY.USD} height={80}/>

          </View>

          <View style={styles.row}>
            <Text style={[styles.text, styles.name]} numberOfLines={1}>
              {FullName}
            </Text>
          </View>

            <TouchableOpacity style={styles.right} onPress={() => onPress && props.navigator.navigation.navigate('CoinDetails',{coinDetails:{CoinInfo,DISPLAY}})}>
              <Text style={[styles.text,styles.fontSize]}>View More</Text>
            </TouchableOpacity>

        </TouchableOpacity>


      </View>

  )
}

/*
Coin list hook
 */
export  function CoinsList(props:any) {

 const {navigator,data}=props
 const {coinList}=data
 const {route}=navigator
 const params=route.params? route.params:''
 const [scrollIndex,setScrollIndex]=useState(0)
 const scrollTo=React.useRef<any>()
 const [routeSearch,setRouteSearch]=useState('RTC')



  useEffect(()=> {

      setRouteSearch(String(params.coinName).toUpperCase())
          const find = findKey.map((find, index) => {
                  let indexTemp=0;
                  if (find.hasOwnProperty('CoinInfo')) {

                      if (find.CoinInfo.Name === props.scrollTo.trim().toUpperCase() ||
                          find.CoinInfo.FullName.toUpperCase() === props.scrollTo.toUpperCase() ||
                          find.CoinInfo.FullName.toUpperCase() === routeSearch.trim().toUpperCase() ||
                          find.CoinInfo.Name === routeSearch.trim().toUpperCase()) {
                          indexTemp=index
                          return indexTemp
                      }else if(findKey.length-1==index){
                        return indexTemp
                      }
                  }
              }
          )

          const index = find.filter(value => value != undefined)
          setScrollIndex(isNaN(Number(index[0])) ?  0:Number(index[0]) )

      //Ref scroll to view
      scrollTo.current !=undefined ? scrollTo.current.scrollToIndex({ animated: true, index: scrollIndex}):''


  },)


  return (

      <View style={styles.container}>

        {coinList.loading && !coinList.data?  <Text style={{alignItems:"center",alignSelf:'center'}}>loading wait </Text>:
            <FlatList data={coinList.data}
                      ref={scrollTo}
                      initialScrollIndex={0}
                      onScrollToIndexFailed={info => {
                          const wait = new Promise(resolve => setTimeout(resolve, 500));
                          wait.then(() => {
                              scrollTo.current?.scrollToIndex({ index: info.index, animated: true });
                          });
                      }}
                      contentContainerStyle={styles.contentContainerStyle}
                      showsHorizontalScrollIndicator={false}
                      showsVerticalScrollIndicator={false}
                      scrollEnabled={true}
                      renderItem={({item,index})=>{
                        if(coinList.data.length>findKey.length){
                          findKey.push(item)
                        }

                         return <ListItem coin={item} index={index}
                                    navigator={props.navigator} onPress={(onPress: (arg0: any) => any)=> onPress && onPress(item)}/>
                      }}
                      keyExtractor={item => item.CoinInfo.Id.toString()}
            />




        }
      </View>


  );


}




