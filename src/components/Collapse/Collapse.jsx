import { useState } from 'react'
import fleche from '../../assets/Fleche-collapse.svg'
import './Collapse.scss'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <div
        className={`collapse__header ${isOpen ? 'collapse__header--open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="collapse__title">{title}</h3>
        <img
          src={fleche}
          alt=""
          className={`collapse__arrow ${isOpen ? 'collapse__arrow--open' : ''}`}
        />
      </div>
      <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
        <div className="collapse__content-inner">{children}</div>
      </div>
    </div>
  )
}

export default Collapse