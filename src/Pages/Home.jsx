import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelData } from '../Components/actions';

function Home() {
  const dispatch = useDispatch();
  const hotelData = useSelector((state) => state.hotelData);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchHotelData());
  }, []);

  

  
  return (
    <div>
      {error && <p>Error: {error}</p>}
      {hotelData.map((hotel) => (
        <div key={hotel.id}>
          <h2>{hotel.name}</h2>
          
        </div>
      ))}
    </div>
  );
}

export default Home;
