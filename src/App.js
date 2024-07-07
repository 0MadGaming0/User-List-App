import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import SearchUser from './components/SearchUser';
import Viewall from './components/Viewall';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddUser/>}/>
      <Route path="/search" element={<SearchUser/>}/>
      <Route path="/view" element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
