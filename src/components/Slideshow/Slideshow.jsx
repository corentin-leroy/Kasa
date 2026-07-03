import { useState } from 'react'
import fleche from '../../assets/Fleche-slideshow.svg'
import './Slideshow.scss'

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const length = pictures.length

  const goNext = () => {
    setCurrentIndex((currentIndex + 1) % length)
  }

  const goPrevious = () => {
    setCurrentIndex((currentIndex - 1 + length) % length)
  }

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Photo ${currentIndex + 1}`}
        className="slideshow__image"
      />

      {length > 1 && (
        <>
          <img
            src={fleche}
            alt="Précédent"
            className="slideshow__arrow slideshow__arrow--left"
            onClick={goPrevious}
          />
          <img
            src={fleche}
            alt="Suivant"
            className="slideshow__arrow slideshow__arrow--right"
            onClick={goNext}
          />
          <span className="slideshow__counter">
            {currentIndex + 1}/{length}
          </span>
        </>
      )}
    </div>
  )
}

export default Slideshow