import Head from 'next/head'
import styles from '../styles/Home.module.css'
import GraphDisplayManager from '../components/graphDisplayManager.js'
import Navbar from '../components/navbar.js'
import Sidebar from '../components/sidebar';


const rowButtonNames =
    [
        [
            "Session 1", "Session 2", "Session 3", "Session 4", "Session 5",
            "Session 6", "Session 7", "Session 8", "Session 9"
        ],
        [
            "1515", "1540", "1548", "1556", "1566", "1572", "1596", "1619"
        ],
        [
            "1566", "1572", "1596", "1619"
        ],
        [
            "1540", "1585", "1596", "1619"
        ],
        [
            "1515", "1540", "1596", "1619"
        ],
        [
            "1540", "1556", "1585", "1619"
        ],
        [
            "1548", "1556", "1566", "1619"
        ]
    ];

const columnButtonNames =
    [
        "Colored Maps", "Income", "Army Losses", "Army Stats", "Country Stats",
        "Province Count", "Province Dev"
    ];

const imagePaths =
    [
        [
            "/assets/Colored_maps_eu4/eu4_map_1.png",
            "/assets/Colored_maps_eu4/eu4_map_2.png",
            "/assets/Colored_maps_eu4/eu4_map_3.png",
            "/assets/Colored_maps_eu4/eu4_map_4.png",
            "/assets/Colored_maps_eu4/eu4_map_5.png",
            "/assets/Colored_maps_eu4/eu4_map_6.png",
            "/assets/Colored_maps_eu4/eu4_map_7.png",
            "/assets/Colored_maps_eu4/eu4_map_8.png",
            "/assets/Colored_maps_eu4/eu4_map_9.png",
        ],
        [
            "/assets/Income_eu4/Income_1515.png",
            "/assets/Income_eu4/Income_1540.png",
            "/assets/Income_eu4/Income_1548.png",
            "/assets/Income_eu4/Income_1556.png",
            "/assets/Income_eu4/Income_1566.png",
            "/assets/Income_eu4/Income_1572.png",
            "/assets/Income_eu4/Income_1596.png",
            "/assets/Income_eu4/Income_1619.png"
        ],
        [
            "/assets/Army_losses_eu4/losses_1566.png",
            "/assets/Army_losses_eu4/losses_1572.png",
            "/assets/Army_losses_eu4/losses_1596.png",
            "/assets/Army_losses_eu4/losses_1619.png"
        ],
        [
            "/assets/Army_stats_eu4/armies_1540.png",
            "/assets/Army_stats_eu4/armies_1585.png",
            "/assets/Army_stats_eu4/armies_1596.png",
            "/assets/Army_stats_eu4/armies_1619.png"
        ],
        [
            "/assets/Country_stats_eu4/country_1515.png",
            "/assets/Country_stats_eu4/country_1540.png",
            "/assets/Country_stats_eu4/country_1596.png",
            "/assets/Country_stats_eu4/country_1619.png"
        ],
        [
            "/assets/Province_count_eu4/land_count_eu4_1540.png",
            "/assets/Province_count_eu4/land_count_eu4_1556.png",
            "/assets/Province_count_eu4/land_count_eu4_1585.png",
            "/assets/Province_count_eu4/land_count_eu4_1619.png"
        ],
        [
            "/assets/Province_dev_eu4/province_dev_eu4_1548.png",
            "/assets/Province_dev_eu4/province_dev_eu4_1556.png",
            "/assets/Province_dev_eu4/province_dev_eu4_1566.png",
            "/assets/Province_dev_eu4/province_dev_eu4_1619.png"
        ]
    ];

export default function Home() {
    return (
        <div>
            <Head>
                <title>Paradox campaign visualisor</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className={styles.centerContainerLayout}>
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
                                paths={["Home", "Europa Universalis"]}
                                links={["/", "./eu4"]}
                            />
                        </div>
                        <div className={styles.centerDisplayLayout}>
                            <GraphDisplayManager
                                columnButtonNames={columnButtonNames}
                                rowButtonNames={rowButtonNames}
                                images={imagePaths}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}