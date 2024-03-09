import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'

export default function Slider() {
    const sliderList=[
        {
            id:1,
            name:'Slider 1',
            imageUrl:'https://img.freepik.com/premium-vector/online-medicine-concept_118813-2776.jpg?w=826'
        },
        {
            id:2,
            name:'Slider 2',
            imageUrl:'https://img.freepik.com/free-vector/medical-video-call-consultation-illustration_88138-415.jpg?w=826&t=st=1709977009~exp=1709977609~hmac=87e42a53b7ba7522a02bd0f325f1028e4bd9a86f725cbc612bd5f4090d206dbf'
        }
    ]
  return (
    <View style={{marginTop:10}}>
      <FlatList
        data={sliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <Image source={{uri:item.imageUrl}}
                style={{
                    width:Dimensions.get('screen').width*0.9,
                    height:170,
                    borderRadius:10,
                    margin:2
                }}    
            />
        )}
      />
    </View>
  )
}