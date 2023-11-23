import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";

export default class Botones extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { texto } = this.props;
    return (
      <TouchableOpacity style={styles.boton} onPress={() => this.props.mostrar(texto)} >
        <Text style={styles.textoBoton}>{texto}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  boton: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    width:'33%',
    padding: 15

  },
  textoBoton: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
  },
});
