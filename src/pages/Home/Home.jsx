import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import banniere from '../../assets/background.webp'
import logements from '../../data/logements.json'
import './Home.scss'

function Home() {
  return (
    <main className="container">
      <Banner image={banniere} title="Chez vous, partout et ailleurs" />
      <section className="gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </section>
    </main>
  )
}

export default Home