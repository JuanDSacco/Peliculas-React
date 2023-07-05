import './App.css';
import MovieProvider from './context/MovieContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import FilterMovies from './components/Routes/FilterMovies/FilterMovies';
import Sagas from './components/Sagas/Sagas';
import SagaSeñor from './components/Routes/SagaSeñor/SagaSeñor'
import SagaHP from './components/Routes/SagaHP/SagaHP'
import SagaSW from './components/Routes/SagaSW/SagaSW';
import Nosotros from './components/Routes/Nosotros/Nosotros';
import ItemDetailContainer from './components/Routes/ItemDetailContainer/ItemDetailContainer';
import SWDetailContainer from './components/Routes/SWDetailContainer/SWDetailContainer';
import HPDetailContainer from './components/Routes/HPDetailContainer/HPDetailContainer';
import ESDLADetailContainer from './components/Routes/ESDLADetailContainer/ESDLADetailContainer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <MovieProvider>
            <Routes>
              <Route path='/' element={<FilterMovies/>}/> 
              <Route path='/sagas' element={<Sagas/>}/>
              <Route path='/sagas/el-señor-de-los-anillos' element={<SagaSeñor/>}/>
              <Route path='/sagas/harry-potter' element={<SagaHP/>}/>
              <Route path='/sagas/star-wars' element={<SagaSW/>}/>
              <Route path='/detalles' element={<Nosotros/>}/>
              <Route path='/:id' element={<ItemDetailContainer/>}/>
              <Route path='/sagas/star-wars/:id' element={<SWDetailContainer/>}/>
              <Route path='/sagas/harry-potter/:id' element={<HPDetailContainer/>}/>
              <Route path='/sagas/el-señor-de-los-anillos/:id' element={<ESDLADetailContainer/>}/>
            </Routes>
          </MovieProvider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
