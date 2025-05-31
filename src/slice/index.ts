import { createSlice } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from '@/utils/redux-injectors';
import { globalSaga } from './saga';
import type { GlobalState } from './types';

export const initialState: GlobalState = {
  loading: true,
};

const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    initApp() {},
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { actions: globalActions } = slice;

export const useGlobalSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: globalSaga });
  return { actions: slice.actions };
};
