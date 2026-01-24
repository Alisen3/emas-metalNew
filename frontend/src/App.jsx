import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import ScrollToTop from './components/ScrollToTop';
import {
  HomePage,
  AboutPage,
  MissionVisionPage,
  ServicesPage,
  CapabilitiesPage,
  ReferencesPage,
  GalleryPage,
  CertificatesPage,
  ContactPage,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="mission-vision" element={<MissionVisionPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="capabilities" element={<CapabilitiesPage />} />
          <Route path="references" element={<ReferencesPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="certificates" element={<CertificatesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
