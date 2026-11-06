import { Link } from 'react-router-dom';
import { site } from '../content.js';
import { usePageMeta } from '../components/blocks.jsx';

export default function NotFound() {
  usePageMeta(`Page Not Found | ${site.name}`, 'This page could not be found.');
  return (
    <section className="section">
      <div className="wrap narrow center">
        <h1 className="big">Page Not Found</h1>
        <p className="lede">The page you are looking for does not exist or has moved.</p>
        <Link className="btn outline" to="/">Back to Home</Link>
      </div>
    </section>
  );
}
