import React from "react";
import Header from "../../components/header";
import './styles.css'
import Footer from "../../components/footer";

function Home() {
    return (
      <>
        <Header />
        <div className="description-container">
          <h1 className="title">Quem Somos?</h1>
          <div className="container">
            <p className="paragrafo-1">
              Bem-vindo à JVM Subempreiteira - Onde Seus Sonhos Ganham Vida! Somos mais do que uma simples empresa de construção, somos artífices de visões grandiosas e realizadores de projetos excepcionais. Com uma equipe de especialistas dedicados, estamos comprometidos em transformar cada ideia em uma obra-prima tangível.<br/>
            </p>
            <p className="paragrafo-2">
              Na JVM Subempreiteira, a excelência é nossa norma e a inovação é nossa assinatura. Desde projetos residenciais encantadores até empreendimentos comerciais imponentes, nosso compromisso com a qualidade transcende as expectativas. Cada tijolo é colocado com precisão, cada detalhe é cuidadosamente considerado, garantindo que cada projeto seja uma expressão autêntica de qualidade duradoura.<br/>
            </p>
            <p className="paragrafo-3">
              Nossa abordagem transparente e colaborativa coloca você no centro de cada decisão. Ao escolher a JVM Subempreiteira, você está escolhendo parceria, compromisso e resultados excepcionais. Seja a construção de seu lar dos sonhos, a renovação de um espaço comercial ou o desenvolvimento de um projeto inovador, estamos prontos para superar suas expectativas.<br/>
            </p>
            <p className="paragrafo-4">
              Descubra a diferença que a paixão pela construção pode fazer. Junte-se a nós na jornada de transformar suas visões em realidade. JVM Subempreiteira - Construindo Seus Sonhos, Construindo o Futuro!<br/>
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  export default Home;