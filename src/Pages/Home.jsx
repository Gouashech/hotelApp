// Home.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotelData } from '../Components/actions';

function Home() {
  const dispatch = useDispatch();
  const hotelData = useSelector((state) => state.hotelData);

  useEffect(() => {
    dispatch(fetchHotelData());
  }, [dispatch]);

  return (
    <div>
      {hotelData.length > 0 ? (
        hotelData.map((hotel) => (
          <div key={hotel.id}>
            <h2>{hotel.name}</h2>
            {/* Додайте інші властивості готелю, які ви хочете відобразити */}
          </div>
        ))
      ) : hotelData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <p>No hotel data available</p>
      )}
    </div>
  );
}

export default Home;
