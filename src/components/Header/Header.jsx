import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './Header.scss'

function Header() {
  return (
    <header className="header container">
      <img src={logo} alt="Logo Kasa" className="header__logo" />
      <nav className="header__nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header