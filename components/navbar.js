import React from 'react'
import Link from 'next/link'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }

    renderNavigationLink(pathText, pageLink) {
        return <Link href={pageLink}><a>{pathText + " > "}</a></Link>
    }

    render() {
        return this.props.paths.map((path, i) => (
            this.renderNavigationLink(path, this.props.links[i])
        ));
    }
}