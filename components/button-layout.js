import styles from './button-layout.module.css'
import React from 'react'

export default class ButtonGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    renderButton(text, i) {
        const buttonStyle = (this.props.activeButton != i) ?
            styles.btnSimple:styles.btnSelected;
        return (
            <Button 
                key={text}
                buttonStyle={buttonStyle}
                buttonText={text}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        const buttons = this.props.buttonText.map((text, i) => (
            this.renderButton(text, i)
        ));
        const containerType = this.props.isRow?
            styles.containerRow : styles.containerColumn;
        return (
            <div className={containerType}>
                {buttons}
            </div>
        );
    }
}

// This button will display the correspinding graph on the screen when clicked
// State is lifted up since graph is not a connected component to button
// Same with style and text since these params need to be displayed
// But class seems reduntant? Basically just a button?
// I'll keep it just for the sake of my mental structure and learning react
function Button(props) {
    return (
        <button className={props.buttonStyle} onClick={props.onClick}>
            {props.buttonText}
        </button>
    );
}