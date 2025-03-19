import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />  {/* Navbar inside Router now */}
      <Outlet />  {/* This renders FetchData or Detail */}
    </>
  );
};

export default Layout;
