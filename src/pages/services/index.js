import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import './styles.css'

function Services() {
    return (
      <>
        <Header />
        <div className="container">
          <h1>Serviços prestados por nossa empresa:</h1>
          <div className="servicos">
            <div className="demolicao">
              <h2>DEMOLIÇÃO:</h2>
              <p>Demolição de alvenaria</p>
              <p>Demolição e descarte de materiais</p>
              <p>Demolição de forro</p>
              <p>Demolição de drywall</p>
              <p>Entre Outros</p>
            </div>
            <div className="civil">
              <h2>CIVIL:</h2>
              <p>Execução de piso</p>
              <p>Execução de drywall</p>
              <p>Execução de forro</p>
              <p>Execução de Contrapiso</p>
              <p>Entre Outros</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  export default Services;