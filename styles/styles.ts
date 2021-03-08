import { Dimensions, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export const styles = StyleSheet.create({

    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },

   coin: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        padding:4,
        borderRadius:4,
        borderColor:Colors.light.tint,
        borderWidth:1
    }
,
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf:'center',
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
        marginTop: 22
    },
    modalView: {
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        zIndex:1100,

        position:'absolute',
        bottom:0,
        backgroundColor: "white",
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width,
        left:10,
        right:0,
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    active: {
        backgroundColor: 'rgba(255,255,255,0.05)'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    fontSize:{
       fontSize:13,
    },
    right: {
        color:"#2196F3",
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
        justifyContent:'space-evenly'
    },
    text: {
        margin:10,
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
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
    notFoundContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    notFoundTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    left: {
        flex: 20,
        alignSelf: 'flex-end',

        alignItems: 'flex-end',
        justifyContent:'space-evenly'
    },
    center: {
        flex: 1,
        alignSelf: 'center',

        alignItems: 'center',
        justifyContent:'space-evenly'
    },
    searchContainer:{
     flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        margin:10,padding:4,borderRadius:4
        ,borderColor:Colors.light.tint,borderWidth:1
    },
    searchInput: {
        alignSelf:'center',
     width:300,height:30,padding:4
    },
    WelcomeScreenContainer: {

                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,

    }


});
