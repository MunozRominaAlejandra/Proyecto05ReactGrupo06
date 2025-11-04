import { useState, useEffect, useCallback} from "react";


function FormJuegos() {
    const [juegos, setJuegos] = useState([]);

    const [formulario, setFormulario] = useState({
        id: '',
        nombre: '',
        precio: '',
        tipo: '',
        plataforma: '',
        edad: '',
        estado: true,
        modificado: true
    });
    useEffect(() => {
        console.log(juegos)
    }, [juegos]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const agregarJuego = (e) => {
        e.preventDefault();
        const nuevoJuego = {
            nombre: formulario.nombre,
            precio: parseFloat(formulario.precio),
            tipo: formulario.tipo,
            plataforma: formulario.plataforma,
            edad: parseInt(formulario.edad),
        };
        setJuegos([...juegos, nuevoJuego]);
        setFormulario({
            id: '',
            nombre: '',
            precio: '',
            tipo: '',
            plataforma: '',
            edad: '',
            estado: true,
            modificado: true
        });
    
    };

    const agregar_modificado = (juego_modificado) => {
        const nuevo_juego = juegos.map(j => {
            if (j.id === juego_modificado.id) {
                return juego_modificado;
            }
            return j;
        });
        setJuegos(nuevo_juego);
    }
    const modificar = useCallback((j) => {
        setJuegos(prevJuegos => prevJuegos.map(a =>
            a.id === j.id ? { ...a, modificado: !a.modificado} :a
        ));
    }, []);

    return (
        <>
            <form onSubmit={agregarJuego}>
                <input type="text" name="nombre"
                    placeholder= "Nombre" value={formulario.nombre} onChange={handleChange} required />
                <input min="0" type="number" name="precio"
                    placeholder="Precio" value={formulario.precio} onChange={handleChange} required />
                <input type="text" name="tipo"
                    placeholder="Tipo" value={formulario.tipo} onChange={handleChange} required />
                    <input type="text" name="plataforma"
                    placeholder="Plataforma" value={formulario.plataforma} onChange={handleChange} required />
                <input min="0" type="number" name="edad"
                    placeholder="Edad" value={formulario.edad} onChange={handleChange} required />
                <button type="submit">Agregar Juego</button>
            </form>
            {juegos.length > 0 &&  <h2>Lista de Juegos</h2>}
            <ul>
                {juegos.map(j => (
                    <li key={j.id}>
                      <div>
                        ID: {j.id} 
                        Nombre: {j.nombre} 
                        Precio: {j.precio}
                        Plataforma: {j.plataforma}
                        Edad: {j.edad}
                        Tipo: {j.tipo}
                      </div>
                      <button onClick={() => modificar(j)}>Modificar</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default FormJuegos;