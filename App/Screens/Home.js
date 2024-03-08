import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo';
import Header from '../Components/Home/Header';
import SearchBar from '../Components/Home/SearchBar';


export default function Home() {
    const { isLoaded,signOut } = useAuth();
  return (
    <View style={{padding:20, marginTop:20}}>
        <Header/>
        <SearchBar setSearchText={(value)=>console.log(value)}/>
    </View>
  )
}