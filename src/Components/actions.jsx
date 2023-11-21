
export const fetchHotelData = () => ({ type: 'FETCH_HOTEL_DATA' });
export const fetchHotelDataSuccess = (data) => ({ type: 'FETCH_HOTEL_DATA_SUCCESS', payload: data });
export const fetchHotelDataFailure = (error) => ({ type: 'FETCH_HOTEL_DATA_FAILURE', payload: error });
