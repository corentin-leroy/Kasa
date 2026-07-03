import { useParams } from 'react-router-dom'
import Slideshow from '../../components/Slideshow/Slideshow'
import logements from '../../data/logements.json'
import etoilePleine from '../../assets/etoile-pleine.svg'
import etoileVide from '../../assets/etoile-vide.svg'
import './Housing.scss'
import Collapse from '../../components/Collapse/Collapse'

function Housing() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  return (
    <main className="container housing">
      <Slideshow pictures={logement.pictures} />

      <div className="housing__header">
        <div className="housing__infos">
          <h1 className="housing__title">{logement.title}</h1>
          <p className="housing__location">{logement.location}</p>
          <div className="housing__tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="housing__tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="housing__aside">
          <div className="housing__host">
            <p className="housing__host-name">{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="housing__host-picture"
            />
          </div>

          <div className="housing__rating">
            {[1, 2, 3, 4, 5].map((rang) => (
              <img
                key={rang}
                src={rang <= Number(logement.rating) ? etoilePleine : etoileVide}
                alt=""
                className="housing__star"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="housing__collapses">
        <Collapse title="Description">
          {logement.description}
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </main>
  )
}

export default Housing