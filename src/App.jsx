import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Toko from "./pages/Toko";

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='/toko' element={<Toko />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
