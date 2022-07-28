import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CoinsGeneralInterface, NewsInterface, NewsGeneralInterface} from '../service/https/coins.api';
import {RootState} from './store';

interface initialContentState {
  generalCoins: CoinsGeneralInterface[];
  news: NewsInterface[] | null;
}

const initialState: initialContentState = {
  generalCoins: [],
  news: null,
};

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setGeneralCoins: (state, action: PayloadAction<CoinsGeneralInterface[]>) => {
      state.generalCoins = action.payload;
    },
    setNews: (state, action: PayloadAction<NewsGeneralInterface>) => {
      state.news = action.payload.results;
    },
    addPesos: (state, action: PayloadAction<number>) => {
      state.generalCoins[0].has = state.generalCoins[0].has + action.payload;
    },
    reset: () => initialState,
  },
});

export const {setGeneralCoins, setNews, reset, addPesos} = coinsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCoins = (state: RootState) => state.coins;

export default coinsSlice.reducer;
