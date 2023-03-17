import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './autorDetalle.css'
const AutorDetalle = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [autor, setAutor] = useState({})

    useEffect(() => {

        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/autor/${id}`);
            setAutor(respuesta.data);
        }

        getData();

    }, [id])

    const adoptarAutor = async (id) => {
        const res = await axios.delete(`${process.env.REACT_APP_API_URL}/pets/${id}`)
        console.log(res.data)
        navigate('/');
    }

    return (
        <div className='container'>
            <div className='container-head'>
            <div className='encabezado'>
                    <div>
                        <h1>Pet Shelter</h1>
                        <h3>Details about: {autor.petName}</h3>
                    </div>
                    <div className='backhome'>
                        <Link to='/'>back to home</Link>
                        <button className='btn' onClick={() => adoptarAutor(autor._id)}>Adopt</button>
                    </div>
                </div>
            </div>
            <div className='columna-detalles'>
                <div className="container-items-detalles">
                    <p className="card-text">Type: </p>
                </div>
            </div>
        </div>
    )
}

export default AutorDetalle