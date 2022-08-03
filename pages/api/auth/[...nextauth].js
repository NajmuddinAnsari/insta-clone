// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google";

// export default NextAuth({
//     // Configure one or more authentication providers
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_ID,
//             clientSecret: process.env.GOOGLE_SECRET,
//         }),
//         // ...add more providers here
//     ],
//     pages: {
//         signIn: "/auth/signin",
//     },
// })



// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"
// import { FirestoreAdapter } from "@next-auth/firebase-adapter"
// // import { Firestore } from "firebase/firestore";
// import { db } from "../../../firebase";
// import * as firestoreFunctions from 'firebase/firestore'

// // For more information on each option (and a full list of options) go to
// // https://next-auth.js.org/configuration/options
// export default NextAuth({
//     // https://next-auth.js.org/providers/overview
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_ID,
//             clientSecret: process.env.GOOGLE_SECRET,
//         }),
//     ],
//     adapter: FirestoreAdapter({db,...firestoreFunctions})
//     // ...
// });

// {
//     apiKey: process.env.FIREBASE_API_KEY,
//         appId: process.env.FIREBASE_APP_ID,
//             authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//                 databaseURL: process.env.FIREBASE_DATABASE_URL,
//                     projectId: process.env.FIREBASE_PROJECT_ID,
//                         storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//                             messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//                                 // Optional emulator config (see below for options)
//                                 emulator: { },
//     firestore
// }









import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { FirestoreAdapter } from "@next-auth/firebase-adapter"

import { FirebaseAdapter } from '@next-auth/firebase-adapter'

// import { db } from '../../../firebase.config'
import { db } from '../../../firebase.js'
import * as firestoreFunctions from 'firebase/firestore'

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    adapter: FirestoreAdapter({
        db: db,
        ...firestoreFunctions,
    }),
})