import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar';

export default function Home() {
    return (
        <div className={styles.emptyPage}>
            <Head>
                <title>Paradox campaign visualisor</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.centerContainerLayout}>
                <Sidebar
                    paths={[
                        "Europa Universalis 4", 
                        "Crusader Kings 2",
                        "Crusader Kings 3",
                        "Stellaris",
                        "Imperator Rome"
                    ]}
                    links={["./eu4", "./ck2", "./ck3", "./stellaris", "./imperator"]}
                />
                <h1>Select a campaign from the sidebar to view it</h1>
            </main>
        </div>
    )
}