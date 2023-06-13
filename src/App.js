import './App.css';
import MovieProvider from './context/MovieContext';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import FilterMovies from './components/Routes/FilterMovies/FilterMovies';
import Sagas from './components/Sagas/Sagas';
import SagaSeñorContainer from './components/Routes/SagaSeñorContainer/SagaSeñorContainer';
import SagaSWContainer from './components/Routes/SagaSWContainer/SagaSWContainer';
import SagaHPContainer from './components/Routes/SagaHPContainer/SagaHPContainer';
import Nosotros from './components/Routes/Nosotros/Nosotros';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <MovieProvider>
            <Routes>
              <Route path='/' element={<FilterMovies/>}/> 
              <Route path='/sagas' element={<Sagas/>}/>
              <Route path='/sagas/el-señor-de-los-anillos' element={<SagaSeñorContainer/>}/>
              <Route path='/sagas/star-wars' element={<SagaSWContainer/>}/>
              <Route path='/sagas/harry-potter' element={<SagaHPContainer/>}/>
              <Route path='/nosotros' element={<Nosotros/>}/>
            </Routes>
          </MovieProvider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
