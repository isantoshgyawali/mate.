// YourComponent.tsx
import React from 'react';
import { Text, View } from 'react-native';
import { trpc } from './trpc'; // Adjust the path to your trpc configuration file

const YourComponent: React.FC = () => {
    // Replace 'yourEndpoint.getData' with your actual tRPC endpoint
    const { data, isLoading, error } = trpc.sayHi.useQuery();
    console.log(1, data)

    if (isLoading) return (
        <View className='h-full w-full justify-center items-center'>
            <Text className='font-black text-4xl'>Loading...</Text>
        </View>
    )

    if (error) return (
        <View className='h-full w-full justify-center items-center'>
            <Text className='font-black text-4xl'>Error: {error.message}</Text>
        </View>
    ) 

    return (
        <View className='h-full w-full justify-center items-center'>
            <Text>Data: {JSON.stringify(data)}</Text>
        </View>
    );
};

export default YourComponent;

