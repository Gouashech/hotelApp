import { eventChannel } from 'redux-saga';
import { put, call, take, takeLatest } from 'redux-saga/effects';
import { onValue, ref } from 'firebase/database';
import { fetchHotelDataSuccess, fetchHotelDataFailure } from './actions';
import { db } from '../firebase';


function createFirebaseChannel() {
  return eventChannel((emit) => {
    const hotelInfoRef = ref(db, '/');

   
    const unsubscribe = onValue(hotelInfoRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const mockData = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        emit(fetchHotelDataSuccess(mockData));
        console.log(mockData)
      } else {
        emit(fetchHotelDataFailure('No data available'));
      }
    });

    
    return () => unsubscribe();
  });
  
}



function* fetchHotelDataSaga() {
  const channel = yield call(createFirebaseChannel);

  try {
    while (true) {
      const action = yield take(channel);
      yield put(action);
    }
  } finally {
    
    channel.close();
  }
}



export function* rootSaga() {
  yield takeLatest('FETCH_HOTEL_DATA', fetchHotelDataSaga);
}
