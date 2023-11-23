
export const fetchHotelData = () => ({ 
    type: 'FETCH_HOTEL_DATA' 
    });

export const fetchHotelDataSuccess = (data) => ({ 
    type: 'FETCH_HOTEL_DATA_SUCCESS', 
    payload: data 
    });

export const fetchHotelDataFailure = (error) => ({ 
    type: 'FETCH_HOTEL_DATA_FAILURE', 
    payload: error 
});

export const loginRequest = (email, password) => ({
    type: 'LOGIN_REQUEST',
    payload: { email, password },
});
      
export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
});
      
export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,});