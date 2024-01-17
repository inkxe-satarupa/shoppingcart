import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import Product from './components/product';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RouterLayout from './components/RouterLayout';


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"  element={<RouterLayout/>}>
      <Route index element={<Dashboard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  ))

  return (
    <div className='App'>
      <RouterProvider router = {router} />
      
      </div> 
  );
}

export default App;
