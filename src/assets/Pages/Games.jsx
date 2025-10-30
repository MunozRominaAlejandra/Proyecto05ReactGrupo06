import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import sonido from '../sounds/sonido.mp3';
import FormJuegos from "../Components/FormJuegos.jsx";
function Games () {
    const navegacion = useNavigate();

    const ejecutarSonido = () => {

     const audio = new Audio(sonido);
     audio.play()};
    
    const manejarClickImagen = () => {
        ejecutarSonido();
        navegacion("/");

    };
    return (
        <>
         <p>Lorem ipsum
            <Link to="/contact">dolor</Link>
            sit amet consectetur adipisicing elit. Reprehenderit magnam nostrum error sapiente, 
            ducimus voluptates quibusdam, accusantium voluptas dolore similique, voluptate nihil 
            alias voluptatem deleniti, tempora, quos, quasi. Doloribus, voluptates
         </p>
        <h1> <Link to="/"> HOME </Link></h1>
        <img src={logo} width="100%" onClick={ manejarClickImagen } />
        <h1> Cargar Juegos </h1>
        <FormJuegos />
        <h1> Lista de Juegos </h1>
        </>
    )
};

export default Games;