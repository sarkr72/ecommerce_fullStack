import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container />
      <HomeScreen />
      <Container />
      </main>
   <Footer />
    </div>
  );
}

export default App;
