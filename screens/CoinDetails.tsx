import * as React from 'react';
import { Image, Keyboard, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { styles } from "../styles/styles";
import {Page} from "../chart/chartKit";
import { NotFound } from "./NotFound";

//Show coin details
export  function CoinDetails(props: any) {


    const {navigation} = props
    const {state}=navigation
    const {params} = state

    if(params) {
        // flatting  objects
        const {coinDetails} = params
        const {CoinInfo, DISPLAY} = coinDetails
        const {FullName} = CoinInfo
        const {USD} = DISPLAY
        const {PRICE, OPENDAY, HIGHDAY, LOWDAY, OPEN24HOUR} = USD

       // render component
        return (
            <View style={styles.container}>
                <View style={styles.topBarContainer}>
                    <Text style={{fontSize:20,margin:10}}>  Rocket|Coin Miner</Text>
                </View>

            <ScrollView>
                <View >

                    <View>
                        <Text style={[styles.text, styles.title]}>{FullName}</Text>
                    </View>

                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
                    </View>
                    <Page display={DISPLAY.USD} height={320}/>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <Text style={[styles.text, styles.fontSize]} numberOfLines={1}>
                                {Object.keys(DISPLAY.USD)[0]}
                            </Text>

                            <View style={styles.right}>
                                <Text style={[styles.text, styles.fontSize]} numberOfLines={1}>
                                    {PRICE}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <Text style={[styles.text, styles.fontSize]} numberOfLines={1}>
                                {Object.keys(DISPLAY.USD)[1]}
                            </Text>
                            <View style={styles.right}>
                                <Text style={[styles.text, styles.fontSize]} numberOfLines={1}>
                                    {OPENDAY}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <Text style={[styles.text, styles.fontSize]} numberOfLines={1}>
                                {Object.keys(DISPLAY.USD)[2]}
                            </Text>
                            <View style={styles.right}>
                                <Text style={[styles.text, styles.fontSize]} numberOfLines={1}>
                                    {HIGHDAY}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <Text style={[styles.text, styles.fontSize]} numberOfLines={1}>
                                {Object.keys(DISPLAY.USD)[3]}
                            </Text>
                            <View style={styles.right}>
                                <Text style={[styles.text, styles.fontSize]} numberOfLines={1}>
                                    {LOWDAY}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <Text style={[styles.text, styles.fontSize]} numberOfLines={1}>
                                {Object.keys(DISPLAY.USD)[4]}
                            </Text>
                            <View style={styles.right}>
                                <Text style={[styles.text, styles.fontSize]} numberOfLines={1}>
                                    {OPEN24HOUR}
                                </Text>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
            </View>

        );
    }else {   return  (< NotFound navigation={navigation} />) }


}
