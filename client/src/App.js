import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from './components/Register';
import Login from './components/Login';
// import Home from './Components/Home';
import Admin from './components/Admin';
import AppRoutes from "./components/Routes";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          {/* <Route path='/home' element={<Home />}/> */}
          <Route path='/admin' element={<Admin />}/>

        </Routes>
        <AppRoutes />
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
