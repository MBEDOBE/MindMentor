import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NavBar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import Landing from './pages/home/Landing';
import Resources from './pages/resources/Resources';
import './App.css';
import ProfilePage from './pages/profile/Profile';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';


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
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/resources",
        element: <Resources/>
      },
      {
        path: "/profile",
        element: <ProfilePage/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
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
