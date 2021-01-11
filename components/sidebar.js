import React from 'react'
import Link from 'next/link'
import styles from './sidebar.module.css'

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    renderNavigationLink(pathText, pageLink) {
        return (
            <Link 
                key = {"side" + pathText}
                href={pageLink}>
                <button className={styles.sidebarLinkButton}>
                    <a>{pathText}</a>
                </button>
            </Link>
        );
    }

    render() {
        const links = this.props.paths.map((path, i) => (
            this.renderNavigationLink(path, this.props.links[i])
        ));
        return (
            <div className={styles.sidebarContainer}>
                {links}
            </div>
        );
    }
}