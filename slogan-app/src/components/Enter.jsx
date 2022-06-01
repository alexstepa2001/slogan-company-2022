import React, { Component } from 'react'
import EnterSection from './EnterSection';
import EnterFooter from './EnterFooter';
import '../styles/enter.scss';

export default class Enter extends Component {
    render() {
        return (
            <>
                <EnterSection/>
                <EnterFooter/>
            </>
        )
    }
}
