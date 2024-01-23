import { StyleSheet, View, Modal, Button, Text } from "react-native";
import React, { useState } from "react";
const App = () => {
  const [showmodel,setShowModel]=useState(false);
  return (

    <View style={styles.main}>
      <Modal transparent={true} visible={showmodel} animationType={"slide"}>
        <View style={styles.centeredView}>
          <View style={styles.modelView}>
            <Text style={styles.modelText}>Welcome to Indicosmic</Text>
            <Button title="close" onPress={()=>(setShowModel(false))}/>
          </View>

        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title='Open Modal' onPress={()=>(setShowModel(true))} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modelView: {
    backgroundColor: '#8fbc8f',
    padding: 40,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5
  },
  modelText: {
    fontSize:30,
    marginBottom:20
  }
})
export default App;
