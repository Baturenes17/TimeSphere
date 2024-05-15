import { View, Text, StyleSheet } from "react-native"
import dayjs from "dayjs"
import { useCallback, useEffect, useState } from "react"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import moment from 'moment-timezone';

SplashScreen.preventAutoHideAsync();

export const Clock = () => {

    const [date, setDate] = useState(dayjs());
    const [londonTime,setLondonTime] = useState(moment.tz("Europe/London"));
    const [newYorkTime,setNewYorkTime] = useState(moment.tz("America/New_York"));
    const [berlinTime,setBerlinTime] = useState(moment.tz("Europe/Berlin"));
    const [sydneyTime,setSydneyTime] = useState(moment.tz("Australia/Sydney"));
    
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(dayjs())
            setLondonTime(moment.tz("Europe/London"))
            setNewYorkTime(moment.tz("America/New_York"))
            setBerlinTime(moment.tz("Europe/Berlin"))
            setSydneyTime(moment.tz("Australia/Sydney"))
        }, 1000 * 1)

        return () => clearInterval(interval);
    }, [])

    const [fontsLoaded, fontError] = useFonts({
        'Freeman': require('../assets/fonts/Freeman-Regular.ttf'),
        'BebasNeue': require('../assets/fonts/BebasNeue-Regular.ttf')
      });
    
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }


    return (
        <View style={styles.main}  onLayout={onLayoutRootView}>
            <View style={styles.mainClock} >
                <Text style={styles.clocksty} >{date.format("HH:mm:ss")}</Text>
            </View>
            <View style={styles.countryClock} >
                <View style={{flexDirection:"row",alignItems:"center"}} >
                    <Text style={styles.countryName} >LONDON : </Text>
                    <Text style={styles.countryClckSty} >{londonTime.format("HH:mm:ss")}</Text>
                </View>

                <View style={{flexDirection:"row",alignItems:"center"}} >
                    <Text style={styles.countryName} >NEW YORK : </Text>
                    <Text style={styles.countryClckSty} >{newYorkTime.format("HH:mm:ss")}</Text>
                </View>

                <View style={{flexDirection:"row",alignItems:"center"}} >
                    <Text style={styles.countryName} >BERLIN : </Text>
                    <Text style={styles.countryClckSty} >{berlinTime.format("HH:mm:ss")}</Text>
                </View>

                <View style={{flexDirection:"row",alignItems:"center"}} >
                    <Text style={styles.countryName} >SYDNEY : </Text>
                    <Text style={styles.countryClckSty} >{sydneyTime.format("HH:mm:ss")}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#9EA3A7",
    },
    clocksty: {
        fontSize: 120,
        color: "#012947",
        fontFamily:"BebasNeue"
    },
    mainClock: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    countryClock: {
        flex: 3,
        alignItems: "center",
    },
    countryName: {
        fontSize: 40,
        color: "#990026",
        marginRight:10
    },
    countryClckSty:{
        fontSize:40,
        color:"#012947",
    }
})