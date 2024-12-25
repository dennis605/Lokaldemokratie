import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

// Import screens
import HomeScreen from '../components/Home/HomeScreen';
import NewsScreen from '../components/News/NewsScreen';
import DiscussionsScreen from '../components/Discussions/DiscussionsScreen';
import ProfileScreen from '../components/Profile/ProfileScreen';

type RootTabParamList = {
  Home: undefined;
  News: undefined;
  Discussions: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof MaterialIcons.glyphMap = 'help';

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'News':
              iconName = 'article';
              break;
            case 'Discussions':
              iconName = 'forum';
              break;
            case 'Profile':
              iconName = 'person';
              break;
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: 'Lokale Demokratie' }}
      />
      <Tab.Screen 
        name="News" 
        component={NewsScreen}
        options={{ title: 'Nachrichten' }}
      />
      <Tab.Screen 
        name="Discussions" 
        component={DiscussionsScreen}
        options={{ title: 'Diskussionen' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ title: 'Profil' }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
