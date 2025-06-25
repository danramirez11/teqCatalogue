import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Containers from "../pages/Containers/Containers";

const routes = createHashRouter([
  { path: "/", element: <Home /> },
  { path: "/envases", element: <Containers /> },
]);

export default routes;
