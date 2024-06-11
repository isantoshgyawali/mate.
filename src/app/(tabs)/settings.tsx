import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, useNavigation } from 'expo-router'
import Feather from 'react-native-vector-icons/Feather'

import Ionicons from 'react-native-vector-icons/Ionicons'
const settings = () => {
    const navigation = useNavigation()
    React.useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTitleAlign: "center",
        })
    }, [])

    const connectApple = () => {
        console.log('connenct apple')
    }

    const connectGoogle = () => {
        console.log('connect google')
    }

    return (
        <>
            {/* About Section */}
            <View className='flex-col mx-5 mt-5'>
                <Text className='font-black mb-3 text-gray-500'>About</Text>
                <View className='flex-col mx-5'>
                    <View className='flex-row items-center justify-between border-b border-b-gray-300 py-3'>
                        <Text className='font-black'>Full Name</Text>
                        <Link href={'/editFullName'}>
                            <Text className='font-semibold'>John Carmack</Text>
                        </Link>
                    </View>
                    <View className='flex-row justify-between border-b border-b-gray-300 py-3'>
                        <Text className='font-black'>Username</Text>
                        <Link href={'/editUserName'} >
                            <Text className='font-semibold'>@johncarmack</Text>
                        </Link>
                    </View>
                    <View className='flex-row justify-between items-center py-3'>
                        <Text className='font-black'>Password</Text>
                        <Link href={'/password'} className=''>
                            <Feather name='chevron-right' size={24}/>
                        </Link>
                    </View>
                </View>
            </View>

            {/* Connections Section */}
            <View className='flex-col m-5'>
                <Text className='font-black mb-5 text-gray-500'>Connect</Text>
                <View className='flex-col mx-5'>
                    <View className='flex-row items-center justify-between border-b border-b-gray-300 py-3'> 
                        <View className='flex-row'>
                            <Ionicons name='logo-google' size={24}/>
                            <Text className='ml-3 font-black'>Google Account</Text>
                        </View>
                        <Pressable onPress={connectGoogle}>
                            <Text className='font-[800] text-blue-500 border-[2px] border-blue-500 px-3 py-1 rounded-2xl'>Connect</Text>
                        </Pressable>
                    </View>
                    <View className='w-full flex-row justify-between mt-5'> 
                        <View className='flex-row'>
                            <Ionicons name='logo-apple' size={24}/>
                            <Text className='ml-3 font-black'>Apple Account</Text>
                        </View>
                        <Pressable onPress={connectApple}>
                            <Text className='font-[800] text-blue-500 border-[2px] border-blue-500 px-3 py-1 rounded-2xl'>Connect</Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            {/* Plans Section */}
            <View className='flex-col m-5'>
                <Text className='font-black text-gray-500'>Plans</Text>
            </View>
        </>
    )
}

export default settings
