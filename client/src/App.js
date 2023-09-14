import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NavBar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import Landing from './pages/home/Landing';
import './App.css';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
