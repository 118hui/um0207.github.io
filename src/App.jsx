import Header from './components/Header';
import Hero from './components/Hero';
import Reserve from './components/Reserve';
import Serve from './components/Serve';
import Gallery from './components/Gallery';
import Course from './components/Course';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='App'>
      <>
        <Header />
        <Hero />
        <Reserve />
        <Serve />
        <Gallery />
        <Course />
        <Footer />
      </>
    </div>
  );
};

export default App;
