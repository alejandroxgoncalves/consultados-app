import { useNavigation } from 'expo-router';
import React from 'react';
import { Button, Image, ImageBackground, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from '../styles/index';
import EstadisticasBox from './components/EstadisticasBox';
import preguntas from './data/preguntas';
import { setPreguntas } from './store/partidaSlice';

import fondo from '../assets/fondo.png'; // asegurate de que exista
import logo from '../assets/logo.png'; // asegurate de que exista

export default function Inicio() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const empezarJuego = () => {
    dispatch(setPreguntas(preguntas));
    navigation.navigate('juego');
  };

  return (
    <ImageBackground source={fondo} style={styles.bgImage} resizeMode="cover"> 
      <View style={styles.containerSafe}>
        <Image source={logo} style={styles.titleImg} />

        <EstadisticasBox />

        <View style={styles.btnNext}>
          <Button title="Empezar a jugar" onPress={empezarJuego} />
        </View>
      </View>
    </ImageBackground>
  );
}
