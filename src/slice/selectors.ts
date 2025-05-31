import type { RootState } from '@/store/RootState';
import { initialState } from '.';
import { createSelector } from '@reduxjs/toolkit';

const selectGlobal = (state: RootState) => state.global || initialState;

export const selectLoading = createSelector(selectGlobal, state => state.loading);
