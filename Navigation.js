import * as React from 'react';
import Home from "../screen/Home"
import Login from '../screen/Login'
import Products from '../screen/Products';
import Feedback from '../screen/Feedback';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function Navigation() {
     const TabNavigator = () => {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-home'
                                : 'ios-home';
                        }
                        if (route.name === 'products') {
                            iconName = focused
                                ? 'md-wallet-outline'
                                : 'md-wallet-outline';
                        }
                        else if (route.name === 'Feedback') {
                            iconName = focused ? 'ios-settings' : 'ios-settings';
                        }
                       
                        return <Ionicons name={iconName} size={30} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'purple',
                    inactiveTintColor: 'grey',
                }}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Products" component={Products} />
                <Tab.Screen name="Feedback" component={Feedback} />
                
            </Tab.Navigator>
        )
    }
  return (
  
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="Home" component={TabNavigator} />
              <Stack.Screen name="Products" component={Products} />
                 
      </Stack.Navigator>
    </NavigationContainer>

  );
}

