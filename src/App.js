import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login'
import Admin from './pages/admin'
import NotFound from './pages/notfound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Admin/>} errorElement={<NotFound/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
