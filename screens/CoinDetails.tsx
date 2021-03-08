import * as React from 'react';
import {ScrollView,TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from "../constants/Colors";
import { TabBarIcon } from "../icons/Icons";
import { styles } from "../styles/styles";
import Page from "../chart/chartKit";
import { useEffect, useRef, useState } from "react";

export  function CoinDetails(props: any) {
    const [scrollToView,setScrollToView]=useState('')
    const [text,setText]=useState('')
    let ref=useRef<any>()
    useEffect(()=>{
        setScrollToView(scrollToView)
    },[])
    const {route,navigation} = props
    const {params} = route
    if(params) {

        // flat the objects
        const {coinDetails} = params
        const {CoinInfo, DISPLAY} = coinDetails
        const {FullName} = CoinInfo
        const {USD} = DISPLAY
        const {PRICE, OPENDAY, HIGHDAY, LOWDAY, OPEN24HOUR} = USD
        return (
            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.searchContainer}>
                        <TextInput style={styles.searchInput} ref={ref} value={text} onChangeText={(text => setText(text))}/>

                        <Text  onPress={press=>{
                         navigation.replace('CoinsList',{coinName:text,isClickedCoinDetails:true})
                         navigation.goBack('CoinsList')
                         setScrollToView(text)
                        }}><TabBarIcon name="search" color={Colors.light.tint} /></Text>
                    </View>
                    <View>
                        <Text style={[styles.text, styles.title]}>{FullName}</Text>
                    </View>

                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
                    </View>
                    <Page display={DISPLAY.USD} bottom={24} category={DISPLAY.USD} fontSize={8} isLine={true}
                          isTick={true} left={38} value={DISPLAY.USD} height={320}/>
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

        );
    }else {
        return  (
            <View style={styles.notFoundContainer}>
                <Text style={styles.notFoundTitle}>This coin doesn't exist.</Text>
                <TouchableOpacity onPress={() => navigation.goBack('CoinsList')} style={styles.link}>
                    <Text style={styles.linkText}>Go to home and view a coin!</Text>
                </TouchableOpacity>
            </View>)
    }
}
