import React from 'react';
import {View,Text,useState,StyleSheet,Button,TextInput} from 'react-native';
import {Formik} from 'formik';  

export default function Form({addrev}){
    return(
        <View>
            <Formik
            initialValues={{title: '', body:'',rating:''}}
            onSubmit={(values,actions)=>{
                actions.resetForm();
                addrev(values);
            }}
            >
                {(props)=>(
                <View style={styles.input}>
                    <TextInput placeholder='Review Title' onChangeText={props.handleChange('title')} value={props.values.title}/>
                    <TextInput multiline placeholder='Review Body' onChangeText={props.handleChange('body')} value={props.values.body}/>
                    <TextInput placeholder='Rating' onChangeText={props.handleChange('rating')} value={props.values.rating} keyboardType='numeric'/>
                    <Button title='submit' color='maroon' onPress={props.handleSubmit}/>
                </View>
            )}
            </Formik>
        </View>
    )
}

const styles= StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:6,
        padding:10,
        fontSize:18,
    }
})
