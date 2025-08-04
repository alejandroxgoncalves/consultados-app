import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles/index'; // ajustá si cambia la ruta

export default function PreguntaCard({ pregunta, opcionesDeshabilitadas, onResponder }) {
  if (!pregunta || !Array.isArray(pregunta.options)) return null;

  return (
    <View style={styles.boxQuestion}>
      <Text style={styles.textQuestion}>{pregunta.question}</Text>

      {pregunta.options.map((op, index) => {
        let estiloOpcion = styles.boxOption;

        if (opcionesDeshabilitadas.includes(op)) {
          estiloOpcion = [
            styles.boxOption,
            styles.boxOptionIncorrect, // o boxOptionCorrect si querés marcar la correcta
          ];
        }

        return (
          <TouchableOpacity
            key={index}
            style={estiloOpcion}
            onPress={() => onResponder(op)}
            disabled={opcionesDeshabilitadas.includes(op)}
          >
            <Text style={styles.textOption}>{op}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
