import React from 'react';
import {Dimensions, Platform, StyleSheet} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create ({
    button: {
        paddingVertical: 6,
        paddingHorizontal: 20,
        backgroundColor: '#00ffff',
        borderRadius: 15,
        overflow: 'hidden',
    }
});

export { styles }

//import { styles } from "../../styles";