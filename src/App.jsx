import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './assets/Pages/Layout';
import Home from './assets/Pages/Home';
import Game from './assets/Pages/Games';
import AboutUs from './assets/Pages/AboutUs';
import Error from './assets/Pages/Error';

function App() {
  return (
    <Container>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Game />} />
        <Route path="/juegoestrella" element={<JuegoEstrella />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<Error />} />
      </Route>
      </Routes>
    </Container>
  );
}

export default App;
