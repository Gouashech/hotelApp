import { eventChannel } from 'redux-saga';
import { loginSuccess, loginFailure } from './actions';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { put, call, take, takeLatest } from 'redux-saga/effects';
import { onValue, ref } from 'firebase/database';
import { fetchHotelDataSuccess, fetchHotelDataFailure } from './actions';
import { db } from '../firebase';


// Функція для створення каналу подій
function createFirebaseChannel() {
  return eventChannel((emit) => {
    const hotelInfoRef = ref(db, '/');

    // Додайте слухача onValue та відправте дані через канал
    const unsubscribe = onValue(hotelInfoRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const mockData = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        emit(fetchHotelDataSuccess(mockData));
        
      } else {
        emit(fetchHotelDataFailure('No data available'));
      }
    });

    // Поверніть функцію для відписки від каналу
    return () => unsubscribe();
  });
  
}


// Сага, яка слухає канал подій
function* fetchHotelDataSaga() {
  const channel = yield call(createFirebaseChannel);

  try {
    while (true) {
      const action = yield take(channel);
      // console.log('Received data:', action)
      yield put(action);
    }
  } finally {
    // Обробка відписки в разі завершення саги
    channel.close();
  }
}

function* loginSaga(action) {
  const { email, password } = action.payload;
  const auth = getAuth();

  try {
    const userCredential = yield call(
      signInWithEmailAndPassword,
      auth,
      email,
      password
    );
    
    // userCredential.user зберігає інформацію про користувача
    yield put(loginSuccess(userCredential.user));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* authSaga() {
  
  yield takeLatest('LOGIN_REQUEST', loginSaga);
}

export function* rootSaga() {
  yield takeLatest('FETCH_HOTEL_DATA', fetchHotelDataSaga);
}
