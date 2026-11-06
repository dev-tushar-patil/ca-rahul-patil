import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { servicePages } from './content.js';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import ServicePage from './pages/ServicePage.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

// Goes to the top on a new page, or to the section named in the URL hash.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <Layout>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        {servicePages.map((page) => (
          <Route key={page.key} path={page.path} element={<ServicePage page={page} />} />
        ))}
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
