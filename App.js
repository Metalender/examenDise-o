import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Component } from 'react';
import { StatusBar } from 'react-native';
import Botones from './Componentes/Botones';
import Resultado from './Componentes/Resultado';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: "",
    }
  }

  reset = () => {
    const texto = this.state;
    this.setState({ texto: "" });
  }


  mostrar = (numeros) => {
    const num = this.state.texto + numeros;
    this.setState({ texto: num });
  };

  

  division = () => {
    const texto = this.state.texto;
    var conv = texto.match(/\d+/g);
    let total = parseInt(conv[0]);

    for (let i = 1; i < conv.length; i++) {
      total /= parseInt(conv[i]);
    }
    this.setState({ texto: total.toString() });
  }

  suma = () => {
    const texto = this.state.texto;
    var conv = texto.match(/\d+/g);
    var total = 0;
    for (var i = 0; i < conv.length; i++) {
      total += parseInt(conv[i]);
    }
    this.setState({ texto: total.toString() });
  }
  
  calcularResultado = () => {
    const texto = this.state.texto;
    if (texto.includes('+')) {
      this.suma();
    }
    if (texto.includes('-')) {
      this.resta();
    }
    if (texto.includes('/')) {
      this.division();
    }
  }

  resta = () => {
    const texto = this.state.texto;
    var conv = texto.match(/\d+/g);
    let total = parseInt(conv[0]);
    for (let i = 1; i < conv.length; i++) {
      total -= parseInt(conv[i]);
    }
    this.setState({ texto: total.toString() });
  }

  render() {
    const { texto } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.titulo}>
          <Text style={styles.textoTitulo}>Calculadora</Text>
        </View>
        <View style={styles.cotenedores}>
          <Resultado texto={texto} />
        </View>
        <View style={styles.cotenedores}>
          <Botones texto={1} mostrar={this.mostrar} />
          <Botones texto={2} mostrar={this.mostrar} />
          <Botones texto={3} mostrar={this.mostrar} />
        </View>
        <View style={styles.cotenedores}>
          <Botones texto={4} mostrar={this.mostrar} />
          <Botones texto={5} mostrar={this.mostrar} />
          <Botones texto={6} mostrar={this.mostrar} />
        </View>
        <View style={styles.cotenedores}>
          <Botones texto={7} mostrar={this.mostrar} />
          <Botones texto={8} mostrar={this.mostrar} />
          <Botones texto={9} mostrar={this.mostrar} />
        </View>
        <View style={styles.cotenedores}>
          <Botones texto={"+"} mostrar={this.mostrar} />
          <Botones texto={0} mostrar={this.mostrar} />
          <Botones texto={"-"} mostrar={this.mostrar} />
        </View>
        <View style={styles.cotenedores}>
          <Botones texto={"*"} mostrar={this.mostrar} />
          <Botones texto={"/"} mostrar={this.mostrar} />
          <Botones texto={"C"} mostrar={this.reset} />
        </View>
        <TouchableOpacity style={styles.boton} onPress={this.calcularResultado}>
          <Text style={styles.textoBoton}>=</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cotenedores: {
    flexDirection: 'row',
    padding: 2
  },
  texto: {
    textAlign: 'center',
    justifyContent: 'center',
  },
  titulo: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    margin: 5

  },
  textoTitulo: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
  },
  boton: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    width: '33%',

  },
  textoBoton: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
  },
});
