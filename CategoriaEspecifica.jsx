import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../styles/stylesC.css';

const CategoriaEspecifica = () => {
  const { nombreCategoria } = useParams();
  
  console.log('Categoría recibida:', nombreCategoria); // Para debug

  // Datos de ejemplo para productos por categoría - MÁS COMPLETOS
  const productosPorCategoria = {
    artesanias: [
      { 
        id: 1, 
        nombre: "Calabaza Artesanal", 
        precio: "200.00", 
        imagen: "/Imagenes/Calabaza.png", 
        alt: "Calabaza Artesanal" 
      },
      { 
        id: 2, 
        nombre: "Artesanía 1", 
        precio: "150.00", 
        imagen: "/Imagenes/Chimichurri.png", 
        alt: "Artesanía 1" 
      }
    ],
    alimentos: [
      { 
        id: 3, 
        nombre: "Chimichurri", 
        precio: "150.00", 
        imagen: "/Imagenes/Chimichurri.png", 
        alt: "Chimichurri" 
      },
      { 
        id: 4, 
        nombre: "Cavazos", 
        precio: "80.00", 
        imagen: "/Imagenes/Cavazos.png", 
        alt: "Cavazos" 
      },
      { 
        id: 5, 
        nombre: "Doña Matcha", 
        precio: "180.00", 
        imagen: "/Imagenes/Dona Macha.png", 
        alt: "Doña Matcha" 
      },
      { 
        id: 6, 
        nombre: "Miel", 
        precio: "60.00", 
        imagen: "/Imagenes/Miel.png", 
        alt: "Miel" 
      },
      { 
        id: 7, 
        nombre: "Salsa Verde", 
        precio: "100.00", 
        imagen: "/Imagenes/Salsa Verde.png", 
        alt: "Salsa Verde" 
      }
    ],
    servicios: [
      { 
        id: 8, 
        nombre: "Servicio 1", 
        precio: "300.00", 
        imagen: "/Imagenes/Cavazos.png", 
        alt: "Servicio 1" 
      },
      { 
        id: 9, 
        nombre: "Servicio 2", 
        precio: "250.00", 
        imagen: "/Imagenes/Miel.png", 
        alt: "Servicio 2" 
      }
    ]
  };

  // Obtener productos de la categoría o array vacío si no existe
  const productos = productosPorCategoria[nombreCategoria] || [];
  
  console.log('Productos encontrados:', productos); // Para debug

  return (
    <>
      <div className="subheader">
        <div className="contenedor">
          <Link to="/categorias" className="btn-volver" aria-label="Volver">←</Link>
          <h2 className="titulo-pagina">Categoría: {nombreCategoria}</h2>
        </div>
      </div>

      <main className="contenedor seccion">
        {productos.length > 0 ? (
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
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '40px',
            color: '#666'
          }}>
            <p>No hay productos en la categoría "{nombreCategoria}"</p>
            <Link 
              to="/categorias"
              style={{
                background: '#e67e22',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                cursor: 'pointer',
                marginTop: '10px',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Volver a categorías
            </Link>
          </div>
        )}
        
        {/* Contador de productos */}
        {productos.length > 0 && (
          <p style={{ textAlign: 'center', color: '#666', marginTop: '20px' }}>
            {productos.length} producto{productos.length !== 1 ? 's' : ''} en esta categoría
          </p>
        )}
      </main>
    </>
  );
};

export default CategoriaEspecifica;
