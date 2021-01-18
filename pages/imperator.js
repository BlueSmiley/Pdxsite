import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar.js'
import styles from '../styles/Home.module.css'

export default function Page() {
    return (
        <div className={styles.pageWrapper}>
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
                <div className={styles.contentArea}>
                    <div className={styles.navbarLayout}>
                        <Navbar
                            paths={["Home", "Imperator"]}
                            links={["/", "./imperator"]}
                        />
                    </div>
                    <h1>Under development</h1>
                </div>
            </main>
        </div>
    );
}