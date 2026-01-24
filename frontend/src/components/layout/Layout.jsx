import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollToTop } from '../../hooks';
import Navbar from './Navbar';
import Footer from './Footer';

const pageVariants = {
  initial: {
    opacity: 0,
    filter: 'blur(10px)',
    scale: 0.98,
  },
  in: {
    opacity: 1,
    filter: 'blur(0px)',
    scale: 1,
  },
  out: {
    opacity: 0,
    filter: 'blur(10px)',
    scale: 0.98,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.35,
};

export const Layout = () => {
  const location = useLocation();
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
