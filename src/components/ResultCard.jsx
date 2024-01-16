import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function ResultCard({trip, width}) {
    
        const navigate = useNavigation()

      
        return (
            <TouchableOpacity               
                onPress={()=>navigate.navigate('Detail', {trip: trip})}>
                <View style={{
                        width: width,
                        height: width * trip.aspectRatio,
                        marginBottom: 10
                        }}>
                    <Image style={{
                        width: width,
                        height: width * trip.aspectRatio,
                        resizeMode :'cover',
                        borderRadius : 10
                        }} source={trip.img}/>
                    <Text style={styles.text}>
                        {trip.title}
                    </Text>
                </View> 
            </TouchableOpacity>
        )
}


const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        marginTop :40,
        marginHorizontal :10,
    },
    text :{
        position :'absolute',
        bottom :10,
        left: 10,
        fontWeight : 'bold',
        color :'white'
    }
});
