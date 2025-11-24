import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/stylesPP.css';

const Catalogo = () => {
  // Datos hardcoded de productos
  const [productos] = useState([
    {
      id: 1,
      nombre: "Chimichurri",
      precio: "150.00",
      imagen: "/Imagenes/Chimichurri.png",
      alt: "Chimichurri"
    },
    {
      id: 2,
      nombre: "Cavazos",
      precio: "80.00",
      imagen: "/Imagenes/Cavazos.png",
      alt: "Cavazos"
    },
    {
      id: 3,
      nombre: "Doña Matcha",
      precio: "180.00",
      imagen: "/Imagenes/Dona Macha.png",
      alt: "Doña Matcha"
    },
    {
      id: 4,
      nombre: "Miel",
      precio: "60.00",
      imagen: "/Imagenes/Miel.png",
      alt: "Miel"
    },
    {
      id: 5,
      nombre: "Calabaza",
      precio: "200.00",
      imagen: "/Imagenes/Calabaza.png",
      alt: "Calabaza"
    },
    {
      id: 6,
      nombre: "Salsa Verde",
      precio: "100.00",
      imagen: "/Imagenes/Salsa Verde.png",
      alt: "Salsa Verde"
    }
  ]);

  const categorias = ["Artesanias", "Alimentos", "Servicios"];

  return (
    <main>
      {/* Categorias */}
      <section className="contenedor seccion">
        <header className="cabecera-seccion">
          <h2>Categorias</h2>
        </header>

        <nav className="categorias" aria-label="Categorias">
          {categorias.map((categoria, index) => (
            <button key={index} className="etiqueta" type="button">
              {categoria}
            </button>
          ))}
        </nav>
      </section>

      {/* Destacados */}
      <section className="contenedor seccion">
        <header className="cabecera-seccion">
          <h2>Destacados</h2>
        </header>

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
      </section>
    </main>
  );
};

export default Catalogo;