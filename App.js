import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MoodRatingScreen from "./screens/moodRatingScreen";
import LoginScreen from "./screens/loginScreen"
import ActivityScreen from "./screens/activityScreen"
import PredicitonScreen from "./screens/predictionScreen"
import SolutionScreen from "./screens/solutionScreen"

const Tab = createBottomTabNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Rating') {
                        iconName = focused
                            ? 'star'
                            : 'star-outline';
                    } else if (route.name === 'Login') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }
                    if (route.name === 'Prediction') {
                        iconName = focused ? 'bar-chart' : 'bar-chart-outline';
                    } else if (route.name === "Solution"){
                      iconName = focused ? "bulb" : "bulb-outline";
                    }
                    if (route.name === 'Activity') {
                        iconName = focused ? 'accessibility' : 'accessibility-outline';
                    }
                    
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Rating" component={MoodRatingScreen} />
            <Tab.Screen name="Activity" component={ActivityScreen} />
            <Tab.Screen name="Prediction" component={PredicitonScreen} />
            <Tab.Screen name="Solution" component={SolutionScreen} />
            
        </Tab.Navigator>
    </NavigationContainer>
  );
}

