import { Link, useLocation } from 'react-router-dom';
import { site } from '../content.js';
import Icon from '../components/Icon.jsx';
import { telHref } from '../components/links.js';
import { CallToAction, Hero, ProcessSection, SectionTitle, usePageMeta } from '../components/blocks.jsx';

export default function ServicePage({ page }) {
  const { hash } = useLocation();
  usePageMeta(
    `${page.metaTitle} in ${site.city} | ${site.name}`,
    `${page.intro} ${site.name}, ${site.role}, ${site.location}.`,
  );
  return (
    <>
      <Hero crumb={page.nav} title={page.heroTitle} accent={page.heroAccent} intro={page.intro} image={page.image}>
        <div className="btns">
          <Link className="btn gold" to="/contact">{page.cta}<Icon name="arrow" /></Link>
          <a className="btn line" href={telHref}>Get a Consultation</a>
        </div>
      </Hero>

      <section className="section">
        <div className="wrap">
          <SectionTitle>{page.sectionTitle}</SectionTitle>
          <div className="cards">
            {page.services.map((s) => (
              <Link className="card" key={s.id} to={`#${s.id}`}>
                <Icon name={s.icon} large />
                <h3>{s.title}</h3>
                <p>{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="why-strip">
        <div className="wrap why-in">
          <h2>{page.whyTitle}<span className="rule" /></h2>
          <ul className="why-list">
            {page.why.map(([icon, label]) => <li key={label}><Icon name={icon} large /><span>{label}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionTitle>What Each Service Covers</SectionTitle>
          <div className="ledger">
            {page.services.map((s) => (
              <article className={hash === `#${s.id}` ? 'ledger-row highlight' : 'ledger-row'} id={s.id} key={s.id}>
                <div className="ledger-head"><Icon name={s.icon} large /><h3>{s.title}</h3></div>
                <div><p>{s.detail}</p></div>
                <ul className="ticks">{s.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="section">
        <div className="wrap narrow">
          <SectionTitle>Common Questions</SectionTitle>
          <div className="faq">
            {page.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}<Icon name="chevron" /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
