import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const Formulario = () => {
  return (
    <>
      <View style={style.formulario}>
        <View>
          <Text style={style.label}>Paciente:</Text>
          <TextInput style={style.input} 
            onChangeText={(texto) => console.log(texto)}
          />
        </View>

        <View>
          <Text style={style.label}>Dueño:</Text>
          <TextInput style={style.input} 
            onChangeText={(texto) => console.log(texto)}
          />
        </View>


        <View>
          <Text style={style.label}>Contacto:</Text>
          <TextInput style={style.input} 
            onChangeText={(texto) => console.log(texto)}
            keyboardType='numeric'
          />
        </View>

        <View>
          <Text style={style.label}>Síntomas:</Text>
          <TextInput style={style.input} 
            multiline
            onChangeText={(texto) => console.log(texto)}
          />
        </View>

      </View>
    </>
  );
};

const style = StyleSheet.create({
  formulario: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: '2.5%'
  },

  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },

  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
    fontSize: 18,

  },
});

export default Formulario;
