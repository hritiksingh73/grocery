import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../../../constant/Color';

const styles = StyleSheet.create({
    textinput: {
        fontSize: 15,
        borderBottomWidth:2,
        borderBottomColor:Color.liteGrey,
        color:Color.black
    },
    textInputContainer:{
        paddingTop:30
    }
})


export default styles;