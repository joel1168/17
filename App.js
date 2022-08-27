
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ContactUsPage from './screens/ContactUsPage';

const Stack = createNativeStackNavigator();

function createData() {
   
  // unique ID form firebase
              // const newKey = push(child(ref(database), 'users')).key;
  
              set(ref(db, 'users/' + username), {          
                username: username,
                email: email  
              }).then(() => {
                // Data saved successfully!
                alert('data updated!');    
            })  
                .catch((error) => {
                    // The write failed...
                    alert(error);
                });
    }

 
export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen}/>
        
      </Stack.Navigator>
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
