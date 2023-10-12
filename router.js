import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "page/user/login";
import RegPage from "page/user/registration";
import FormPage from "page/form";
import ClientList from "page/client/list";
import SimpleFormPage from "page/client/list/htmlForm";
import TableMedia from "components/Table/TableMedia";
import StarsRate from "components/Form/StarsRate";
import ProgressBar from "components/practiceExercises/ProgressBar";
import Pagination from "components/Pagination";
import PaginationsPage from "page/Paginations";


const routers = [
    {
        path: "/",
        element: <LoginPage/>
    },
    {
        path: '/account',
        element: <RegPage/>
    },
    {
        path: '/pagination',
        element: <PaginationsPage/>
    },
    {
        path: '/form',
        element: <FormPage/>
    },
    {
        path: '/client/list',
        element: <ClientList/>
    },
    {
        path: '/simplePage',
        element: <SimpleFormPage/>
    },
    {
        path: '/table',
        element: <TableMedia/>
    },
    {
        path: '/stars',
        element: <StarsRate amount={12}/>
    },
    {
        path: '/progressbar',
        element: <ProgressBar value={50} max={100} />
    }
];

function Router() {
    return (
        <RouterProvider router={createBrowserRouter(routers)}/>
    )
}

export default Router;