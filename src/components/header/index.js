import LogoJvm from '../../assets/jvm-logo.png'
import './styles.css'
import { Link } from "react-router-dom";
import React from 'react';

function Header() {
    return (
        <> 
            <header>
                <div className='logo-container'>
                    <img src={LogoJvm} alt={LogoJvm}/>
                </div>
                <div>
                    <nav>
                        <ul>
                            <Link style={{ textDecoration: 'none' }} to='/'>
                            <li>Página Inicial</li>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to='/contato'>
                            <li>Contato</li>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to='/servicos'>
                            <li>Serviços</li>
                            </Link>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
  }
  
  export default Header;