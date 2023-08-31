import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Private from './pages/Private'
import Error from './pages/Error'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/private" element={<Private />} />

        <Route path="/error" element={<Error />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
