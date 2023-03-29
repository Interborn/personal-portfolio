import { Navbar, Hero, TechStack, Projects, Experience, Education, Footer } from './containers';
import './index.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </div>
  )
}

export default App;