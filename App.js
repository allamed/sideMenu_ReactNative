import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import profile from './assets/profile.png';
// Tab ICons...

// Menu
import menu from './assets/menu.png';
import close from './assets/close.png';

// Photo
import profileImage from './assets/profile.jpeg';
import {TabButton} from "./components/TabButton";
import {Profile} from "./components/profile";
import CurrentScreen from "./screens/CurrentScreen";
import {logOutTab, tabs} from "./utils/tabs";

export default function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
      <SafeAreaView style={styles.container}>

        <View style={{ justifyContent: 'flex-start', padding: 15 }}>
          <Profile name="Allamed" profileImage={profileImage}/>

          <View style={{ flexGrow: 1, marginTop: 50 }}>
            {
              // Tab Bar Buttons....
            }
            {
              tabs.map(item=>{
              return <TabButton currentTab={currentTab} setCurrentTab={setCurrentTab} text={item.text} icon={item.icon} key={item.id}></TabButton>
              })
            }


          </View>

          <View>

            <TabButton currentTab={currentTab} setCurrentTab={setCurrentTab} text={logOutTab.text} icon={logOutTab.icon} key={logOutTab.id}></TabButton>

          </View>

        </View>

        {
          // Over lay View...
        }

        <Animated.View style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          // Transforming View...
          transform: [
            { scale: scaleValue },
            { translateX: offsetValue }
          ]
        }}>

          {
            // Menu Button...
          }

          <Animated.View style={{
            transform: [{
              translateY: closeButtonOffset
            }]
          }}>
            <TouchableOpacity onPress={() => {
              // Do Actions Here....
              // Scaling the view...
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true
              })
                  .start()

              Animated.timing(offsetValue, {
                // YOur Random Value...
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true
              })
                  .start()

              Animated.timing(closeButtonOffset, {
                // YOur Random Value...
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true
              })
                  .start()

              setShowMenu(!showMenu);
            }}>

              <Image source={showMenu ? close : menu} style={{
                width: 20,
                height: 20,
                tintColor: 'black',
                marginTop: 40,

              }}></Image>

            </TouchableOpacity>

          <CurrentScreen tabTitle={currentTab}/>


          </Animated.View>

        </Animated.View>

      </SafeAreaView>
  );
}

// For multiple Buttons...


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
