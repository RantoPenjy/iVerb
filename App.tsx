/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HomeScreen from "./src/Home";
import AboutScreen from "./src/About";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator() ;

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    options={{
                        headerStyle: {
                            backgroundColor: "#1E305E",
                            shadowColor: "#333",
                            shadowOffset: { width: 0, height: 5 },
                            shadowOpacity: 0.5,
                            shadowRadius: 10,
                        },
                        headerTitleStyle: {
                            color: "#fff",
                            fontWeight: "bold",
                        },
                        headerTintColor: "#fff",
                        headerTitle: "A PROPOS",
                        headerTitleAlign: "center",
                    }}
                    name="About"
                    component={AboutScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
