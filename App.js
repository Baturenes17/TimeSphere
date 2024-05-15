import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Clock } from './src/Clock';
import { Timer } from './src/Timer';
import { Stopwatch } from './src/Stopwatch';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarPosition='bottom'
      initialRouteName='Clock'
      screenOptions={{
        tabBarLabelStyle:{textTransform:"capitalize",fontWeight:"bold",color:"white"},
        tabBarStyle:{backgroundColor:"#424344"},
        tabBarIndicatorStyle:{backgroundColor:"#2583CB"},
        tabBarPressColor:"#2583CB"
      }}
      
      >
        <Tab.Screen 
        name='Clock' 
        component={Clock} 
        options={{tabBarIcon:({color,size})=>(
          <Feather name="clock" size={24} color="white" />
        ),
        tabBarIconStyle:{marginBottom:1}
        }}/>

        <Tab.Screen 
        name='Timer' 
        component={Timer} 
        options={{tabBarIcon:()=>(
          <FontAwesome5 name="hourglass-end" size={24} color="white" />
        ),
        tabBarIconStyle:{marginBottom:1}
      }}
        />

        <Tab.Screen 
        name='Stopwatch' 
        component={Stopwatch} 
        options={{tabBarIcon:()=>(
          <Entypo name="stopwatch" size={24} color="white" />
        ),
        tabBarIconStyle:{marginBottom:1}
      }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
