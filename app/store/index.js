import { configureStore } from '@reduxjs/toolkit';
import estadisticasReducer from './estadisticasSlice';
import partidaReducer from './partidaSlice';

const store = configureStore({
  reducer: {
    estadisticas: estadisticasReducer,
    partida: partidaReducer,
  },
});

export default store;
