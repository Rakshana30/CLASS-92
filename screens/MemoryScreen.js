import React , {Component} from 'react';
import {StyleSheet ,View ,Text ,TouchableOpacity ,KeyboardAvoidingView ,Alert ,TextInput} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class MemoryScreen extends Component{
    constructor(){
        super()

        this.state={
            userId : firebase.auth().currentUser.email,
            date : "",
            myDay :"",
            title : ""
        }
    }

render(){
    return(
        <View style = {{flex:1}}>
            <KeyboardAvoidingView style = {styles.keyboardStyle}>
            <TextInput style = {styles.farmTextInput}
                placeholder = {"Create title for your special day"}
                onChangeText = {(text)=>{
                    this.setState({title:text})
                }}
                value = {this.state.title}
            />

<TextInput style = {styles.farmTextInput}
                placeholder = {"Enter date in the format dd-mm-yyyy"}
                onChangeText = {(text)=>{
                    this.setState({date:text})
                }}
                value = {this.state.date}
            />

<TextInput style = {[styles.farmTextInput,{height:300}]}
                multiline
                numberOfLines = {10}
               placeholder = {"Write about your day"}
                onChangeText = {(text)=>{
                    this.setState({myDay:text})
                }}
                value = {this.state.myDay}
            />

        <TouchableOpacity style = {styles.button}
        onPress = {()=>{
            this.addMemory(this.state.title,this.state.myDay)}}>
                
        <Text>Add this memory</Text>
                </TouchableOpacity>    
            </KeyboardAvoidingView>
        </View>
    )
}
}
