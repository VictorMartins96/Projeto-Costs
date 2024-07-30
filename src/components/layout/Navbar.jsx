import {Link} from 'react-router-dom'

import Container from './Container'

import Styles from './Navbar.module.css'

import logo from '../../img/costs_logo.png'

function Navbar () {
    return (
        <nav  className={Styles.Navbar}>
            <Container>
                <Link to="/">
                <img src={logo} alt="Costs" />
                </Link>
              <ul className={Styles.list}>
                  <li className={Styles.item}><a href="/">Home</a></li>
                  <li className={Styles.item}><a href="/Projects">Projetos</a></li>
                  <li className={Styles.item}><a href="/contact">Contatos</a></li>
                  <li className={Styles.item}><a href="/company">Empresa</a></li>
              </ul>                
            </Container>           
          </nav>
    )
}

export default Navbar