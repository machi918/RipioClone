import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';

interface initialContentState {
  name: string;
  rpc: number;
}

const initialState: initialContentState = {
  name: 'Matias',
  rpc: 12,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // setUserData: (state, action: PayloadAction<{name: string; rpc: number}>) => {
    //   state.generalCoins = action.payload;
    // },
    reset: () => initialState,
  },
});

export const {reset} = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
