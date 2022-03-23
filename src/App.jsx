import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Keranjang from './pages/Keranjang';
import './App.css';
import Agenda from './pages/Agenda';

function App() {
  return (
    <div className="flex justify-center p-6 w-screen h-screen bg-gray-200 overflow-y-auto">
      <div>
        <div className="flex items-center justify-center mb-4 text-xs text-gray-600 font-semibold uppercase tracking-wide">
          <Link
            className="mx-2 px-4 py-2 rounder-x1 hover:bg-gray-100 transition- all ease-in-out"
            to="/"
          >
            Home
          </Link>
          <Link
            className="mx-2 px-4 py-2 rounder-x1 hover:bg-gray-100 transition- all ease-in-out"
            to="/agenda"
          >
            Agenda
          </Link>
          <Link
            className="mx-2 px-4 py-2 rounder-x1 hover:bg-gray-100 transition- all ease-in-out"
            to="/keranjang"
          >
            Keranjang
          </Link>
        </div>

        <div className="p-6 w-full bg-white rounded x1 shadow-lg">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/agenda" element={<Agenda/>}></Route>
            <Route path="/keranjang" element={<Keranjang/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;