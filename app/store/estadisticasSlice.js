import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jugadas: 0,
  ganadas: 0,
  perdidas: 0,
};

const estadisticasSlice = createSlice({
  name: 'estadisticas',
  initialState,
  reducers: {
    partidaGanada: (state) => {
      state.jugadas++;
      state.ganadas++;
    },
    partidaPerdida: (state) => {
      state.jugadas++;
      state.perdidas++;
    },
    resetEstadisticas: (state) => {
      state.jugadas = 0;
      state.ganadas = 0;
      state.perdidas = 0;
    },
  },
});

export const {
  partidaGanada,
  partidaPerdida,
  resetEstadisticas,
} = estadisticasSlice.actions;

export default estadisticasSlice.reducer;
