import { Component } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default class Resultado extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      const { texto } = this.props;
      return (
        <View style={styles.result}>
          <Text style={styles.textoResult}>{texto}</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    result: {
      flex:1,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'gray',
        height: 60,
        width:'100%'
      },
      textoResult: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign:"center"
      },
  });
  