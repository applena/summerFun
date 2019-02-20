import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import * as Expo from 'expo';
import { Font } from 'expo';

class Bored extends React.Component{
  render() {
    return(
      <TouchableHighlight 
        underlayColor="white"
        onPress={this.props.pickActivity}
        >
        <View style={styles.buttonBored}>
          <Text style={styles.h}>
            I'm Bored
          </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  h:{
    fontSize: 40,
    fontWeight: 'bold',
    // fontFamily: '3dumb',
    paddingBottom: 15,
    textAlign: 'center'
  },
  activity: {
    alignItems: 'stretch',
    backgroundColor: '#ffffed',
    height: 100,
    fontSize: 40,
    textAlign: 'center',
    padding: 20
  },
  points: {
    alignItems: 'stretch',
    backgroundColor: '#ffffed',
    height: 40,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    marginTop: 50
  },
  header: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    height: 100
  },
  buttonBored: {
    borderColor: 'darkblue',
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomStartRadius: 25,
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTopStartRadius: 25,
    height: 200,
    backgroundColor: 'rgb(208, 179, 242)',
    fontSize: 40,
    marginTop: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  buttonComplete: {
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomStartRadius: 25,
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTopStartRadius: 25,
    height: 100,
    backgroundColor: 'rgb(208, 179, 242)',
    fontSize: 40,
    alignItems: 'stretch',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hide: {
    display: 'none'
  },
  show: {
    display: 'flex'

  }
});

export default Bored;