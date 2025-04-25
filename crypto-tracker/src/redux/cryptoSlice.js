import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cryptos: [],
  status: 'idle',
  error: null
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCryptos: (state, action) => {
      state.cryptos = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    updateCrypto: (state, action) => {
      const { id, changes } = action.payload;
      const cryptoIndex = state.cryptos.findIndex(c => c.id === id);
      if (cryptoIndex !== -1) {
        state.cryptos[cryptoIndex] = { 
          ...state.cryptos[cryptoIndex], 
          ...changes 
        };
      }
    },
  },
});

export const { setCryptos, setStatus, setError, updateCrypto } = cryptoSlice.actions;

export const fetchCryptoData = () => async (dispatch) => {
  dispatch(setStatus('loading'));
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 5,
        page: 1,
        sparkline: false,
      },
    });
    dispatch(setCryptos(response.data));
    dispatch(setStatus('succeeded'));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setStatus('failed'));
  }
};

export default cryptoSlice.reducer;