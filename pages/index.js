import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {BaseLayout} from "../rsc/components";
import {Rooms} from "../rsc/store/@fakedb"

export default function Home(props) {
    return (
        <BaseLayout pageTitle={"Acceuil"}>
            room
        </BaseLayout>
    )
}

export const getServerSideProps=async (context)=>{
    return {
        props:{

        }
    }
}
