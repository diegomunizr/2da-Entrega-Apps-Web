 import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/stylesC.css';

const CategoriaEspecifica = () => {
  const { nombreCategoria } = useParams();

  // Datos de ejemplo para productos por categoría
  const productosPorCategoria = {
  salsas: [
    { 
      id: 1, 
      nombre: "Salsa Verde", 
      precio: "100.00", 
      imagen: "/Imagenes/Salsa Verde.png",  // ← Así
      alt: "Salsa Verde" 
    },
    { 
      id: 2, 
      nombre: "Chimichurri", 
      precio: "150.00", 
      imagen: "/Imagenes/Chimichurri.png",  // ← Así
      alt: "Chimichurri" 
    }
  ],
  // ... otras categorías
};

  const productos = productosPorCategoria[nombreCategoria] || [];

  return (
    <>
      <div className="subheader">
        <div className="contenedor">
          <Link to="/categorias" className="btn-volver" aria-label="Volver">←</Link>
          <h2 className="titulo-pagina">Categoría: {nombreCategoria}</h2>
        </div>
      </div>

      <main className="contenedor seccion">
        <div className="tarjetas">
          {productos.map((producto) => (
            <ProductCard
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              alt={producto.alt}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default CategoriaEspecifica;