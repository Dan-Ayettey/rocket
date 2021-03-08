import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../types';
import { styles } from "../styles/styles";

// welcome screen hook
export  function WelcomeScreen({navigation}: StackScreenProps<RootStackParamList, 'Welcome'>) {
    return (
        <View style={styles.WelcomeScreenContainer}>
            <Text style={styles.title}>Hey welcome to rocket coins</Text>
            <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
                <Text style={styles.linkText}>Home screen!</Text>
            </TouchableOpacity>
        </View>
    );
}

