import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'

export default function Slider() {
    const sliderList=[
        {
            id:1,
            name:'Slider 1',
            imageUrl:''
        },
        {
            id:2,
            name:'Slider 2',
            imageUrl:''
        }
    ]
  return (
    <View style={{marginTop:10}}>
      <FlatList
        data={sliderList}
        renderItem={({item})=>(
            <Image source={{uri:item.imageUrl}}
                style={{
                    width:Dimensions.get('screen').width*0.9,
                    height:170
                }}    
            />
        )}
      />
    </View>
  )
}