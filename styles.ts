import { Dimensions, StyleSheet } from "react-native";
import Colors from "./constants/Colors";

export const styles = StyleSheet.create({

    active: {
        backgroundColor: 'rgba(255,255,255,0.05)'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    right: {

        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        justifyContent:'space-evenly'
    },
    text: {
        margin:6,
        color: Colors.light.tint,
        fontSize: 24,
        fontWeight: '500'
    },
    name: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 16,
        fontWeight: '300'
    },
    container: {
        flex: 1,
        justifyContent:'space-evenly',
        width:Dimensions.get('window').width,
        backgroundColor: '#fff',
        borderBottomWidth:1,
        borderBottomColor:Colors.dark.tabIconDefault
    },
    developmentModeText: {
        marginBottom: 20,
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: 'center',
    }, contentContainerStyle:{
        alignItems:'flex-start'
    },
    column: {
        flexDirection:'column'
    }


});
