import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {CardHub} from "./pages/card-hub";
import 'bootstrap/dist/css/bootstrap.css'


const router = createBrowserRouter([
    {
        path: '/',
        element: <div>
            <h1>Seja bem vindo</h1>
        </div>
    },
    {
        path: '/card-hub',
        element: <CardHub/>
    }
])
function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
