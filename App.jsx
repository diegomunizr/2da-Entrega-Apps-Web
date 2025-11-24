import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalogo from './pages/Catalogo';
import Categorias from './pages/Categorias';
import CategoriaEspecifica from './pages/CategoriaEspecifica';
import Footer from './components/Footer';
import './styles/stylesPP.css';
import './styles/stylesC.css';
import './styles/stylesE.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/categoria/:nombreCategoria" element={<CategoriaEspecifica />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;