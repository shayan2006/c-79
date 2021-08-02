import * as React from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import firebase from 'firebase'
import db from '../config'

export default class ExchangeScreen extends React.Component {
    constructor(){
        super()
        this.state = {
            itemname:"",
            itemdescription:"",
            userId: firebase.auth().currentUser.email
        }
    }
    createUniqueId(){
       return Math.random().toString(36).substring(7)
    }
    addItem = async (itemname,itemdescription)=>{
       var userId = this.state.userId
       var randomRequestId = this.createUniqueId()
     await db.collection("Exchange_Screen").add({
         itemname : itemname,
         itemdescription : Description,
         userId : userId,
         requestId : randomRequestId
     })
     alert("Item added")
    }

    render(){
        return(
            <View>
                 <TextInput
                 style = {{width:200,height:30,borderWidth:3}}
                 placeholder = {"Item name"}
                 onChangeText = {(text)=>{
                     this.setState({
                         itemname:text
                     })
                 }}
                 value = {this.state.itemname}
                 />

                 <TextInput
                 style = {{width:200,height:30,borderWidth:3}}
                 multiline
                 numberOfLines = {9}
                 placeholder = {"Item description"}
                 onChangeText = {(text)=>{
                     this.setState({
                         itemdescription:text
                     })
                 }}
                 value = {this.state.itemdescription}
                 />

                 <TouchableOpacity
                 style = {{width:200,height:30,borderWidth:3}}
                 onPress={()=>{
                     this.addItem(this.state.itemname,this.state.itemdescription)
                 }}>
                 <Text>AddItem</Text>
                 </TouchableOpacity>
                 
            </View>
        )
    }
}