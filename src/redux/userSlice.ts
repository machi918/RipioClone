import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserData} from '../service/firebase/users.service';
import {RootState} from './store';

interface initialContentState {
  userData: UserData;
  uid: string | null;
}

const initialState: initialContentState = {
  userData: {
    name: 'Invitado',
    rpc: 0,
    pesos: 0,
    mail: '',
  },
  uid: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setUserData: (state, action: PayloadAction<initialContentState>) => {
      state.userData = action.payload.userData;
      state.uid = action.payload.uid;
    },
    updateUserName: (state, action: PayloadAction<string>) => {
      state.userData.name = action.payload;
    },
    updateRPC: (state, action: PayloadAction<number>) => {
      state.userData.rpc += action.payload;
    },
    updatePesos: (state, action: PayloadAction<number>) => {
      state.userData.pesos += action.payload;
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
