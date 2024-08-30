import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'

const audio = () => {
    return (
        <SafeAreaView>
            <View className='flex-row justify-between m-7'>
                <View className='flex-row items-baseline gap-x-1.5'>
                    <Text className='text-2xl font-black'>mate</Text>
                    <View className='h-2 w-2 bg-green-500 rounded-full'></View>
                </View>
                <View className='flex-row gap-x-8 items-center justify-center'>
                    <Link href='/(general)/chat'>
                        <Octicons name='search' size={20} color={'#000a'} />
                    </Link>
                    <Link href='/(general)/models'>
                        <Octicons name='people' size={24} color={'#000a'} />
                    </Link>
                </View>
            </View>

            <View className='flex-col mx-7 my-3'>
                <Text className='font-black text-xl mb-3'>Make a Call </Text>
                <View className='flex-row justify-between items-center border-b py-5 border-b-gray-300'>
                    <View className='flex-row items-center'>
                        <View className='h-16 w-16 rounded-full bg-gray-300'>
                            {/* Image for the models */}
                        </View>
                        <View className='ml-3'>
                            <Text className='font-black text-lg'>William Brown</Text>
                        </View>
                    </View>
                    <Feather name='phone' size={24}/>
                </View>

                <View className='flex-row justify-between items-center border-b py-5 border-b-gray-300'>
                    <View className='flex-row items-center'>
                        <View className='h-16 w-16 rounded-full bg-gray-300'>
                            {/* Image for the models */}
                        </View>
                        <View className='ml-3'>
                            <Text className='font-black text-lg'>Olivia Martinez</Text>
                        </View>
                    </View>
                    <Feather name='phone' size={24}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default audio
