import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './autorForm.css'


const autorErrores = Yup.object().shape({
    name: Yup.string()
        .min(3, '*El nombre debe tener como minimo 3 caracteres')
        .max(70, '*No se puede superar los 70 caracteres.')
        .required('Campo Obligatorio'),
});

const AutorForm = ({initialValues, botonTexto, onSubmit}) => {


  return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={autorErrores}
        >
            {({ errors, touched }) => (
                <Form>
                    <div className='mb-3'>
                        <div className='form-row'>
                            <label htmlFor="name" className='form-label'>Name:</label>
                            <Field name="name" className="form-control" />
                            {touched.name && errors.name && <div className="ms-3 mt-1 text-danger">{errors.name}</div>}
                            <div className='mt-4'>
                                <button className="btn btn-primary">{botonTexto} autor</button>
                                <button className="btn btn-danger mx-1">Cancel</button>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default AutorForm