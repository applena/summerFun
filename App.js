import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import * as Expo from 'expo';
import { Font } from 'expo';
import Header from './components/header';
import TaskComplete from './components/taskComplete';
import Bored from './components/bored';
import Points from './components/points';

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

  // async componentDidMount() {
  //   await Font.loadAsync({
  //     '3dumb': require('./assets/fonts/3dumb.ttf'),
  //   });
  //   this.setState({ fontLoaded: true });
  // }

  pickActivity = () => {
    console.log('in the beginning', activitySize);

    let resultIdx = Math.ceil(Math.random()*activitySize)-1;
    console.log('after resultIdx');
    this.setState({ activity: activityArr[resultIdx].key} );
    this.setState({ points: activityArr[resultIdx].value} );
    this.setState({ show:'show' });
    //this.speak(activityArr[resultIdx].key);
  };

  speak = (activity) => {
    Expo.Speech.speak(activity);
  }

  addPoints = () => {
    let totalPoints = this.state.totalPoints + this.state.points;
    this.setState({ totalPoints: totalPoints} );
    this.setState({ show:'hide' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header totalPoints={this.state.totalPoints} />
        <Bored pickActivity={this.pickActivity} />
        <Points activity={this.state.activity} points={this.state.points} show={this.state.show} />
        <TaskComplete show={this.state.show} frontLoaded={this.state.frontLoaded} addPoints={this.addPoints} />
      </View>
    );
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
