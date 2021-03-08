import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CoinsScreen from '../screens/CoinsScreen';

import { createStackNavigator } from '@react-navigation/stack'
import { TabBarFontIcon, TabBarMaterialCommunityIcons } from "../icons/Icons";
import { CoinDetails } from "../screens/CoinDetails";
import { CoinParamList } from "../types";
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator<CoinParamList>();

// You can explore the built-in icon families and icons on the web at:


export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (

    <BottomTab.Navigator
      initialRouteName="WelcomeScreen"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>

        <BottomTab.Screen
            name="CoinsList"
            component={CoinListNavigator}
            options={{
                tabBarIcon: ({ color }) => <TabBarFontIcon name="coins" color={color} />,
            }}
        />
        <BottomTab.Screen
            name="CoinDetails"
            options={{
                tabBarIcon: ({ color }) => <TabBarMaterialCommunityIcons name="transit-detour" color={color} />,
            }}
            component={CoinDetails}
        />

    </BottomTab.Navigator>

  );
}


// Each tab has its own navigation stack, you can read more about this pattern here:


function CoinListNavigator() {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="CoinsList"
                component={CoinsScreen}
                options={{ headerTitle: 'Rocket|Coin miner' }}

            />
        </Stack.Navigator>



    );
}




