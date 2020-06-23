import  React,{useState}  from 'react';
import { StyleSheet,View,Text,Button,FlatList,TouchableOpacity,Modal } from 'react-native';
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons'
import Form from './form'

export default function Home({navigation}){

    const [rev,setRev] = useState([
        {title:'Not Working',rating:4,body:'Good',key:'1'},
        {title:'Working',rating:4,body:'Bad',key:'2'},
        {title:'Not at all Working',rating:3,body:'Good Bad',key:'3'},
        {title:'Not Working at all',rating:1,body:'Very Good',key:'4'},
    ])
    const [modalOpen,setModal] = useState(false);
    
    const addrev = (reviews)=>{
        reviews.key = Math.random().toString();
        setRev((CurrentRev)=>{
            return [reviews,...CurrentRev];
        })
        setModal(false);
    }

    return(
        <View style={styles.container}>
            <Modal visible={modalOpen} animationType='slide'> 
                <View style={styles.modalcontent}>
                <MaterialIcons name='close' size={24} onPress={()=>setModal(false)} style={styles.modaltoggle}/>
                <Form addrev={addrev}/>
                </View>
            </Modal>
            <MaterialIcons name='add' size={24} onPress={()=>setModal(true)} style={styles.modaltoggle}/>
            <FlatList data={rev}
            renderItem={({item})=>{
                return(
                <TouchableOpacity onPress={()=>(navigation.navigate('Review',item))} style={styles.Opa}>
                    <Card>
                    <Text style={styles.titleText}>{item.title}</Text>
                    </Card>
                    </TouchableOpacity>
                )
            }} />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        padding:24,
    },
    titleText:{
        fontFamily:'Monsterrat-ExtraBold',
        fontSize:20,
        // backgroundColor:'pink',
        padding:10,
    },
    modaltoggle:{
        marginBottom:10,
        borderWidth:1,
        borderRadius:10,
        alignSelf:'center',
        borderColor:'#f2f2f2'
    },
    modalcontent:{
        flex:1,
    }
})