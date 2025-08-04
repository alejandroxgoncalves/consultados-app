import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  preguntas: [],
  actual: 0,
  intentos: 2,
};

const partidaSlice = createSlice({
  name: 'partida',
  initialState,
  reducers: {
    setPreguntas: (state, action) => {
      state.preguntas = action.payload;
      state.actual = 0;
      state.intentos = 2;
    },
    siguientePregunta: (state) => {
      state.actual += 1;
      state.intentos = 2;
    },
    restarIntento: (state) => {
      state.intentos -= 1;
    },
    resetPartida: () => initialState,
  },
});

export const { setPreguntas, siguientePregunta, restarIntento, resetPartida } = partidaSlice.actions;
export default partidaSlice.reducer;
