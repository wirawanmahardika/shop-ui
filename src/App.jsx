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
import Profile from "./pages/Profile";

const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='/toko' element={<Toko />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/profile' element={<Profile />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
