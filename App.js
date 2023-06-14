import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,ImageBackground} from 'react-native';
 const imageUrl = 'https://softmark.mx/wp-content/uploads/2021/07/logobco1.png';


export default function App() {
  return (
    <View style={styles.container}>
        <ImageBackground
        source={require('./assets/fondo.jpg')} // Reemplaza con la ruta correcta de tu imagen
        style={styles.imageBackground}
      >
            <Image source={{ uri: imageUrl }} style={{marginTop:52,width: 310, height: 64 }} />
      <Text style={styles.text}>Image Generator</Text>
      <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            placeholder="Ingresa un texto"
            placeholderTextColor="#999999"
          />
          <TouchableOpacity
            style={styles.button}>
            <Text style={styles.buttonText}>Presionar</Text>
          </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455546',
  },
  text:{
    fontSize:43,
    fontWeight:'bold',
    color:'#fff',
    marginBottom:22,
    marginTop:32,
  },
    input: {
    width: '60%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color:'#fff',
    borderRadius: 5,
    paddingHorizontal: 10,

  },
  button: {
    backgroundColor: 'gray',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputs:{
    width:'100%',
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems:'center'
  },
    imageBackground: {
    flex: 1,
    resizeMode: 'cover',
      alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
