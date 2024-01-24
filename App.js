import { View, Text, StyleSheet } from 'react-native'

const App = () => {

  return (
  <View style={styles.container}>
    <Text style={styles.text}>Bienvenidos</Text>
  </View>

  )
}

export default App 

const styles= StyleSheet.create({
container:{
  backgroundColor: "#000",
  flex:1
},
text:{
  color:"white"
}

})