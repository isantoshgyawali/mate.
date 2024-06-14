import { useNavigation } from 'expo-router';
import React from 'react'
import { View, Text, Pressable, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'

const chat = () => {
    const navigation = useNavigation();
    React.useEffect(()=> {
        navigation.setOptions({
            headerShown: true,
            headerTitle: "Melina Martinez",
            headerTitleAlign: "center",
            headerRight : () => {
                return (
                    <Pressable className='mr-3'>
                        <Ionicons name='information-circle-outline' size={24}/>
                    </Pressable>
                )
            }
        })   
    })
    return (
        <></>
    )
}

export default chat
