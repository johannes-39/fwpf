import React from 'react'
import AppProvider from "@/provider/AppProvider";
import Head from "next/head";
import {AppProps} from "next/app";

export default function MyApp({Component, pageProps}: AppProps) {
    return (<>
            <AppProvider>
                <Head>
                    <title>FWPF Fachschaft IN</title>
                </Head>
                <Component {...pageProps}/>
    </AppProvider>
    </>

    )
}
