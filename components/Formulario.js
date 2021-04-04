import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Formulario = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  // DatePicker
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  // TimePicker
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const confirmarHora = date => {
    console.warn('A date has been picked: ', date);
    hideTimePicker();
  };

  return (
    <>
      <View style={style.formulario}>
        <View>
          <Text style={style.label}>Paciente:</Text>
          <TextInput
            style={style.input}
            onChangeText={texto => console.log(texto)}
          />
        </View>

        <View>
          <Text style={style.label}>Dueño:</Text>
          <TextInput
            style={style.input}
            onChangeText={texto => console.log(texto)}
          />
        </View>

        <View>
          <Text style={style.label}>Contacto:</Text>
          <TextInput
            style={style.input}
            onChangeText={texto => console.log(texto)}
            keyboardType="numeric"
          />
        </View>

        <View>
          <Button title="Seleccionar Fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={confirmarFecha}
            onCancel={hideDatePicker}
            locale="es_ES"
            headerTextIOS="Elige una Hora"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
        </View>

        <View>
          <Button title="Seleccionar Hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={confirmarHora}
            onCancel={hideTimePicker}
            locale="es_ES"
            headerTextIOS="Elige una Hora"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
        </View>

        <View>
          <Text style={style.label}>Síntomas:</Text>
          <TextInput
            style={style.input}
            multiline
            onChangeText={texto => console.log(texto)}
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
    marginHorizontal: '2.5%',
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
