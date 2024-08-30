import { Slot } from "expo-router";
import "./../global.css"
import React, { useState } from 'react';
import { trpc } from "./trpc";
import superjson from "superjson";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";

export default function RootLayout() {
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
                <Slot/>
            </QueryClientProvider>
        </trpc.Provider>
    )
}
