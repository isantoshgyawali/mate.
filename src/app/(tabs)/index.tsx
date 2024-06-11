import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, useNavigation } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Octicons from 'react-native-vector-icons/Octicons'

const home = () => {
    return (
        <SafeAreaView>
            <View className='flex-row justify-between m-7'>
                <View className='flex-row items-baseline gap-x-1.5'>
                    <Text className='text-2xl font-black'>mate</Text>
                    <View className='h-2 w-2 bg-green-500 rounded-full'></View>
                </View>
                <View className='flex-row gap-x-8 items-center justify-center'>
                    <Link href='/general/search'>
                        <Octicons name='search' size={20} color={'#000a'} />
                    </Link>
                    <Link href='/general/models'>
                        <Octicons name='people' size={24} color={'#000a'} />
                    </Link>
                </View>
            </View>

            <View className='flex-col mx-7 my-5'>
                <View className='flex-row justify-between items-center border-b py-5 border-b-gray-300'>
                    <View className='flex-row'>
                        <View className='h-16 w-16 rounded-full bg-gray-300'>
                            {/* Image for the models */}
                        </View>
                        <View className='ml-3'>
                            <Text className='font-black text-lg'>William Brown</Text>
                            <Text className='mt-2font-semibold text-gray-500'>Hello there, what is...</Text>
                        </View>
                    </View>

                    <View>
                        <View className='flex h-7 w-7 items-center justify-center rounded-full bg-red-400 border-red-400'>
                            <Text className='font-black text-white'>2</Text>
                        </View>
                    </View>
                </View>

                <View className='flex-row justify-between items-center border-b py-5 border-b-gray-300'>
                    <View className='flex-row'>
                        <View className='h-16 w-16 rounded-full bg-gray-300'>
                            {/* Image for the models */}
                        </View>
                        <View className='ml-3'>
                            <Text className='font-black text-lg'>Olivia Martinez</Text>
                            <Text className='mt-2font-semibold text-gray-500'>Was there anything special out there....</Text>
                        </View>
                    </View>

                    <View>
                        <View className='flex h-7 w-7 items-center justify-center rounded-full bg-red-400 border-red-400'>
                            <Text className='font-black text-white'>1</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default home
