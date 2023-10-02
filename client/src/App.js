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
import Chat from './pages/chat/Chat';
import MentorProfile from './components/profiles/MentorProfile';
import { useContext } from 'react';
import { Context } from './context/Context';

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
        element: <Resources />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/mentor",
        element: <MentorProfile />,
      },
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
  {

    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);
function App() {
  const { User } = useContext(Context);
  return (
    <div className="app">
      <RouterProvider router={router}>

        <Layout User={User} />
      </RouterProvider>
    </div>
  );
}

export default App;
