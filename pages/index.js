import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ButtonGroup from '../components/button-layout.js'
import Graph from '../components/graph-display.js'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Paradox campaign visualisor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <GraphDisplayManager/>
      </main>
    </div>
  )
}

class GraphDisplayManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowButton: 0,
      activeColumnButton: 0,
      columnButtonNames: [
        "Colored Maps", 
        "Income", 
        "Army Losses", 
        "Army Stats",
        "Country Stats", 
        "Province Count", 
        "Province Dev", 
      ],
      rowButtonNames: [
        [
          "Session 1",
          "Session 2",
          "Session 3",
          "Session 4",
          "Session 5",
          "Session 6",
          "Session 7",
          "Session 8",
          "Session 9",
        ],
        [
          "1515",
          "1540",
          "1548",
          "1556",
          "1566",
          "1572",
          "1596",
          "1619"
        ],
        [
          "1566",
          "1572",
          "1596",
          "1619"
        ],
        [
          "1540",
          "1585",
          "1596",
          "1619"
        ],
        [
          "1515",
          "1540",
          "1596",
          "1619"
        ],
        [
          "1540",
          "1556",
          "1585",
          "1619"
        ],
        [
          "1548",
          "1556",
          "1566",
          "1619"
        ]
      ],
      images: [
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
      ]
    };
  }

  handleClickColumn(index) {
    this.setState({activeColumnButton:index});
    this.setState({activeRowButton: 
      Math.min(this.state.activeRowButton, 
        this.state.rowButtonNames[index].length - 1)
    });
  }

  handleClickRow(index) {
    this.setState({activeRowButton:index});
  }

  render() { 
    return (
      <div>
        <div className={styles.buttonGroupRow}>
          <ButtonGroup
            buttonText={this.state.rowButtonNames[this.state.activeColumnButton]}
            isRow={true}
            onClick={i => this.handleClickRow(i)}
            activeButton={this.state.activeRowButton}
          />
        </div>
        <div className={styles.displayArea}>
          <ButtonGroup
            buttonText={this.state.columnButtonNames}
            isRow={false}
            onClick={i => this.handleClickColumn(i)}
            activeButton={this.state.activeColumnButton}
          />
          <Graph 
            graphImage= {this.state.images[this.state.activeColumnButton][this.state.activeRowButton]} 
            graphLabel="I need to regex the filename here instead"
          />
        </div>
      </div>
    );
  }
}
