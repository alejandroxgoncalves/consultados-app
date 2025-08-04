import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Button, Image, ImageBackground, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../styles/index';
import PreguntaCard from './components/PreguntaCard';
import { partidaGanada, partidaPerdida } from './store/estadisticasSlice';
import { resetPartida, restarIntento, siguientePregunta } from './store/partidaSlice';

import fondo from '../assets/fondo.png';
import logo from '../assets/logo.png';

export default function Juego() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const partida = useSelector(state => state.partida);
  const [mensaje, setMensaje] = useState('');
  const [opcionesDeshabilitadas, setOpcionesDeshabilitadas] = useState([]);
  const [finalizado, setFinalizado] = useState(false);

  const preguntaActual = partida.preguntas[partida.actual];

  useEffect(() => {
    setMensaje('');
    setOpcionesDeshabilitadas([]);
    setFinalizado(false);
  }, [partida.actual]);

  const manejarRespuesta = (respuesta) => {
    if (finalizado) return;

    if (respuesta === preguntaActual.correctAnswer) {
      setMensaje('¡Correcto!');
      dispatch(partidaGanada());
      setFinalizado(true);
    } else {
      setOpcionesDeshabilitadas(prev => [...prev, respuesta]);
      dispatch(restarIntento());

      if (partida.intentos - 1 <= 0) {
        setMensaje('¡Perdiste!');
        dispatch(partidaPerdida());
        setFinalizado(true);
      }
    }
  };

  const avanzar = () => {
    if (partida.actual + 1 >= partida.preguntas.length) {
      navigation.navigate('index');
      dispatch(resetPartida());
    } else {
      dispatch(siguientePregunta());
    }
    setFinalizado(false);
  };

  const terminar = () => {
    if (!finalizado) {
      dispatch(partidaPerdida());
      setFinalizado(true);
    }
    navigation.navigate('index');
    dispatch(resetPartida());
    setFinalizado(false);
  };

  if (!preguntaActual) {
    return (
      <ImageBackground source={fondo} style={styles.bgImage}>
        <View style={styles.containerSafe}>
          <Image source={logo} style={styles.titleImg} />
          <Text style={styles.textQuestion}>No hay preguntas cargadas</Text>
          <View style={styles.btnNext}>
            <Button title="Volver" onPress={() => navigation.navigate('index')} />
          </View>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={fondo} style={styles.bgImage}>
      <View style={styles.containerSafe}>
        <Image source={logo} style={styles.titleImg} />

        {/* Contador de preguntas */}
        <Text style={styles.textQuestion}>
          Pregunta {partida.actual + 1} de {partida.preguntas.length}
        </Text>

        <PreguntaCard
          pregunta={preguntaActual}
          opcionesDeshabilitadas={opcionesDeshabilitadas}
          onResponder={manejarRespuesta}
        />

        {mensaje !== '' && <Text style={styles.textQuestion}>{mensaje}</Text>}

        {mensaje === '¡Correcto!' && (
          <View style={styles.btnNext}>
            <Button
              title={partida.actual + 1 >= partida.preguntas.length ? 'Terminar' : 'Siguiente pregunta'}
              onPress={partida.actual + 1 >= partida.preguntas.length ? terminar : avanzar}
            />
          </View>
        )}

        {mensaje === '¡Perdiste!' && partida.intentos <= 0 && (
          <View style={styles.btnNext}>
            <Button title="Terminar juego" onPress={terminar} />
          </View>
        )}
      </View>
    </ImageBackground>
  );
}
