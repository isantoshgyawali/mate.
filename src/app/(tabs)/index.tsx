import { View, Text, Pressable, Platform } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Octicons from 'react-native-vector-icons/Octicons'
import { trpc } from '../trpc'

const home = () => {
    const [inputMessage, setInputMessage] = useState<string | null>()

    //Dynamic Queries : Queries with args...
    const {data: queryData, isLoading, error, refetch } = trpc.message.useQuery(
        {text: inputMessage},
    )
    if (error) {console.log(1, error)}
    if (isLoading) {
        return (
            <View className='flex-1 justify-center items-center'>
                <Text className='font-black text-3xl'>
                    Hello there... it isn't loading btw
                </Text>
            </View>
        )
    } 

    //Mutation : Mutating server state
    const { mutate: logToServer, isPending, isError } = trpc.LogToServer.useMutation({
        onSuccess: () => {
            refetch();
        },
    })

    const handleMessageUpdate = () => {
        if (inputMessage) {
            logToServer({message: inputMessage})
        }
    }

    

    return (
        <SafeAreaView className={`${Platform.OS === "web" ? "w-1/2 self-center" : ""}`}>
            <View className='flex-row justify-between m-7'>
                <View className='flex-row items-baseline'>
                    <Text className='text-2xl font-black mr-2'>{queryData?.greeting}</Text>
                    <View className='h-2 w-2 bg-green-500 rounded-full'></View>
                </View>
                <View className='flex-row gap-x-4 items-center justify-center'>
                    <Link href='/(general)/search' className='mr-7'>
                        <Octicons name='search' size={20} color={'#000a'} />
                    </Link>
                    <Link href='/(general)/models'>
                        <Octicons name='people' size={24} color={'#000a'} />
                    </Link>
                </View>
            </View>

            <View className='flex-col mx-7'>
                <View className='flex-row justify-between items-center border-b py-5 border-b-gray-300'>
                    <View className='flex-row'>
                        <View className='h-16 w-16 rounded-full bg-gray-300'>
                            {/* Image for the models */}
                        </View>
                        <Pressable className='ml-3' onPress={()=> {}} >
                        {/* <Pressable className='ml-3' onPress={()=> router.push('/(general)/chat')} > */}
                            <Text className='font-black text-lg'>William Brown</Text>
                            <Text className='mt-2font-semibold text-gray-500'>Hello there, what is...</Text>
                        </Pressable>
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
