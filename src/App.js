import './App.css';
import { Hero } from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import { Reasons } from './components/Reasons/Reasons';
import Testinomials from './components/Testinomials/Testinomials';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testinomials />
      <Join />
    </div>
  );
}

export default App;
