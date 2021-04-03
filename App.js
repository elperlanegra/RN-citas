import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const App = () => {
  // definir el state de citas
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Manuel', sintomas: 'No come'},
    {id: '2', paciente: 'Redux', propietario: 'Pedro', sintomas: 'No come'},
    {id: '2', paciente: 'Native', propietario: 'Carlos', sintomas: 'No come'},
  ]);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de citas</Text>

      <FlatList
        data={citas}
        renderItem={({item}) => (
          <View>
            <Text>{item.paciente}</Text>
          </View>
        )}
        keyExtractor={cita => cita.id}
      />

      {/*citas.map(cita => (
          <View>
            <Text>{cita.paciente}</Text>
          </View>
      ))*/}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },

  titulo: {
    color: '#fff',
    marginTop: 25,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
