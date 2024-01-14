import React from "react";
import {
    RouterProvider,
    createBrowserRouter,
    defer,
} from "react-router-dom";

import LandingPage from "./Components/Landing/Landing.js";
// import Dashboard from "./Components/Dashboard/Dashboard.js";
import NotFound from "./Components/Common/NotFound.js";
// import Layout from "./Components/Home/Layout/Layout.js";
// import ContactUs from "./Components/Home/ContactPage/ContactUs.js";
// import SignIn from "./Components/Auth/SignIn.js";
// import Register from "./Components/Auth/Register.js";
//
import Layout from "./Components/Layout/Layout.js";

import {useSelector} from "react-redux";


// const DashboardLoader = async () => {
//     const resp = store.dispatch(getStockList());
//     return defer({
//         stockList: await resp
//     })
// }
//
const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            errorElement: <NotFound />,
            id: "root",
            children: [
                { index: true, element: <LandingPage /> },
                { path: "*", element: <NotFound/>}
            ],
        },
    ]);

    return (
        <>
                <RouterProvider router={router}/>
        </>
    );
};

export default App;

