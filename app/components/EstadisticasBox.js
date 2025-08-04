import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from '../../styles/index'; // ajustá si cambia la ruta

export default function EstadisticasBox() {
  const estadisticas = useSelector(state => state.estadisticas);

  return (
    <View style={styles.boxQuestion}>
      <Text style={styles.textQuestion}>Total de partidas jugadas: {estadisticas.jugadas}</Text>
      <Text style={styles.textQuestion}>Partidas ganadas: {estadisticas.ganadas}</Text>
      <Text style={styles.textQuestion}>Partidas perdidas: {estadisticas.perdidas}</Text>
    </View>
  );
}

