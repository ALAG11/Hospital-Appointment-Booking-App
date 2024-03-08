import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import SignInWithOAuth from './App/Components/SignInWithOAuth';
import Home from './App/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';

export default function App() {
  return (
    <ClerkProvider publishableKey={"pk_test_ZGVmaW5pdGUtdGVycmFwaW4tNzguY2xlcmsuYWNjb3VudHMuZGV2JA"}>
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
    <SignedIn>
        <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>
    </SignedIn>
    <SignedOut>
     <Login/>
    </SignedOut>
    </SafeAreaView>
  </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
