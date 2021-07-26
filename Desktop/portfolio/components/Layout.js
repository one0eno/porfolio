import Navbar from "./Navbar"
import Head from "next/head"
import { useEffect } from "react"
import { useRouter } from "next/router"
import NProgress  from "nprogress"

export default function Layout(props){

    const router = useRouter()

    useEffect(() => {

        const showUrl = url => {

            NProgress.start();
        }
        

        router.events.on('routeChangeStart',showUrl )
        router.events.on('routeChangeComplete', ()=> NProgress.done())
        return () => {
            router.events.off('routeChangeStart', showUrl)

        }
    },[])

    return (
        <>
            <Head>
                <title>Jorge Arranz</title>
            </Head>
           <Navbar />
           <main className=" container py-4">
           {props.children}
           </main> 
           <footer className="bg-dark text-light text-center">
                <div className="container p-4">
                    <h1>&copy; Jorge Arranz</h1>
                    <p>2000 - {new Date().getFullYear()}</p>
                </div>
           </footer>
        </>
    )
}