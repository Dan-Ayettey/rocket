import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import BTCScreen from '../screens/BTCScreen';
import ETHScreen from '../screens/ETHScreen';
import { BottomTabParamList, BTCParamList, ETHParamList,CoinParamList} from '../types';
import {  Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TabBarFontIcon,TabBarIcon } from "../Icons";



const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (

    <BottomTab.Navigator
      initialRouteName="BTC"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>

        <BottomTab.Screen
            name="CoinList"
            component={CoinListNavigator}
            options={{
                tabBarIcon: ({ color }) => <TabBarFontIcon name="coins" color={color} />,
            }}
        />
      <BottomTab.Screen
        name="BTC"
        component={BTCNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="logo-bitcoin" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="ETH"
        component={ETHNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarFontIcon name="sketch" color={color} />,
        }}
      />
    </BottomTab.Navigator>

  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const BTCStack = createStackNavigator<BTCParamList>();

function BTCNavigator() {
  return (

    <BTCStack.Navigator>
      <BTCStack.Screen
        name="BTC"
        component={BTCScreen}
        options={{ headerTitle: 'Coin|miner' }}
      />
    </BTCStack.Navigator>



  );
}
const CoinListStack = createStackNavigator<CoinParamList>();

function CoinListNavigator() {
    return (

        <CoinListStack.Navigator>
            <CoinListStack.Screen
                name="CoinList"
                component={BTCScreen}
                options={{ headerTitle: 'Coin|miner' }}
            />
        </CoinListStack.Navigator>



    );
}

const ETHStack = createStackNavigator<ETHParamList>();

function ETHNavigator() {
  return (
    <ETHStack.Navigator>
      <ETHStack.Screen
        name="ETH"
        component={ETHScreen}
        options={{ headerTitle: 'Coin|miner' }}
      />
    </ETHStack.Navigator>
  );
}
