import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const Task =(props)=>{
return (
        <View style={styles.container}> 
            <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>
                {props.text}
            </Text>
            </View>
            <View style={styles.circular}></View>
         </View>

)}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        margin:12,
        borderWidth:3,
        padding:15,
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:12,
        
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'#55BCF6',
        opacity:0.4,
        borderRadius:5,
        marginRight:6,
    },
    itemText:{
        maxHeight:'80%',
        fontSize:15,
        color:'black',

    },
    circular:{
        width:12,
        height:12,
        borderColor: '#55BCF6',
        borderWidth:2,
        borderRadius:5,
        
    },


});

export default Task;