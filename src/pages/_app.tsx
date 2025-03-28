import React from 'react'
import AppProvider from "@/provider/AppProvider";
import Head from "next/head";
import {AppProps} from "next/app";
import {SessionProvider} from "next-auth/react";

export default function MyApp({Component, pageProps}: AppProps) {
    return (<>
            <SessionProvider>
                <AppProvider>
                    <Head>
                        <title>FWPF Fachschaft IN</title>
                    </Head>
                    <Component {...pageProps}/>
                </AppProvider>
            </SessionProvider>

    </>

    )
}
