import { Navbar, Hero, TechStack, Experience, Footer } from './containers';
import './index.css';

function App() {

  return (
    <div className="App w-full">
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <Footer />
    </div>
  )
}

export default App;