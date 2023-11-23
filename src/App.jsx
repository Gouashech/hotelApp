import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Authorization from './Pages/Authorization';
import LandingPage from './Pages/MainLayout';
import { Provider } from 'react-redux'; 
import store from './Components/store';





function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Authorization />} />
          <Route index path="/Home" element={<Home />} />
          <Route index path="/LandingPage" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
