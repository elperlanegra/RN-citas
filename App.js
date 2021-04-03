import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import Cita from './components/Cita';

const App = () => {
  // definir el state de citas
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Manuel', sintomas: 'No come'},
    {id: '2', paciente: 'Redux', propietario: 'Pedro', sintomas: 'No come'},
    {id: '3', paciente: 'Native', propietario: 'Carlos', sintomas: 'No come'},
  ]);

  // Eliminar citas del state

  const eliminarPaciente = id => {
    setCitas(citasActuales => {
      return citasActuales.filter(cita => cita.id !== id);
    });
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de citas</Text>

      <Text style={styles.titulo}>{citas.length > 0 ? 'Administra tus citas' : 'No hay citas'}</Text>

      <FlatList
        data={citas}
        renderItem={({item}) => (
          <Cita item={item} eliminarPaciente={eliminarPaciente} />
        )}
        keyExtractor={cita => cita.id}
      />
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
    marginTop: 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
