import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cart, Home, LetsOrder, Love, Profile } from '../page';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigator from '../components/molecules/ButtomTabNavigator';
import EditedProfile from '../page/EditedProfile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTabNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Love" component={Love} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const Route = () => {
  return (
    <Stack.Navigator initialRouteName="Lets Order">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edited Profile"
        component={EditedProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Lets Order"
        component={LetsOrder}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Route;
