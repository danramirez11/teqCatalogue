import { RouterProvider } from "react-router-dom";
import routes from "./routes/Router";
import WppCircle from "./components/WppCircle/WppCircle";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
      <WppCircle />
    </>
  );
}

export default App;
