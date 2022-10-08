import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';

//Paginas
import Home from './pages/Home';
import Cadastrar from './pages/Cadastrar';
import Listar from './pages/Listar';
import Grafico from './pages/Grafico';
import Mapa from './pages/Mapa';

//Componentes
import Header from './components/Header'

function App() {

  return (

    <div>

       <Router>
        <Header/>
         <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/cadastrar' element={<Cadastrar />}> </Route>
            <Route path='/listar' element={<Listar />}> </Route>
            <Route path='/grafico' element={<Grafico />}> </Route>
            <Route path='/mapa' element={<Mapa />}> </Route>
         </Routes>
       </Router>

    </div>

  );

}

export default App
