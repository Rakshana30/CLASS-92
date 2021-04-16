import React, {Component} from 'react';
import {StyleSheet ,Text ,View ,TouchableOpacity ,Alert ,TextInput ,KeyboardAvoidingView ,Image} from 'react-native';
import db from "../config";
import firebase from 'firebase';

export default class WelcomeScreen extends Component{

constructor(){
    super()

    this.state={
        emailId : '',
        password : ''
    }
}


login=async(email,password)=>{
    if (email && password){
      try{
        const response = await firebase.auth().signInWithEmailAndPassword(email,password)
        if(response){
          this.props.navigation.navigate('Transaction')
        }
      }
      catch(error){
        switch (error.code) {
          case 'auth/user-not-found':
            Alert.alert("user dosen't exists")
            console.log("doesn't exist")
            break
          case 'auth/invalid-email':
            Alert.alert('incorrect email or password')
            console.log('invaild')
            break
        }
      }
    }
    else{
        Alert.alert('enter email and password');
    }
  }


    render(){
    return(
        <KeyboardAvoidingView style = {{alignItems : 'center' , marginTop : 20}}>
        <View>
            <Image
            source={
                require("../assets/logo.png")}
                style = {{width : 200 , height : 200 }}
            />
        <Text style ={{textAlign : 'center' , fontSize : 30}}>Personal Diary</Text>
        </View>

            <View>
                <TextInput
                style = {{width : 300 , height : 40 , borderWidth:1.5 , fontSize : 20 , margin :10 , paddingLft : 10}}
                placeholder = "abc@example.com"
                keyboardType = 'email-address'
                onChangeText = {(text)=>{
                    this.setState({
                        emailId : text
                    })
                }}
                />

                   <TextInput
          style={{width : 300 , height : 40 , borderWidth:1.5 , fontSize : 20 , margin :10 , paddingLft : 10}}
          secureTextEntry = {true}
          placeholder="enter Password"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />

 </View>

 <View>

 <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
          onPress={()=>{this.login(this.state.emailId ,this.state.password)}}>
            <Text style={{textAlign:'center'}}>Login</Text>
          </TouchableOpacity>




 </View>



</KeyboardAvoidingView>

)
}
}
