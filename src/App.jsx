import './App.css';
import FetchData from './components/FetchData';
import Detail from './components/Detail';
import Layout from './components/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <FetchData /> },
      { path: '/detail/:id', element: <Detail /> },
    ],
  },
],
{
  basename: '/multiverse-character-viewer',  // Add basename here
}
);

function App() {
  return <RouterProvider router={router} />;
}
 
export default App;
