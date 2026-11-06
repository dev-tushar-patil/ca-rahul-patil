import { Link } from 'react-router-dom';
import { site, about, servicePages } from '../content.js';
import { CallToAction, Hero, InfoCard, SectionTitle, usePageMeta } from '../components/blocks.jsx';

export default function About() {
  usePageMeta(`${about.metaTitle} | ${site.name}, ${site.role} in ${site.city}`, about.intro);
  return (
    <>
      <Hero crumb="About" title="About the" accent="Practice" intro={about.intro} image="about-hero.jpg" />
      <section className="section">
        <div className="wrap split top">
          <div>
            <h2 className="big">{about.heading}</h2>
            {about.paragraphs.map((text) => <p className="lede" key={text}>{text}</p>)}
          </div>
          <aside className="panel">
            <h3>Areas of Practice</h3>
            <ul className="ticks">
              {servicePages.map((p) => <li key={p.key}><Link to={p.path}>{p.nav}</Link></li>)}
            </ul>
          </aside>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <SectionTitle>What We Stand For</SectionTitle>
          <div className="cards four">{about.values.map((item) => <InfoCard key={item.title} item={item} />)}</div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
