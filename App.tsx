import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screen/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';


const Stack = createStackNavigator();


const App = () => {
  const [currentRoute, setCurrentRoute] = useState("login");

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={currentRoute}>
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
