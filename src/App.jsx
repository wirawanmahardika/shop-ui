import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
