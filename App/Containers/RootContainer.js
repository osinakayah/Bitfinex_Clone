import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {

    render () {
        return (
            <View style={styles.applicationView}>
                <StatusBar barStyle='light-content' />
                <ReduxNavigation />
            </View>
        )
    }
}

export default connect(null, null)(RootContainer)