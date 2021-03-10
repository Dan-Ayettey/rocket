import { createStackNavigator } from 'react-navigation-stack';
import * as React from 'react';
import { BottomTabNavigator } from './BottomTabNavigator';
import { createAppContainer} from "react-navigation";

// A root stack navigator is often used for displaying modals on top of all other content
 const Root = createStackNavigator({
    Root: {
        screen: BottomTabNavigator,
        navigationOptions: {
            headerShown: false,
        }
    },

});
export  const RootNavigator= createAppContainer(Root);

