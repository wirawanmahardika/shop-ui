import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Toko from "./pages/Toko";
import CartPage from "./pages/Cart";

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='/toko' element={<Toko />} />
      <Route path='/cart' element={<CartPage />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
