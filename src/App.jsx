import React, { useState } from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Menu />
        <Routes>
          {/* Ruta principal con tres secciones en Inicio */}
          <Route path="/" element={
            <div>
              <section>
                <h2>Bienvenida</h2>
                <p>Bienvenido a mi espacio en línea, donde la fotografía y el arte visual se encuentran para contar historias, capturar momentos y expresar emociones. Mi nombre es [Tu Nombre], y soy un fotógrafo/artista visual especializado en [tu especialidad, ej. retratos, paisajes, fotografía conceptual, etc.]. A lo largo de los años, he tenido el privilegio de explorar diversos géneros visuales, y aquí compartiré mis mejores trabajos, mis reflexiones sobre el arte de capturar imágenes y mi proceso creativo.</p> <br/>
                <p>Si estás buscando inspiración, aprender nuevas técnicas o explorar proyectos visuales, este es el lugar perfecto para ti.</p> <br/>
                <img src="https://sme.goiania.go.gov.br/conexaoescola/wp-content/uploads/2023/07/image-16.png" alt="Descripción de la imagen" />
              </section>
            </div>
          } />

          <Route path="/acerca" element={
            <div>
              <section>
                <h2>Acerca de</h2>
                <p>Soy Sofía, una fotógrafa y artista visual con 20 años de experiencia en el mundo de la fotografía. Desde que tomé mi primera cámara, supe que el arte visual sería mi forma de expresión. Mi enfoque se basa en capturar la belleza de lo cotidiano, y a lo largo de mi carrera, he trabajado con una variedad de clientes, desde marcas de moda hasta artistas locales.</p> <br/>

                <p><h4>Mi Filosofía Creativa</h4>
                Creo que cada imagen tiene el poder de contar una historia, evocar emociones y transmitir algo más allá de lo que vemos a simple vista. Mi objetivo es capturar esos momentos fugaces y convertirlos en algo eterno.</p> <br/>

                <p><h4>Técnicas y Estilo</h4>
                Mi estilo fotográfico se caracteriza por composición minimalista. A lo largo de los años, he experimentado con diversas técnicas, pero siempre trato de mantener mi enfoque en la autenticidad y la conexión con el sujeto.</p>
              </section>
            </div>
          } />
          
          <Route path="/contacto" element={<Formulario />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Seccion({ titulo }) {
  return (
    <section>
      <h2>{titulo}</h2>
      <p>Contenido de la sección {titulo}.</p>
    </section>
  );
}

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Formulario enviado con los siguientes datos: ${JSON.stringify(formData)}`);
    // Aquí se podría manejar el envío de datos a un servidor
  };

  return (
    <section>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu email"
            required
          />
        </div>
        
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Tu mensaje"
            required
          />
        </div>
        
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default App;
