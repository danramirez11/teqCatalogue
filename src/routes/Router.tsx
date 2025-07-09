import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import Containers from "../pages/Containers/Containers";
import ContainerGlassOnly from "../pages/Containers/GlassOnly";
import ChemicalsPage from "../pages/Chemicals/Chemicals";
import IndExtract from "../pages/Chemicals/IndExctract";
import Entrepeneurs from "../pages/Chemicals/Entrepeneurs";
import LidsOnly from "../pages/Containers/LidsOnly";

const routes = createHashRouter([
  { path: "/", element: <Home /> },
  { path: "/envases-plasticos", element: <Containers /> },
  { path: "/envases-vidrio", element: <ContainerGlassOnly /> },
  { path: "/extractos-industriales", element: <IndExtract /> },
  { path: "/quimicos", element: <ChemicalsPage /> },
  { path: "/herramientas-emprender", element: <Entrepeneurs /> },
  { path: "/tapas", element: <LidsOnly /> },
]);

export default routes;
