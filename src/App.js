import './App.css';
import './css/info.css'
import './css/about.css'
import './css/interests.css'
import './css/footer.css'
import { Info } from './components/Info'
import { About } from './components/About'
import { Interests } from './components/Interests'
import { Footer } from './components/Footer'


function App() {
  return (
    <div className="App">
      <div className="business-card">
        <main>
          <Info />
          <About />
          <Interests />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
