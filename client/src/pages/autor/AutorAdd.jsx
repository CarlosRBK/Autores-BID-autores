import React from 'react'
import AutorForm from '../../components/AutorForm'
import axios from 'axios';
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';

const AutorAdd = () => {
  const initialValues = {
    name: '',
  }
const navigate = useNavigate();

  const crearAutor = async(values, actions) => {

    try {
        const respuesta = await axios.post(`${process.env.REACT_APP_API_URL}/autor`, values);
        console.log(respuesta);
        if (respuesta.status === 200){
            Swal.fire({
                icon: 'success',
                title: 'GENIAL!!!',
                text: `Se ha agregado ${respuesta.data.name} perfectamente!`,
            });

            actions.resetForm(initialValues);
            navigate('/')
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
        <h1>Favorite Authors</h1>
        <Link to='/'>Home</Link>
      </div>
        <hr />
        <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6">
                <AutorForm 
                  initialValues={initialValues}
                  botonTexto="Add"
                  onSubmit={crearAutor}
                />
            </div>
        </div>
    </>
  )
}

export default AutorAdd