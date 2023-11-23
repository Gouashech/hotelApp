// store.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducers';
import { rootSaga } from './sagas';

// Створення middleware для Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Створення сховища з використанням configureStore
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

// Запуск саги
sagaMiddleware.run(rootSaga);

export default store;
