import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AutorForm from '../../components/AutorForm'
import axios from 'axios';
import Swal from 'sweetalert2'

const AutorEditar = () => {
    const navigate = useNavigate();

    const initialValues = {
        name: ''
      }

    const { id } = useParams()
    const [autor, setAutor] = useState(initialValues)

    useEffect(() => {

        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/autor/${id}`);
            setAutor(respuesta.data);
        }

        getData();

    }, [id])

    const actualizarAutor = async(values, actions) => {

        try {
            const respuesta = await axios.put(`${process.env.REACT_APP_API_URL}/autor/${id}`, values);
            console.log(respuesta);
            if (respuesta.status === 200){
                Swal.fire({
                    icon: 'success',
                    title: 'EXITO',
                    text: `Se ha actualizado los datos de ${respuesta.data.petName}!`,
                });

                navigate('/autor');
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Ops que mal!!!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
      }

    return (
        <>
            <div className='encabezado'>
                <div>
                    <h1>Favorite Authors</h1>
                    <Link to='/'>Home</Link>
                    <h4 className='mt-3'>Edit this autor</h4>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-lg-4 col-sm-12 col-md-6">
                    <AutorForm 
                        initialValues={autor}
                        botonTexto="Edit"
                        onSubmit={actualizarAutor}
                    />
                </div>
            </div>
        </>
    )
}

export default AutorEditar