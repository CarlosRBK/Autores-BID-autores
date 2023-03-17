import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import './autor.css'
const Autor = () => {
  const [autor, setAutor] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams()

  useEffect(() => {
    
    const getData = async () => {
      const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/autors`);
      setAutor(respuesta.data);
    }

    getData();
  
  }, [id]);

  const deleteAutor = async (id) => {
    const res = await axios.delete(`${process.env.REACT_APP_API_URL}/autor/${id}`)
    console.log(res.data)
    navigate('/');
}

  return (
    <>
    <div>
      <div className='encabezado'>
        <h1>Favorite Authors</h1>
        <Link to='/autor/new'>add an autor</Link>
      </div>
      <h3>We have quotes by:</h3>
      <table className="table table-striped table-hover table-bordered mt-5">
          <thead>
            <tr className='bg-light'>
              <th>Author</th>
              <th>Actions avaible</th>
            </tr>
          </thead>
          <tbody>
            { autor.map( (aut, index) => <tr key={index} >
              <td>{ aut.name }</td>
              <td>
                <Link className='btn btn-dark ' to={`/autor/${aut._id}/edit`}> Edit</Link>   
                <button className='btn btn-primary mx-2' onClick={() => deleteAutor(aut._id)}>Delete</button>
              </td>
            </tr> ) }
          </tbody>
        </table>
    </div>


    </>
  )
}

export default Autor