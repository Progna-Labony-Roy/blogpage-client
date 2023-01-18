import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Router/Router';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
       <RouterProvider router={routes}></RouterProvider>
       <Toaster></Toaster>
    </div>
  );
}

export default App;
