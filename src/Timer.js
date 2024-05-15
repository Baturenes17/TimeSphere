import { View,Text, StyleSheet } from "react-native"

export const Timer = () => {
    return(
        <View style={styles.main} >
            <Text>Timer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#9EA3A7"
    }
})