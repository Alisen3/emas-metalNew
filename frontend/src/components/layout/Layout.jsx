import { Outlet } from 'react-router-dom';
import { useScrollToTop } from '../../hooks';
import Navbar from './Navbar';
import Footer from './Footer';
import TopLoadingBar from './TopLoadingBar';

export const Layout = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col">
      <TopLoadingBar />
      <Navbar />
      <main className="flex-1 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
