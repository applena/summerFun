import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import * as Expo from 'expo';
import { Font } from 'expo';
import LinearGradient from 'react-native-linear-gradient';

const activityArr = [{key:'go for a walk', value:2}, {key:'clean your room', value:10}, {key:'watch a movie', value:1}, {key:'have a water balloon fight', value:3}, {key:'go to the park', value:3}, {key:'paint a picture', value:2}, {key:'read a book', value:2}, {key:'go out for ice cream', value:1}, {key:'go to flying circus', value:2}, {key:'play a board game', value:4}, {key:'go to the beach', value:5}, {key:'have a tea party', value:2}, {key:'play hide and seak', value:1}, {key:'make a treasure hunt for a friend', value:3}];
const activitySize = activityArr.length;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activity: '',
      points: 0,
      totalPoints: 0,
      show: 'hide',
      fontLoaded: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      '3dumb': require('./assets/fonts/3dumb.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  pickActivity = () => {
    console.log('in the beginning', activitySize);

    let resultIdx = Math.ceil(Math.random()*activitySize)-1;
    console.log('after resultIdx');
    this.setState({ activity: activityArr[resultIdx].key} );
    this.setState({ points: activityArr[resultIdx].value} );
    this.setState({ show:'show' });
    this.speak(activityArr[resultIdx].key);
    console.log('after calling the speak function');
  };

  speak = (activity) => {
    console.log('before the speak',activity);
    Expo.Speech.speak(activity);
    console.log('after the speak');
  }

  addPoints = () => {
    let totalPoints = this.state.totalPoints + this.state.points;
    this.setState({ totalPoints: totalPoints} );
    this.setState({ show:'hide' });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          { this.state.fontLoaded ? (
            <Text style={styles.h}>Activity Finder</Text>
            ) : null
          }
      
          <Text>You have {this.state.totalPoints} points</Text>
        </View>
        <TouchableHighlight 
          underlayColor="white"
          onPress={this.pickActivity}
          >
          <View style={styles.buttonBored}>
          { this.state.fontLoaded ? (
            <Text style={styles.h}>
              I'm Bored
            </Text>
            ) : null
          }
          </View>
        </TouchableHighlight>
        <View style={styles.container} style={styles[this.state.show]}>
          <Text style={styles.activity}>{this.state.activity}</Text>
          <Text style={styles.points}>This activity is worth: {this.state.points} points</Text>
        </View>
        <View style={styles[this.state.show]}>
          <TouchableHighlight 
            onPress={this.addPoints}
          >
            <View style={styles.buttonComplete}>
          { this.state.fontLoaded ? (
            <Text style={styles.h}>
              Task Complete
            </Text>
            ) : null
          }
          </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h:{
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: '3dumb',
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
