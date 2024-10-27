import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CompaniesList from './components/CompaniesList';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/list' element={<CompaniesList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;