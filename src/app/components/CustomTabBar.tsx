import React, { useState } from 'react'
import { View, Pressable } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTabBar = ({ navigation, state }) => {
    
    //-- check the notifications and set up the state to be true/false
    const [hasNotfications, setHasNotifications] = useState<boolean>(true)

    return (
        <View className='w-screen bg-white flex-row items-center justify-center h-[70px] border border-gray-300'>
            {state.routes.map((route: any , index: any) => {
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const renderIcon = () => {
                    if (route.name === 'index') {
                        const iconName = isFocused ? 'chatbubble-sharp' : 'chatbubble-outline';
                        return <Ionicons name={iconName} size={27} color={"#000"} />

                    } else if (route.name === 'audio') {
                        const iconName = isFocused ? 'phone-message' : 'phone-message-outline';
                        return <MaterialCommunityIcons name={iconName} size={27} color={"#000"} />

                    } else if (route.name === 'settings') {
                        const iconName = isFocused ? 'settings-sharp' : 'settings-outline';
                        return <Ionicons name={iconName} size={27} color={'#000'} />
                    }
                }

                const renderNotificationDot = () => {
                    if (!isFocused && route.name === 'index'){
                        return <View className='bg-[#1D9BF0] h-4 w-4 translate-x-3 -translate-y-2 rounded-full absolute border-[2px] border-white'></View>
                    } else if (!isFocused && route.name === 'audio') {
                        return <View className='bg-[#ff0e0e] h-4 w-4 translate-x-4 -translate-y-2 rounded-full absolute border-[2px] border-white'></View>
                    }
                }

                return (
                    <Pressable
                        key={route.key}
                        onPress={onPress}
                        className='flex-1 justify-center items-center'
                    >
                        {renderIcon()}
                        {hasNotfications && renderNotificationDot()}
                    </Pressable>
                );
            })}
        </View>
    );
}

export default CustomTabBar
