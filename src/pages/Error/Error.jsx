import { Link } from 'react-router-dom'
import './Error.scss'

function Error() {
  return (
    <main className="container error">
      <h1 className="error__title">404</h1>
      <p className="error__message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error__link">Retourner sur la page d'accueil</Link>
    </main>
  )
}

export default Error