import Banner from '../../components/Banner/Banner'
import banniere from '../../assets/Background.png'

function Home() {
  return (
    <main className="container">
      <Banner image={banniere} title="Chez vous, partout et ailleurs" />
    </main>
  )
}

export default Home