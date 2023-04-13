import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import { Children } from "react";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
		],
	},
]);

export default router;
