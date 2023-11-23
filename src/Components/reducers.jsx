
const initialState = {
    hotelData: [],
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_HOTEL_DATA_SUCCESS':
        return { ...state, hotelData: action.payload, error: null };
      case 'FETCH_HOTEL_DATA_FAILURE':
        return { ...state, hotelData: [], error: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  
