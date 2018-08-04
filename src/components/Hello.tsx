import * as React from 'react'
import {Button, Text, View, StyleSheet} from 'react-native'

export interface Props {}

interface State {}


export default class Hello extends React.Component<Props, State> {
    constructor(props: Props){
        super(props)
        // set state
    }

    // methods


    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.fancyLiturgy}>Hello from the other side</Text>
            </View>
        )
    }
   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    fancyLiturgy: {
        fontSize: 24,
        fontStyle: 'italic',
        fontFamily: " 'Century Gothic', monospace sans-serif"
    }
})