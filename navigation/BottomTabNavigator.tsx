
//import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { CoinDetails } from "../screens/CoinDetails";
import { createAppContainer } from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import { Image } from "react-native";
import { styles } from "../styles/styles";
import { CoinsList } from "../screens/CoinsList";


const BottomTab = createBottomTabNavigator({
    CoinsScreen: {
        screen:  CoinsList,
        navigationOptions: {
            tabBarLabel:"Coins",
            tabBarIcon:({ tintColor }) => <Image style={styles.tabIcon} source={require('../assets/coins-of-dollars-stack_icon-icons.com_56192.png')}/>
        }
    },
    CoinDetails: {
        screen: CoinDetails,
        navigationOptions: {
            tabBarLabel:"CoinDetails",
            tabBarIcon:({ tintColor }) => <Image style={styles.tabIcon} source={require('../assets/transit_detour_icon_137078.png')}/>
        }

    }
});

export  const BottomTabNavigator = createAppContainer(BottomTab);


