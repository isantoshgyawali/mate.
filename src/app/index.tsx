// import React from "react";
// import { Redirect } from "expo-router";
// import {createTRPCReact, httpBatchLink} from "@trpc/react-query";
// import { tRPC_Router } from "server/server";
//
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { View } from "react-native-reanimated/lib/typescript/Animated";
// import { Text } from "react-native";
//
// export default function Index() {
//     // return <Redirect href="/(tabs)/"/>;
//     // return <Redirect href="/general/chat/chat"/>;
// }


// App.tsx
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import YourComponent from './YourComponent';
import { trpc } from './trpc'; // Adjust the path to your trpc configuration file
import { httpBatchLink } from '@trpc/client';
import superjson from 'superjson'
import { SafeAreaView } from 'react-native-safe-area-context';


const App: React.FC = () => {
    const [queryClient] = useState(()=> new QueryClient() )
    const [trpcClient] = useState(() =>
        trpc.createClient({
            transformer: superjson,
            links: [
                httpBatchLink({
                    url: 'http://192.168.1.77:8080/trpc',
                    // You can pass any HTTP headers you wish here
                    // async headers() {
                    //     return {
                    //         authorization: getAuthCookie(),
                    //     };
                    // },
                }),
            ],
        }),
    );
    return (
        <trpc.Provider queryClient={queryClient} client={trpcClient}>
            <QueryClientProvider client={queryClient}>
                <SafeAreaView>
                    <YourComponent />
                </SafeAreaView>
            </QueryClientProvider>
        </trpc.Provider>
    );
};

export default App;
