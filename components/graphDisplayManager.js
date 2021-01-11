import ButtonGroup from '../components/buttonLayout.js'
import Graph from '../components/graphDisplay.js'
import styles from './graphDisplayManager.module.css'
import React from 'react'

export default class GraphDisplayManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowButton: 0,
            activeColumnButton: 0,
        };
    }

    handleClickColumn(index) {
        this.setState({ activeColumnButton: index });
        this.setState({
            activeRowButton:
                Math.min(this.state.activeRowButton,
                    this.props.rowButtonNames[index].length - 1)
        });
    }

    handleClickRow(index) {
        this.setState({ activeRowButton: index });
    }

    render() {
        return (
            <div>
                <div className={styles.graphTopLayout}>
                    <ButtonGroup
                        buttonText={this.props.rowButtonNames[this.state.activeColumnButton]}
                        isRow={true}
                        onClick={i => this.handleClickRow(i)}
                        activeButton={this.state.activeRowButton}
                    />
                </div>
                <div className={styles.graphCenterLayout}>
                    <div className={styles.graphLeftColumnLayout}>
                        <ButtonGroup
                            buttonText={this.props.columnButtonNames}
                            isRow={false}
                            onClick={i => this.handleClickColumn(i)}
                            activeButton={this.state.activeColumnButton}
                        />
                    </div>
                    <div className={styles.graphDisplayLayout}>
                        <Graph
                            graphImage={this.props.images[this.state.activeColumnButton][this.state.activeRowButton]}
                            graphLabel="I need to regex the filename here instead"
                        />
                    </div>
                </div>
            </div>
        );
    }
}