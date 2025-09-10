import Footer from './components/footer/Footer'
import InfoCLientes from './components/infoclientes/InfoClientes'
import Navbar from './components/navbar/Navbar'
import Clientes from './pages/clientes/Clientes'
import ClientCard from './components/clientcard/ClientCard'
function App() {

  return (
    <div>
      <Navbar />
      <Clientes />
      <Footer />
      <InfoCLientes />
      <ClientCard />
    </div>
  )
}

export default App
