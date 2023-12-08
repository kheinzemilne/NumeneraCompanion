import React from 'react';
import TaskResolutionScreen from './screens/TaskResolutionScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SalvageScreen from './screens/SalvageScreen';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator initialRouteName='Task' screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: '#C2B280'}}}>
    <Tab.Screen name="Task" component={TaskResolutionScreen} options={{
      tabBarLabel: 'Task',
      tabBarIcon: () => (<MaterialCommunityIcons name="sword-cross" size={24} color="#570987" />)
    }} />
    <Tab.Screen name="Salvage" component={SalvageScreen} options={{
      tabBarLabel: 'Salvage',
      tabBarIcon: () => (<FontAwesome name="gears" size={24} color="#570987" />)
    }} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <TabNavigation />
  </NavigationContainer>
);

export default App;