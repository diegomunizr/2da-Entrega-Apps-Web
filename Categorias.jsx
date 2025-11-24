import { Link } from 'react-router-dom';
import '../styles/stylesC.css';

const Categorias = () => {
  const categoriasData = [
  {
    nombre: "Artesanías",
    imagenes: [
      "/Imagenes/Chimichurri.png",
      "/Imagenes/Cavazos.png",        // ← Actualiza estas rutas
      "/Imagenes/Dona Macha.png",
      "/Imagenes/Calabaza.png"
    ]
  },
  {
    nombre: "Alimentos", 
    imagenes: [
      "/Imagenes/Miel.png",
      "/Imagenes/Salsa Verde.png",    // ← Actualiza estas rutas
      "/Imagenes/Chimichurri.png",    // Puedes repetir imágenes temporalmente
      "/Imagenes/Cavazos.png"
    ]
  },
  {
    nombre: "Servicios",
    imagenes: [
      "/Imagenes/Dona Macha.png",
      "/Imagenes/Calabaza.png",       // ← Actualiza estas rutas  
      "/Imagenes/Miel.png",
      "/Imagenes/Salsa Verde.png"
    ]
  }
  ];

  return (
    <>
      <div className="subheader">
        <div className="contenedor">
          <Link to="/" className="btn-volver" aria-label="Volver">←</Link>
          <h2 className="titulo-pagina">Categorías</h2>
        </div>
      </div>

      <main className="grilla-categorias">
        <div className="contenedor">
          {categoriasData.map((categoria, index) => (
            <section key={index} className="bloque-cat">
              <Link to={`/categoria/${categoria.nombre.toLowerCase()}`}>
                <div className="cuadricula">
                  {categoria.imagenes.map((imagen, imgIndex) => (
                    <div key={imgIndex} className="celda">
                      <img src={imagen} alt={`${categoria.nombre} ${imgIndex + 1}`} className="imagen-tarjeta" />
                    </div>
                  ))}
                </div>
                <p className="titulo-cat">{categoria.nombre}</p>
              </Link>
            </section>
          ))}
        </div>
      </main>
    </>
  );
};

export default Categorias;