import React from "react";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import CustomTabBar from "../components/CustomTabBar";

export default function TabLayout() {
    return (
        <>
            <StatusBar style='dark' />
            <Tabs 
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        height: 100
                    }
                }}
                 tabBar={(props) => <CustomTabBar {...props} />}
            >
                <Tabs.Screen name="index"/>
                <Tabs.Screen name="audio"/>
                <Tabs.Screen name="settings"/>
            </Tabs>

        </>
    )
}
