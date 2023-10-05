import { Layout } from 'antd';
import './App.css'
import Navbar from './components/Navbar';
import Body from './components/Body';
import Bottom from './components/Bottom';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tenant from './pages/Tenant';
import AddTenant from './pages/AddTenant';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tenant/:id' element={<Tenant />} />
        <Route path='/tenant/add' element={<AddTenant />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
