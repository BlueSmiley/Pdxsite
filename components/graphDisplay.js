import styles from './graphDisplay.module.css'

export default function Graph(props) {
    if (props.graphImage != null) {
        return (
            <div className={styles.graphContainer}>
                <img
                    className={styles.graphImage}
                    src={props.graphImage} 
                    alt={props.graphLabel}
                >
                </img>
            </div>
        );
    }
    else {
        // should be an empty container which would fit same size as image
        // image tag should be nested in this container
        return (<div className={styles.graphContainer}></div>);
    }
}