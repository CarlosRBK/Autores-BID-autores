import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import AutorDetalle from "../pages/autor/AutorDetalle";
import AutorEditar from "../pages/autor/AutorEditar";
import Autor from "../pages/autor/Autor";
import AutorAdd from "../pages/autor/AutorAdd";
import NotFound from "../pages/NotFound";


export default createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <Autor />
            },
            {
                path:'autor',
                element: <Autor />
            },
            {
                path:'autor/new',
                element: <AutorAdd />
            },
            {
                path:'autor/:id',
                element: <AutorDetalle />
            },
            {
                path:'autor/:id/edit',
                element: <AutorEditar />
            }
        ]
    }
]);