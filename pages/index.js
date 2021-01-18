import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar';
import { useQuery, gql } from "@apollo/client"

const GameNamesQuery = gql`
    query GameNames {
        games
        {
          name
        }
    }
`;

export default function Home() {
    const {data, error, loading} = useQuery(GameNamesQuery);
    const gameNames = error? ["Error loading"] : (loading? [] : data);

    return (
        <div className={styles.pageWrapper}>
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
                {gameNames.games.map((game) => {
                    return <h1>{game.name}</h1>
                })}
            </main>
        </div>
    )
}