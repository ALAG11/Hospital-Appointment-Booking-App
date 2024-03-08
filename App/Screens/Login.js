import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import app from './../../assets/images/login.png'
import Colours from '../../assets/Shared/Colours'
import SignInWithOAuth from '../Components/SignInWithOAuth'

export default function Login() {
  return (
    <View style={{alignItems:'center',
    backgroundColor:Colours.LIGHT_GRAY}}>
      <Image source={app}
      style={styles.appImage}/>
        <View style={{backgroundColor:Colours.WHITE,
                    padding:25,
                    alignItems:'center',
                    marginTop:-50,
                    borderTopLeftRadius:20,
                    borderTopRightRadius:20,
        }}>
            <Text style={styles.heading}>Your Perfect Doctor</Text>
            <Text style={styles.heading}>Appointment Booking App</Text>
            <Text style={{textAlign:'center', marginTop:20}}>Book Health Appointments Effortlessly</Text>
            <SignInWithOAuth/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    appImage:{
        width:300,
        height:500,
        objectFit:'cover',
        marginTop:50,
        borderRadius:20,
        borderWidth:6,
        borderColor:'#000'
    },
    heading:{
        fontSize:28,
        fontWeight:'bold'


    }

})