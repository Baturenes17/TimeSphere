import { useEffect, useState } from "react"
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

export const Stopwatch = () => {

    const [milliSeconds, setMilliSeconds] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isStart, setIsStart] = useState(false);
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isStart) {
                if (milliSeconds < 99) {
                    setMilliSeconds(milliSeconds + 1)
                } else {
                    setSeconds(seconds + 1);
                    setMilliSeconds(0);
                }
            }
        }, 1)

        return () => {
            clearInterval(interval);
        };
    })

    const startTimerFunc = () => {
        if (!isStart) {
            setIsStart(true);
        } else {
            setIsStart(false);
        }
    }


    const saveRecords = () => {
        setRecords([...records, `${minutes < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds} : ${milliSeconds < 10 ? "0" + milliSeconds : milliSeconds}`])
    }

    const resetRecords = () => {
        setMilliSeconds(0);
        setSeconds(0);
        setMinutes(0);
        setIsStart(false)
        setRecords([]);
    }

    return (
        <View style={styles.main} >
            <View style={styles.timerArea} >
                <View>
                    <Text style={styles.timerSty} >{minutes < 10 ? "0" + minutes : minutes} : {seconds < 10 ? "0" + seconds : seconds}</Text>
                </View>
                <View style={styles.timerMilliSeconds} >
                    <Text style={styles.milliSecondsSty} >{milliSeconds < 10 ? "0" + milliSeconds : milliSeconds}</Text>
                </View>
            </View>

            <View style={styles.buttonArea} >

                <Pressable onPress={saveRecords} >
                    <View style={styles.button}>
                        <Entypo name="check" size={24} color="black" />
                    </View>
                </Pressable>

                <Pressable onPress={startTimerFunc} >
                    <View style={[styles.button,{backgroundColor:isStart?"#EFEAEA":"#458213"}]}>
                        {!isStart ? <Entypo name="controller-play" size={24} color="black" /> : <FontAwesome6 name="pause" size={22} color="black" />}
                    </View>
                </Pressable>

                <Pressable onPress={resetRecords} >
                    <View style={styles.button}>
                        <MaterialCommunityIcons name="reload" size={24} color="black" />
                    </View>
                </Pressable>
            </View>

            <View style={styles.listArea} >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1, width: "90%" }}
                    data={records}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={styles.recordsFrame} >
                            <View style={styles.recordsIndex} >
                                <Text style={styles.recordsIndexSty} >{index + 1}</Text>
                            </View>
                            <Text style={styles.recordsSty} >{item}</Text>
                            <View style={styles.recordsFrameRight} >
                                <View style={styles.recordsIndexDelete} >
                                    <AntDesign name="delete" size={27} color="white" />
                                </View>
                            </View>

                        </View>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9EA3A7",
    },
    timerArea: {
        flexDirection: "row",
        alignItems: "flex-end",
        flex: 2
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
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 20,
        backgroundColor: "#458213",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonArea: {
        flex: 1,
        flexDirection: "row"
    },
    listArea: {
        flex: 3,
        flexDirection: "column",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    recordsFrame: {
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
        borderWidth: 3,
        borderRadius: 30,
        marginVertical: 10,
        flexDirection: "row",

    },
    recordsIndex: {
        width: "15%",
        height: "100%",
        backgroundColor: "#458213",
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        borderColor: "black",
        borderRightWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    recordsIndexDelete: {
        width: "40%",
        height: "100%",
        backgroundColor: "#BA1010",
        borderTopLeftRadius: 150,
        borderBottomLeftRadius: 150,
        borderTopRightRadius: 150,
        borderBottomRightRadius: 150,
        borderColor: "black",
        borderLeftWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    recordsFrameRight: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "100%"
    },
    recordsIndexSty: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    recordsSty: {
        marginRight: 20,
        fontSize: 30,
        fontWeight: "600",
    }
})