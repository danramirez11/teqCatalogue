import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Containers from "../pages/Containers/Containers";
import ContainerGlassOnly from "../pages/Containers/GlassOnly";
import ChemicalsPage from "../pages/Chemicals/Chemicals";

const routes = createHashRouter([
  { path: "/", element: <Home /> },
  { path: "/envases-plasticos", element: <Containers /> },
  { path: "/envases-vidrio", element: <ContainerGlassOnly /> },
  { path: "/quimicos", element: <ChemicalsPage /> },
]);

export default routes;
