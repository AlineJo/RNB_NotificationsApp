

import React from 'react';

import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


const App: () => Node = () => {

const  onPressHandler = () =>{


  }

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View >


        <TouchableOpacity onPress={onPressHandler}>
          <View style={styles.buttonContiner}>
            <Text style={styles.buttonText}>Display Notification</Text>
          </View>
        </TouchableOpacity>


      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dAdAdA',

  },

  buttonContiner:{
    width:172,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    borderRadius:4,
  },

  buttonText:{
    color:'#FFF',
    fontWeight:'bold',
  }


});

export default App;
