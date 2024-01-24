import React from "react";
import './styles.css'
import LogoJvm from '../../assets/jvm-logo.png'

function Footer() {
    return(
        <>
          <div className="footer-container">
            <img className="logo" src={LogoJvm} alt={LogoJvm}/>
            <p  className="copyright">Todos os direitos reservados ©</p>
          </div> 
        </>
        
    );
}

export default Footer;
