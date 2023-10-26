import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"


export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyANrzVGnhNUpCq-0U3Kj61uQ1qteWN2LEY",
        authDomain: "nuxt-auth-1d934.firebaseapp.com",
        projectId: "nuxt-auth-1d934",
        storageBucket: "nuxt-auth-1d934.appspot.com",
        messagingSenderId: "944546140942",
        appId: "1:944546140942:web:39a7e66770513044f43d5f",
        measurementId: "G-LRWEBGH100"
    };

    const app = initializeApp(firebaseConfig)

    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})
