import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Clientes from './pages/clientes/Clientes'

function App() {

  return (
    <div className='flex flex-col items-stretch'>
      <Navbar />
      <Clientes />
      <Footer />
    </div>
  )
}

export default App
