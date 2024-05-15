import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { Entypo } from '@expo/vector-icons';

export const Stopwatch = () => {

    const [milliSeconds, setMilliSeconds] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [startTimer, setStartTimer] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (startTimer) {
                if (milliSeconds < 99) {
                    setMilliSeconds(milliSeconds + 1)
                } else {
                    setSeconds(seconds + 1);
                    setMilliSeconds(0);
                }
            }
        }, 10)

        return () => {
            clearInterval(interval);
        };
    })

    const startTimerFunc = () => {
        if (!startTimer) {
            setStartTimer(true);
        } else {
            setStartTimer(false);
        }
    }

    return (
        <View style={styles.main} >
            <View style={{ flexDirection: "row", alignItems: "flex-end" }} >
                <View>
                    <Text style={styles.timerSty} >{minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}</Text>
                </View>
                <View style={styles.timerMilliSeconds} >
                    <Text style={styles.milliSecondsSty} >{milliSeconds < 10 ? "0" + milliSeconds : milliSeconds}</Text>
                </View>
            </View>
            <Pressable onPress={startTimerFunc} >
                <View style={styles.start}>
                    <Entypo name="controller-play" size={24} color="black" />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9EA3A7"
    },
    timerSty: {
        fontSize: 110
    },
    timerMilliSeconds: {
        justifyContent: "center",
        alignItems: "center"
    },
    milliSecondsSty: {
        fontSize: 25
    },
    start: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 20,
        backgroundColor: "#458213",
        justifyContent: "center",
        alignItems: "center"
    }
})