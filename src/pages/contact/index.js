import React from "react";
import Header from "../../components/header";
import './styles.css'
import Footer from "../../components/footer";

function Contact() {
    return (
      <>
        <Header />
          <div className="container">
            <h1 className="titulo-principal">Para entrar em contato conosco, acesse os canais de atendimento abaixo:</h1>
            <h2 className="titulo">Email:</h2>
            <h3 className="conteudo">antonioabelardoobras@hotmail.com</h3>
            <h2 className="titulo">Whatsapp:</h2>
            <h3 className="conteudo">(21) 97532-4556</h3>
            <a href="https://wa.me/5521975324556">
              <button className="orcamento">Solicite Já! Seu Orçamento.</button>
            </a>
          </div>
          <Footer />
      </>

    );
  }
  
  export default Contact;