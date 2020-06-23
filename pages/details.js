import  React, { useState }  from 'react';
import { StyleSheet,View,Text,Button,Image } from 'react-native';
import Card from '../shared/card'
import {raticons} from '../styles/global'

export default function Detail({navigation}){
    const rating = navigation.getParam('rating');
    return(
        <View style={styles.container}>
            <Card>
            <Text>{navigation.getParam('title')}</Text>
            <Text>{navigation.getParam('body')}</Text>
            <View style={styles.rating}>
                <Text>GameZone Rating: </Text>
                <Image source={raticons.ratings[rating]} />
            </View>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        padding:24,
    },
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:16,
        borderTopColor:'#eee',
        borderTopWidth:1,
        marginTop:2,
    }
})
