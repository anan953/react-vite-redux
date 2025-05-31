/**
 * Create the store with dynamic reducers
 */

import { configureStore, type StoreEnhancer, type Middleware } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

import { createReducer } from './rootReducer';

export function configureAppStore() {
  const sagaMiddleware = createSagaMiddleware();
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware] as Middleware[];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ] as StoreEnhancer[];

  const store = configureStore({
    reducer: createReducer(),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }).concat(middlewares) as ReturnType<
        typeof getDefaultMiddleware
      >,
    devTools: import.meta.env.DEV,
    enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(enhancers),
  });

  return store;
}
