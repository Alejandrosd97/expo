import {React, useState} from 'react'
import Constants from 'expo-constants'
import SearchInput from './SearchInput';



import { StyleSheet, Text, View } from 'react-native';
import Header from './Header'
import ResultsList from './ResultsList';
import data from './data/viajes.js'


export default function SearchPage () {
    const [filter, setFilter] = useState('All')

    const filteredTrips = data.filter((t)=>{
        if (filter !== 'All'){
            return t.type === filter
        }
        else {
            return t
        }
    })

    return (
         <View style = {styles.container}>
            <Header headerTitle='Search'/>
            <SearchInput/>
            <View style = {styles.filter}>
                <Text style={filter === 'All' ? styles.active : { color : '#aed9e0' , fontWeight : 'bold'}}
                    onPress={()=>setFilter('All')}
                >All</Text>
                <Text style={filter === 'Adventure' ? styles.active : { color : '#aed9e0', fontWeight : 'bold' }}
                    onPress={()=>setFilter('Adventure')}>
                    Adventure
                </Text>
                <Text style={filter === 'Art' ? styles.active : { color : '#aed9e0', fontWeight : 'bold'}}
                    onPress={()=>setFilter('Art')}>
                        Art
                </Text>
                <Text style={filter === 'Nature' ? styles.active : { color : '#aed9e0', fontWeight : 'bold'}}
                    onPress={()=>setFilter('Nature')}>
                    Nature
                </Text>
                <Text style={filter === 'Luxury' ? styles.active : { color : '#aed9e0', fontWeight : 'bold'}}
                    onPress={()=>setFilter('Luxury')}>
                    Luxury
                </Text>
            </View>
            <ResultsList list={filteredTrips}/>
        </View>
  );
}


const styles = StyleSheet.create({
    container : {
        marginTop : Constants.statusBarHeight, 
        paddingTop : 20,        
        marginBottom : 100,
    },

    img : {
        width : '100%',
        height : 300,
        borderRadius : 3
    },
    filter:{
        flexDirection :'row',
        justifyContent : 'space-between',
        marginHorizontal : 20,
        marginTop : 40,
        marginBottom : 20
    },
    active :{
        fontWeight :'bold',
        color : '#5e6472'
    }
})
