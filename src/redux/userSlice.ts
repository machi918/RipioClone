import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

interface initialContentState {
  name: string;
  rpc: number;
  pesos: number;
  mail: string;
}

const initialState: initialContentState = {
  name: '',
  rpc: 0,
  pesos: 0,
  mail: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // setUserData: (state, action: PayloadAction<{name: string; rpc: number}>) => {
    //   state.generalCoins = action.payload;
    // },
    setUserData: (state, action: PayloadAction<initialContentState>) => {
      state.rpc = action.payload.rpc;
      state.pesos = action.payload.pesos;
      state.name = action.payload.name;
      state.mail = action.payload.mail;
    },
    updateUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateRPC: (state, action: PayloadAction<number>) => {
      state.rpc += action.payload;
    },
    updatePesos: (state, action: PayloadAction<number>) => {
      state.pesos += action.payload;
    },
    resetUserData: () => initialState,
  },
});

export const {setUserData, resetUserData, updateRPC, updatePesos, updateUserName} = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
