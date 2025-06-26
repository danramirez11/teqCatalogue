import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Containers from "../pages/Containers/Containers";
import ContainerGlassOnly from "../pages/Containers/GlassOnly";

const routes = createHashRouter([
  { path: "/", element: <Home /> },
  { path: "/envases-plasticos", element: <Containers /> },
  { path: "/envases-vidrio", element: <ContainerGlassOnly /> }, // Assuming same component for glass containers
]);

export default routes;
