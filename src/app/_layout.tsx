import "./../global.css"
import React from 'react';
import { Stack } from 'expo-router/stack';

export default function RootLayout() {
return <Stack screenOptions={{headerShown: false}}/>
}
