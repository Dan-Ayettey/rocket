import * as React from 'react';
import {TouchableOpacity } from 'react-native';
import { Text, View, } from '../components/Themed';
import { styles } from "../styles/styles";


// Not found hook
export  function NotFound(props: any) {
  return (

        <View style={styles.notFoundContainer}>
            <Text style={styles.notFoundTitle}>This coin doesn't exist.</Text>

            <TouchableOpacity  onPress={(onPress) => onPress && props.navigation.goBack()} style={styles.link}>
                <Text style={styles.linkText}>Go to home and view a coin!</Text>
            </TouchableOpacity>
        </View>

  );
}

