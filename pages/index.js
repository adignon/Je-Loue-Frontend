import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {BaseLayout, Banner} from "../rsc/components";
import {Rooms} from "../rsc/store/@fakedb"
import useResize from "../rsc/hooks/useResize";

export default function Home(props) {
    const size=useResize()
    return (
        <BaseLayout pageTitle={"Acceuil"}>
            <Banner/>
        </BaseLayout>
    )
}

export const getServerSideProps=async (context)=>{
    return {
        props:{

        }
    }
}
