import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'

const models = () => {
    const navigation = useNavigation()
    
    React.useEffect(()=> {
        navigation.setOptions({
            headerShown: true,
            headerTitle: "Models",
            headerTitleAlign: "center"
        })
    }, [])

    return (
        <ScrollView>
            {/* Available models  */}
            <View className='flex-col mx-5 my-5'>
                <Text className='font-black text-gray-400 mb-3'>Available</Text>
               <View className='px-3 py-5 flex-col justify-between h-72 rounded-2xl border w-2/3 '>
                    <View className='flex items-center justify-center h-10 w-12 bg-["#35b439"] rounded-2xl self-end'>
                        <MaterialCommunityIcons name='message-reply' size={20} color={'white'}/>
                    </View>
                    <View className='border p-3 rounded-xl'>
                        <Text>Hey, this is your eve! How are you?</Text>
                    </View>
                </View>
            </View>
            <View className='flex-col mx-5 my-5'>
                <Text className='font-black text-gray-400 mb-3'>Premium</Text>
               <View className='px-3 py-5 flex-col justify-between h-72 rounded-2xl border w-2/3 '>
                    <View className='flex items-center justify-center h-10 w-12 bg-["royalblue"] rounded-2xl self-end'>
                        <Octicons name='report' size={20} color={'whitesmoke'}/>
                    </View>
                    <View className='border p-3 rounded-xl'>
                        <Text>Hey, this is your eve! How are you?</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default models
