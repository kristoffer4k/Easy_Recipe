import './App.scss';
import Header from './components/Header';
import Main from './components/Main'; 
import Section from './components/Section'; 
import Contest from './components/Contest'; 
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Section />
      <Contest />
      <Carousel />
    </div>
  );
}

export default App;
