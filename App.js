import React from 'react';
import { StyleSheet, Text, View, Button, Header } from 'react-native';
import * as Expo from 'expo';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activity: '',
      points: 0,
      totalPoints: 0
    }
  }

  pickActivity = () => {
    let activityArr=[{key:'go for a walk', value:2}, {key:'clean your room', value:10}, {key:'watch a movie', value:1}, {key:'have a water balloon fight', value:3}, {key:'go to the park', value:3}, {key:'paint a picture', value:2}, {key:'read a book', value:2}, {key:'go out for ice cream', value:1}, {key:'go to flying circus', value:2}, {key:'play a board game', value:4}, {key:'go to the beach', value:5}, {key:'have a tea party', value:2}, {key:'play hide and seak', value:1}, {key:'make a treasure hunt for a friend', value:3}];

    let resultIdx = Math.ceil(Math.random()*activityArr.length);
    this.setState({ activity: activityArr[resultIdx].key} );
    this.setState({ points: activityArr[resultIdx].value} );
    this.speak(activityArr[resultIdx]);
  };

  speak = (activity) => {
    Expo.Speech.speak(activity);
  }

  addPoints = (activity) => {
    let totalPoints = this.state.totalPoints + this.state.points;
    this.setState({ totalPoints: totalPoints} );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Activity Finder</Text>
          <Text>You have {this.state.totalPoints}</Text>
        </View>
        <Button onPress={this.pickActivity} title="I'm bored" />
        <View>
          <Text>{this.state.activity}</Text>
          <Text>This activity is worth: {this.state.points}</Text>
        </View>
        <Button onPress={this.addPoints} title="I'm done!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    marginTop: 20
  },
  header: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    height: 50
  }
});
